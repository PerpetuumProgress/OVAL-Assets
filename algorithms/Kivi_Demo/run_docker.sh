#!/bin/bash

sudo docker run --rm --ipc=host -v ./data:/usr/src/custom_data --ipc=host --gpus all custom_yolo:1.2 python3 ./val.py --weights trained_network.pt --data test.yaml


