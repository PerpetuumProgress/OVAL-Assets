import sys
import torch
import torchvision
import torchvision.transforms as transforms
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import numpy as np


# Definieren Sie den lokalen Pfad zu Ihrem CIFAR-10-Datensatz
if len(sys.argv) < 2:
    print("Bitte geben Sie den Pfad zum lokalen Datenverzeichnis an.")
    sys.exit(1)

local_data_path = sys.argv[1]
print ("local_data_path:", local_data_path)

# Transformationsdefinition für die Daten
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
])

# Laden Sie den Trainingsdatensatz aus dem lokalen Verzeichnis
trainset = torchvision.datasets.CIFAR10(root=local_data_path, train=True, download=False, transform=transform)
trainloader = torch.utils.data.DataLoader(trainset, batch_size=4, shuffle=True, num_workers=2)

# Laden Sie den Testdatensatz aus dem lokalen Verzeichnis
testset = torchvision.datasets.CIFAR10(root=local_data_path, train=False, download=False, transform=transform)
testloader = torch.utils.data.DataLoader(testset, batch_size=4, shuffle=False, num_workers=2)

# Klassenbezeichnungen für den CIFAR-10-Datensatz
classes = ('plane', 'car', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck')

class Net(nn.Module):
   def __init__(self):
       super().__init__()
       self.conv1 = nn.Conv2d(3, 6, 5)
       self.pool = nn.MaxPool2d(2, 2)
       self.conv2 = nn.Conv2d(6, 16, 5)
       self.fc1 = nn.Linear(16 * 5 * 5, 120)
       self.fc2 = nn.Linear(120, 84)
       self.fc3 = nn.Linear(84, 10)
   def forward(self, x):
       x = self.pool(F.relu(self.conv1(x)))
       x = self.pool(F.relu(self.conv2(x)))
       x = torch.flatten(x, 1) # flatten all dimensions except batch
       x = F.relu(self.fc1(x))
       x = F.relu(self.fc2(x))
       x = self.fc3(x)
       return x

net = Net()
criterion = nn.CrossEntropyLoss()
optimizer = optim.SGD(net.parameters(), lr=0.001, momentum=0.9)

# Training des Modells
print("Training...")
losses = []
for epoch in range(2):
    running_loss = 0.0
    for i, data in enumerate(trainloader, 0):
        inputs, labels = data
        optimizer.zero_grad()
        outputs = net(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
        running_loss += loss.item()
        if i % 2000 == 1999:
            print(f'[{epoch + 1}, {i + 1:5d}] loss: {running_loss / 2000:.3f}')
            losses.append(running_loss / 2000)
            running_loss = 0.0
print('Finished Training')

# Auswertung des Modells
correct = 0
total = 0
with torch.no_grad():
    for data in testloader:
        images, labels = data
        outputs = net(images)
        _, predicted = torch.max(outputs.data, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

# Ausgabe der Genauigkeit
accuracy = 100 * correct / total
print(f'Accuracy: {accuracy} %')

# Plotting der Verlustkurve
print("\nLosses during training:")
for i, loss in enumerate(losses, 1):
    print(f"Epoch {i}: {loss:.3f} {'#' * int(np.ceil(loss * 10))}")