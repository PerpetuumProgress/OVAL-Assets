#!/bin/bash

cd /data/inputs; tar -xvf $(find /data/inputs/ -name "0")

echo "Find local_data_path ..."
echo $(dirname $(find /data/inputs/ -type d -name "cifar-10-batches-py"))

echo "Find algorithm ..."
echo $(find /data/ -name "train_and_predict.py")

echo "Variable ALGO:"
echo $ALGO

echo "Tree /data/:"
ls -R /data/

echo "Tree /data/transformations/:"
ls -R /data/transformations/

python /data/transformations/algorithm $(dirname $(find /data/inputs/ -type d -name "cifar-10-batches-py"))