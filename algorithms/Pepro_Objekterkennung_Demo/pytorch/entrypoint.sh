#!/bin/bash

cd /data/inputs; tar -xvf $(find /data/inputs/ -name "0")

echo "Find local_data_path ..."
echo $(dirname $(find /data/inputs/ -type d -name "cifar-10-batches-py"))

python $ALGO/train_and_predict.py $(dirname $(find /data/inputs/ -type d -name "cifar-10-batches-py"))


