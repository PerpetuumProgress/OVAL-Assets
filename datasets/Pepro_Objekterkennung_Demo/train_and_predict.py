import os
import sys
import tensorflow as tf
from tensorflow.keras import layers, models
import matplotlib.pyplot as plt

dataset_path = sys.argv[1]  # Pfad zum Datensatz

# Modellarchitektur definieren
model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(1280, 720, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(128, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(512, activation='relu'),
    layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Datenvorbereitung (Beispiel mit tf.keras.preprocessing.image.ImageDataGenerator)
train_datagen = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1./255)
train_generator = train_datagen.flow_from_directory(
        os.path.join(dataset_path, 'training'),
        target_size=(1280, 720),
        batch_size=2,
        class_mode='binary')

test_datagen = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1./255)
validation_generator = test_datagen.flow_from_directory(
        os.path.join(dataset_path, 'validation'),
        target_size=(1280, 720),
        batch_size=2,
        class_mode='binary')

# Modell trainieren
history = model.fit(
      train_generator,
      steps_per_epoch=100,  # Abhängig von der Größe Ihres Datensatzes
      epochs=10,  # Für Demonstrationszwecke
      validation_data=validation_generator,
      validation_steps=40)  # Abhängig von der Größe Ihres Datensatzes

# Trainingsverlauf grafisch darstellen
acc = history.history['accuracy']
val_acc = history.history['val_accuracy']
loss = history.history['loss']
val_loss = history.history['val_loss']

epochs = range(len(acc))

plt.plot(epochs, acc, 'bo', label='Training accuracy')
plt.plot(epochs, val_acc, 'b', label='Validation accuracy')
plt.title('Training and validation accuracy')
plt.legend()

plt.figure()

plt.plot(epochs, loss, 'bo', label='Training Loss')
plt.plot(epochs, val_loss, 'b', label='Validation Loss')
plt.title('Training and validation loss')
plt.legend()

plt.show()
