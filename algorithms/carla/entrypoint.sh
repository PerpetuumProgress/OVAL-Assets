#!/bin/bash

## Run the carla server
su -c './carla/CarlaUE4.sh -RenderOffScreen' carla


## In a new Terminal connect to the carla server (Not working)
xterm -e 'cd /home/scenario_runner-0.9.13/'
python3 scenario_runner.py --openscenario srunner/examples/OscControllerExample.xosc


# file=$(find data/inputs -type f -name "0" -print -quit)
# cp "$file" data/inputs
