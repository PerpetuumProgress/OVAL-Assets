FROM thewtex/opengl:ubuntu2004

RUN apt update && apt install -y tree libgl1-mesa-dev libpthread-stubs0-dev libjpeg-dev libxml2-dev libpng-dev  ffmpeg libtiff5-dev libgdal-dev libpoppler-dev libdcmtk-dev libgstreamer1.0-dev libgtk2.0-dev libcairo2-dev libpoppler-glib-dev libxrandr-dev libxinerama-dev curl wget mkvtoolnix xvfb && apt-get autoremove -y && apt-get clean -y

COPY ./esmini-demo /esmini-demo

ENV DISPLAY :1.0
ENV LENGTH 20
ENV RESOLUTION 320x240
ENV FRAMERATE 20

COPY ./entrypoint.sh .
RUN ["chmod", "+x", "entrypoint.sh"]
