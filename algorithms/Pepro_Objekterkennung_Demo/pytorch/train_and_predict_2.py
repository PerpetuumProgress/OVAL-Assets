import os
import sys
import json
import tarfile
import torch
import torchvision
import torchvision.transforms as transforms
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import numpy as np

def get_job_details():
    """Reads in metadata information about assets used by the algo"""
    job = dict()
    job['dids'] = json.loads(os.getenv('DIDS', None))
    job['metadata'] = dict()
    job['files'] = dict()
    job['algo'] = dict()
    job['secret'] = os.getenv('secret', None)
    algo_did = os.getenv('TRANSFORMATION_DID', None)
    if job['dids'] is not None:
        for did in job['dids']:
            # get the ddo from disk
            filename = '/data/ddos/' + did
            print(f'Reading json from {filename}')
            with open(filename) as json_file:
                ddo = json.load(json_file)
                # search for metadata service
                for service in ddo['service']:
                    if service['type'] == 'metadata':
                        job['files'][did] = list()
                        index = 0
                        for file in service['attributes']['main']['files']:
                            job['files'][did].append(
                                '/data/inputs/' + did + '/' + str(index))
                            index = index + 1
    if algo_did is not None:
        job['algo']['did'] = algo_did
        job['algo']['ddo_path'] = '/data/ddos/' + algo_did
    return job


def extract_tar(tar_file, target_folder):
    with tarfile.open(tar_file, 'r:gz') as tar:
        tar.extractall(target_folder)


def search_folder(root_folder, target_folder_name):
    # Durchsuche alle Unterordner im Stammverzeichnis
    for root, dirs, files in os.walk(root_folder):
        # Überprüfe, ob der Zielordner im aktuellen Unterordner enthalten ist
        if target_folder_name in dirs:
            # Wenn ja, gib den Pfad des übergeordneten Ordners zurück
            return os.path.abspath(os.path.join(root, target_folder_name))
    # Wenn der Zielordner nicht gefunden wurde, gib None zurück
    return None


def train_and_predict(job_details):
    # Definieren Sie den lokalen Pfad zu Ihrem CIFAR-10-Datensatz
    first_did = job_details['dids'][0]
    filename = job_details['files'][first_did][0]

    # Erhalte den Pfad zur .tar.gz-Datei
    tar_file = filename

    # Bestimme den Namen der .tar.gz-Datei ohne Erweiterung
    file_name = os.path.splitext(tar_file)[0]

    # Passe den Zielordner an, um im selben Verzeichnis wie die .tar.gz-Datei zu liegen
    target_folder = os.path.join(os.path.dirname(tar_file), file_name)

    # Extrahiere die .tar.gz-Datei
    extract_tar(tar_file, target_folder)

    # Stammverzeichnis, in dem die Suche beginnen soll
    root_folder = target_folder

    # Name des gesuchten Ordners
    target_folder_name = 'cifar-10-batches-py'

    # Suche nach dem Zielordner und gib den Pfad des übergeordneten Ordners aus
    result = search_folder(root_folder, target_folder_name)

    local_data_path = result

    print("local_data_path:", local_data_path)

    # Transformationsdefinition für die Daten
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ])

    # Laden des Trainingsdatensatz aus dem lokalen Verzeichnis
    trainset = torchvision.datasets.CIFAR10(root=local_data_path, train=True, download=False, transform=transform)
    trainloader = torch.utils.data.DataLoader(trainset, batch_size=4, shuffle=True, num_workers=2)

    # Laden des Testdatensatz aus dem lokalen Verzeichnis
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
            x = torch.flatten(x, 1)  # flatten all dimensions except batch
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


if __name__ == "__main__":
    train_and_predict(get_job_details())