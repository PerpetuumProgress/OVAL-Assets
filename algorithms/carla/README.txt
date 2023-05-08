## Run Carla locally

Step 1: Build docker image

docker build . -t carla:0.9.13_local

Step 2: Run the container with privileges

sudo docker run -it --rm --privileged -u root --gpus all --net=host -e DISPLAY=$DISPLAY --volume /temp/.X11-unix:/temp/.X11-unix carla:0.9.13_test /bin/bash

Step 3: Run Carla Server

./entrypoint.sh

Step 4: Run a scenario

- Enter the running carla container 
  docker exec -it conatiner_id bash
  
- Run a scenario using python client
  ./run_osc_scenario.sh
  
  
This will run an example scenario 'OscControllerExample.xosc' and will save the recording as json file in output folder
