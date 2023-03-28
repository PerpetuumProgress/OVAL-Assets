FROM python:3.7-slim

COPY ./template/perpetuumprogress_transparent.png /template/perpetuumprogress_transparent.png
COPY ./template/OpenDRIVE_1.5M.xsd /template/OpenDRIVE_1.5M.xsd
COPY ./ODR_Checker.py /
COPY ./requirements.txt /tmp/
RUN apt update && apt install -y vim
RUN pip install -r /tmp/requirements.txt

COPY ./entrypoint.sh .
RUN ["chmod", "+x", "entrypoint.sh"]

