FROM python:3.7-slim

COPY ./qchecker /
COPY requirements.txt /tmp/
RUN pip install -r /tmp/requirements.txt

COPY ./entrypoint.sh .
RUN ["chmod", "+x", "entrypoint.sh"]
