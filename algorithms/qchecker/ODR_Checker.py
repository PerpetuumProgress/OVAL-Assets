import os
from xml.etree import ElementTree as ET
import xmlschema
import fpdf
import json
#import pandas as pd


#not used
import csv
import pathlib
import fnmatch
import sys
import traceback

def get_job_details():
    #Reads in metadata information about assets used by the algo
    job = dict()
    job['dids'] = json.loads(os.getenv('DIDS', None))
    job['metadata'] = dict()
    job['files'] = dict()
    job['algo'] = dict()
    job['secret'] = os.getenv('secret', None)
    algo_did = os.getenv('TRANSFORMATION_DID', None)
    if job['dids'] is not None:
        for did in job['dids']:
            # get the ddo from disk
            filename = '/data/ddos/' + did
            print(f'Reading json from {filename}')
            with open(filename) as json_file:
                ddo = json.load(json_file)
                # search for metadata service
                # for service in ddo['service']:
                #     if service['type'] == 'metadata':
                #         job['files'][did] = list()
                #         index = 0
                #         for file in service['attributes']['main']['files']:
                #             job['files'][did].append(
                #                 '/data/inputs/' + did + '/' + str(index))
                #             index = index + 1
    if algo_did is not None:
        job['algo']['did'] = algo_did
        job['algo']['ddo_path'] = '/data/ddos/' + algo_did
    return job

def QChecker(job_details):
    
    # file paths
    xsd_file = 'OpenDRIVE_1.5M.xsd'
    xml_directory = "/data/inputs"
    #xml_file = ["/data/inputs/0"]

    # Executes function based on input
    print('Starting compute job with the following input information:')
    print(json.dumps(job_details, sort_keys=True, indent=4))

    #find the file name
    first_did = job_details['dids'][0]
    print(first_did)
    filename = '/data/ddos/' + first_did
    #filename = job_details['files'][first_did][0]
    print(filename)
    xml_file = [xml_directory + "/" + filename]
    print(xml_file)
    #xml_file = filename



    # find the file name for test
    #xml_extension = ".xodr"
    #xml_file = [os.path.join(xml_directory, _) for _ in os.listdir(xml_directory) if _.endswith(xml_extension)]
    #print(xml_file[0].split('/')[3])

    # Check the validity
    my_schema = xmlschema.XMLSchema(xsd_file)
    result = my_schema.is_valid(xml_file[0])

    # Gather Metadata and Pool the results
    xml_tree = ET.parse(xml_file[0])
    root = xml_tree.getroot()

    for header in root.iter('header'):
        print(header.attrib.get('date'))
        output11 = ' - Creation Date : '
        output12 = header.attrib.get('date')

    output21 = ' - Consistent with Quality schema version 1.5M ? : '

    if result:
        output22 = str(result)
    else:
        output22 = str(result)
    for road in root.iter('road'):
        output31 = ' - Type(s) of Road included : '
        output32 = 'No Road Type defined'
        for type in road.iter('type'):
            if type.attrib.get('type'):
                output32 = type.attrib.get('type')
            else:
                output32 = 'No Road Type defined'


    # Generate Report

    class PDF(fpdf.FPDF):
        def header(self):
            # Logo
            self.image('perpetuumprogress_transparent.png', 10, 8, 20)
            # Arial bold 15
            self.set_font('Arial', 'B', 15)
            # Move to the right
            self.cell(50)
            # Title
            self.cell(20, 20, 'Credible Modelling Process Checker Result')
            # Line break
            self.ln(30)

        # Page footer
        def footer(self):
            # Logo
            self.image('perpetuumprogress_transparent.png', 10, -15, 10)
            # Position at 1.5 cm from bottom
            self.set_y(-15)
            # Arial italic 8
            self.set_font('Arial', 'I', 8)
            # Page number
            self.cell(0, 10, 'Page ' + str(self.page_no()))

    pdf = PDF()
    pdf.add_page()

    pdf.set_text_color(128)
    pdf.set_font_size(10)
    pdf.ln(10)
    pdf.write(5, ' - OpenDrive File Name : ')
    pdf.write(5, xml_file[0].split('/')[3])
    pdf.ln(5)
    pdf.write(5, output11)
    pdf.write(5, output12)
    pdf.ln(5)

    pdf.write(5, output21)
    pdf.write(5, output22)
    pdf.ln(5)
    pdf.write(5, output31)
    pdf.write(5, output32)

    pdf.output("/data/outputs/CMPCheckResult.pdf")


if __name__ == "__main__":
    QChecker(get_job_details())
