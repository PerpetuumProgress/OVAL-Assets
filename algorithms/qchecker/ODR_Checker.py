import os
from xml.etree import ElementTree as ET
import xmlschema
from xmlschema import XMLSchemaValidationError
import fpdf


#not used
import csv
import pathlib
import fnmatch
import sys
import traceback


def main():
    
    # file paths
    xsd_file = 'template/OpenDRIVE_1.5M.xsd'
    xml_directory = "/data/inputs"
    xml_file = ["data/inputs/0"]

    # Check the validity
    my_schema = xmlschema.XMLSchema(xsd_file)
    result = my_schema.is_valid(xml_file[0])
    output71 = ' - Schema Checker Result : '
    try:
        my_schema.validate(xml_file[0])
        output72 = 'No Error'
    except XMLSchemaValidationError as err:
        path_line = str(err).splitlines()[-1]
        output72 = err.args
    else:
        path_line = ''

    # Gather Metadata and Pool the results
    xml_tree = ET.parse(xml_file[0])
    root = xml_tree.getroot()

    for header in root.iter('header'):
        print(header.attrib.get('date'))
        output11 = ' - Creation Date : '
        output12 = header.attrib.get('date')
        output41 = ' - Vendor : '
        if header.attrib.get('vendor'):
            output42 = header.attrib.get('vendor')
        else:
            output42 = 'Not Mentioned in the header'
        output51 = ' - Format Version : '
        output52 = header.attrib.get('revMajor') + '.' + header.attrib.get('revMinor')
        output61 = ' - Geo-Coordinates (NSEW) : '
        if header.attrib.get('north'):
            output62 = header.attrib.get('north') + ',' + header.attrib.get('south') + ',' + header.attrib.get('east') + ',' + header.attrib.get('west')
        else:
            output62 = 'Geo Location Not available'

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
            self.image('template/perpetuumprogress_transparent.png', 10, 8, 20)
            # Text Colour
            self.set_text_color(000)
            # Arial bold 15
            self.set_font('Arial', 'B', 15)
            # Move to the right
            self.cell(50)
            # Title
            self.cell(20, 20, 'Quality assurance of the model')
            # Line break
            self.ln(30)

        # Page footer
        def footer(self):
            # Logo
            self.image('template/perpetuumprogress_transparent.png', 10, -15, 10)
            # Position at 1.5 cm from bottom
            self.set_y(-15)
            # Arial italic 8
            self.set_font('Arial', 'I', 8)
            # Page number
            self.cell(0, 10, 'Page ' + str(self.page_no()))

    pdf = PDF()
    pdf.add_page()
    # Heading
    pdf.set_font('Arial', 'B', 10)
    pdf.cell(20, 20, 'General Description')
    pdf.ln(10)

    pdf.set_text_color(128)
    pdf.set_font_size(10)
    pdf.ln(10)
    pdf.write(5, ' - File Name : ')
    pdf.write(5, header.attrib.get('name'))
    pdf.ln(5)
    pdf.write(5, output11)
    pdf.write(5, output12)
    pdf.ln(5)
    pdf.write(5, output41)
    pdf.write(5, output42)
    pdf.ln(5)
    pdf.write(5, output51)
    pdf.write(5, output52)

    # Content
    pdf.add_page()
    # Heading
    pdf.set_text_color(000)
    pdf.set_font('Arial', 'B', 10)
    pdf.cell(20, 20, 'Content')
    pdf.ln(20)

    pdf.set_text_color(128)
    pdf.set_font_size(10)
    pdf.write(5, output31)
    pdf.write(5, output32)
    pdf.ln(5)
    pdf.write(5, output61)
    pdf.write(5, output62)

    # Quality
    pdf.add_page()
    # Heading
    pdf.set_text_color(000)
    pdf.set_font('Arial', 'B', 10)
    pdf.cell(20, 20, 'Quality')
    pdf.ln(20)

    pdf.set_text_color(128)
    pdf.set_font_size(10)
    pdf.write(5, output21)
    pdf.write(5, output22)
    pdf.ln(5)
    pdf.write(5, output71)
    pdf.write(5, output72.__str__())

    pdf.output("data/outputs/QA-Report.pdf")



if __name__ == "__main__":
    main()
