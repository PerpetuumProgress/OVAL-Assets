
import os
import fnmatch
import sys
import traceback
from xml.etree import ElementTree as ET
import xmlschema
import csv

xsd_file = 'OpenDRIVE_1.5M.xsd'
xml_file = '/data/inputs/AB_Oval.xodr'

output = []
my_schema = xmlschema.XMLSchema(xsd_file)
print('If ', xml_file, ' is valid: ', my_schema.is_valid(xml_file))

result = my_schema.is_valid(xml_file)

output1 = 'If ' + xml_file + ' is valid against' + xsd_file + '?' , result 

output.append(output1)

odr_as_dict = my_schema.to_dict(xml_file)

my_schema.validate(xml_file)

xml_tree = ET.parse(xml_file)
root = xml_tree.getroot()



for header in root.iter('header'):
  
    print(header.attrib.get('date'))
    output2 = 'Date and Time Created : ' , header.attrib.get('date')
    output.append(output2)

print(output)

with open('/data/outputs/CheckerLog.csv', 'w', encoding='UTF8', newline='') as f:
    writer = csv.writer(f)

    writer.writerow(output1)
    writer.writerow(output2)

    f.close()
