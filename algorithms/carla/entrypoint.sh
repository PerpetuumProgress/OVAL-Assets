#!/bin/bash

## Run the carla server
su -c './home/carla/CarlaUE4.sh -RenderOffScreen' carla &

while ! nc -z 127.0.0.1 2000; do
        sleep 20
done

## Prepare the scenario
file=$(find data/inputs -type f -name "0" -print -quit)
#cp "$file" data/inputs

## Connect to the carla server and run the scenario
cd /home/scenario_runner-0.9.13/
python3 scenario_runner.py --openscenario /data/inputs/0 --reloadWorld --trafficManagerPort 8005 --json
mv /home/scenario_runner-0.9.13/*.json /data/outputs/


## Testing purpose
# python3 scenario_runner.py --openscenario srunner/examples/OscControllerExample.xosc --reloadWorld --trafficManagerPort 8005 --json
# cd /
# python3 record_log.py




