<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version='1.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform' xmlns:xsd="http://www.w3.org/2001/XMLSchema">
<xsl:output method='xml' indent='yes' />

<xsl:template match="comment()">
    <xsl:choose>
		<xsl:when test="name(..)='xsd:schema'">
			<xsl:comment>
ASAM OpenSCENARIO V1.1.1 FINAL- STRICT
*************************************************************************************************************
** Note:This is the 1.1.1 schema with all deprecated artifacts removed for 1.1.1 strict validation 
*************************************************************************************************************

__(c)__ by ASAM e.V., 2021

Description of dynamic content in driving simulations

Any use is limited to the scope described in the ASAM license terms. 
This file is distributable in accordance with the ASAM license terms. 
See www.asam.net/license.html for further details.
</xsl:comment>	
		</xsl:when>
		<xsl:otherwise>
			<xsl:copy/>
		</xsl:otherwise>
	</xsl:choose>
</xsl:template>

<xsl:template match="@*|*">
	<xsl:choose>
		<xsl:when test="not(./xsd:annotation/xsd:appinfo[.='deprecated'])">
			<xsl:copy>
				<xsl:apply-templates select="@*|node()"/>
			</xsl:copy>
		</xsl:when>
	</xsl:choose>
</xsl:template>
</xsl:stylesheet>
