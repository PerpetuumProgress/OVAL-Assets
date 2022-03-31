
import os
import sys
import fnmatch
import traceback
import xmlschema
import pathlib
import csv
from xml.etree import ElementTree as ET


def main():
    # file paths
    xsd_file = "OpenDRIVE_1.5M.xsd"
    xml_directory = r"..\data\inputs"
    xml_extension = r".xodr"
    xml_file = ""

    # find the file name
    xml_file = [os.path.join(xml_directory, _) for _ in os.listdir(xml_directory) if _.endswith(xml_extension)]
    print(xml_file[0])

    output = []
    my_schema = xmlschema.XMLSchema(xsd_file)
    print('If ', xml_file[0], ' is valid: ', my_schema.is_valid(xml_file[0]))

    result = my_schema.is_valid(xml_file[0])

    output1 = 'If ' + xml_file[0] + ' is valid against' + xsd_file + '?' , result

    output.append(output1)


    xml_tree = ET.parse(xml_file[0])
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


if __name__ == "__main__":
    main()