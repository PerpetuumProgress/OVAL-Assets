import os
import fnmatch
import sys
import traceback
from xml.etree import ElementTree as ET
import xmlschema
import csv
import fpdf
import pathlib


def main():
    # file paths
    xsd_file = r'OpenDRIVE_1.5M.xsd'
    xml_directory = r"..\data\inputs"
    xml_extension = r".xodr"
    xml_file = ""

    # find the file name
    xml_file = [os.path.join(xml_directory, _) for _ in os.listdir(xml_directory) if _.endswith(xml_extension)]
    print(xml_file[0])

    # Validate against Schema
    my_schema = xmlschema.XMLSchema(xsd_file)
    result = my_schema.is_valid(xml_file[0])
    
    # Gather meta data
    xml_tree = ET.parse(xml_file[0])
    root = xml_tree.getroot()

    for header in root.iter('header'):
        print(header.attrib.get('date'))
        output11 = 'ODR Creation Date : '
        output12 = header.attrib.get('date')

    for road in root.iter('road'):
        output31 = 'Type of Road included : '
        output32 = 'No Road Type defined'
        for type in road.iter('type'):
            output32 = type.attrib.get('type')

    output21 = 'Consistent with XSD 1.5M: '

    if result:
        output22 = str(result)
    else:
        output22 = str(result)


    # Result pooling

    class PDF(fpdf.FPDF):
        def header(self):
            # Logo
            self.image('perpetuumprogress_transparent.png', 10, 8, 33)
            # Arial bold 15
            self.set_font('Arial', 'B', 15)
            # Move to the right
            self.cell(80)
            # Title
            self.cell(30, 10, 'Q-Checker Report')
            # Line break
            self.ln(30)

        # Page footer
        def footer(self):
            # Position at 1.5 cm from bottom
            self.set_y(-15)
            # Arial italic 8
            self.set_font('Arial', 'I', 8)
            # Page number
            self.cell(0, 10, 'Page ' + str(self.page_no()))

    pdf = PDF()
    pdf.add_page()
    ''' for i in output:
        pdf.write(20, str(i))
        pdf.ln() '''
    pdf.set_font_size(10)
    pdf.write(20, output11)
    pdf.write(20, output12)
    pdf.ln(15)
    pdf.write(5, output21)
    pdf.write(5, output22)
    pdf.ln(5)
    pdf.write(5, output31)
    pdf.write(5, output32)

    pdf.output("../data/outputs/CheckerLog.pdf")


if __name__ == "__main__":
    main()
