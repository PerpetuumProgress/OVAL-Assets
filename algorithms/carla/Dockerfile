FROM ubuntu:18.04
FROM carlasim/carla:0.9.13
USER root
RUN apt-key adv --fetch-keys https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/3bf863cc.pub
RUN apt-get update && apt-get install -y xdg-user-dirs xdg-utils && apt-get clean
RUN apt-get update
RUN apt-get install -y curl git vim wget python3.7 python3.7-dev python3.7-distutils
RUN apt --assume-yes install python3-pip netcat
RUN pip3 install --upgrade pip
RUN pip3 install carla
RUN cd /home/carla/PythonAPI/examples && python3 -m pip install -r requirements.txt
RUN cd /home && wget https://github.com/carla-simulator/scenario_runner/archive/refs/tags/v0.9.13.tar.gz && tar -xzvf v0.9.13.tar.gz && rm v0.9.13.tar.gz
RUN cd /home/scenario_runner-0.9.13/ && pip3 install --user -r requirements.txt
RUN apt remove python3-networkx && pip3 uninstall -y tensorflow && pip3 install agents tensorflow==1.15
ENV PYTHONPATH=$PYTHONPATH:/home/carla/PythonAPI/carla/dist/carla-0.9.13.egg 
ENV PYTHONPATH=$PYTHONPATH:/home/carla/PythonAPI/carla
WORKDIR /
COPY ./entrypoint.sh .
RUN ["chmod", "+x", "/entrypoint.sh"]
COPY ./record_log.py .
USER carla






