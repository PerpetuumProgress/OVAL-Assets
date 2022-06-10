#!/bin/bash

cd /data/inputs; tar -xvf $(find /data/inputs/ -name "0")
cd ../../ ; python3 ODR_Checker.py -i $(find /data/inputs/ -name "test_1.xodr")

