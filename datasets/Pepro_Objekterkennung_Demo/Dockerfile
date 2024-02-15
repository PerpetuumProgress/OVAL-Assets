# Basierend auf dem offiziellen Python-Image
FROM python:3.8

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Abhängigkeiten installieren
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Anwendungscode kopieren
COPY . /app/

# Standardbefehl definieren
# CMD ["python", "train_and_predict.py", "./data"]


