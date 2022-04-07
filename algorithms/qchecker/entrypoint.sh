#!/bin/bash

cd /data/inputs; tar -xvf $(find /data/inputs/ -name "0")
pyhton3 ODR_Checker -i $(find /data/inputs/ -name "straight_500m.xodr")
