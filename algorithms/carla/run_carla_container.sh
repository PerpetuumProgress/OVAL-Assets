#docker run -it --rm --privileged -u root --gpus all --net=host -e DISPLAY=$DISPLAY --volume /temp/.X11-unix:/temp/.X11-unix -v /outputs:/data/outputs carla:0.9.13_test /bin/bash
docker run -it --rm --privileged -u root --gpus all --net=host -e DISPLAY=$DISPLAY --volume /temp/.X11-unix:/temp/.X11-unix -v $(pwd)/data/outputs:/data/outputs -v $(pwd)/data/inputs/0:/data/inputs/0 carla:0.9.13_test ./entrypoint.sh

