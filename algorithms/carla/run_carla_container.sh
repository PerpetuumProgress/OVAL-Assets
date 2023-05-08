docker run -it --rm --privileged -u root --gpus all --net=host -e DISPLAY=$DISPLAY --volume /temp/.X11-unix:/temp/.X11-unix carla:0.9.13_test /bin/bash


