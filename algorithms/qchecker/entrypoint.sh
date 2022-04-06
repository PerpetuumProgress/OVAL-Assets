#!/bin/bash
# cd /data/inputs; tar -xvf $(find /data/inputs/ -name "0")

python3 ODR_Checker.py -i $(find /data/inputs/ -name "0")
