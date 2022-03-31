
var margin = {top: 20, right: 120, bottom: 20, left: 120},
	width = 960 - margin.right - margin.left,
	height = 1000 - margin.top - margin.bottom;

var svgImage = null;
var tree = null;
var tooltip = null;
var root = null;
var diagonal = d3.svg.diagonal().projection(function(d) { return [d.y, d.x]; });

var i = 0,
	duration = 750;

function initSvg(d3)
{
	setTree(d3.layout.tree().size([getHeight(), getWidth()]));
	setSvgImage(d3.select("body").append("svg"));
	getSvgImage().attr("width", getWidth() + margin.right + margin.left);
	getSvgImage().attr("height", getHeight() + margin.top + margin.bottom);
	getSvgImage().style("overflow-x", "scroll");
	getSvgImage().style("overflow-y", "scroll");
	// Add SvgGroup
	setSvgGroup(getSvgImage().append("g")
	.attr("transform", "translate(" + getMargin().left + "," + getMargin().top + ")"));
	//Adding the tooltip
	setTooltip(d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0));
}

function setRoot(rootToSet)
{
	root = rootToSet;
};

function getRoot()
{
	return root;
};

function setTypes(typesToSet)
{
	types = typesToSet;
};

function getTypes()
{
	return types;
};
function setSvgGroup(svgGroupToSet)
{
	svgGroup = svgGroupToSet;
};

function getSvgGroup()
{
	return svgGroup;
};
function setTooltip(tooltipToSet)
{
	 tooltip = tooltipToSet;
}
function getTooltip()
{
	 return tooltip;
}


function getWidth()
{
	return width;
};

function setWidth(widthToSet)
{
	width = widthToSet;
};

function getTree()
{
	return tree;
};

function setTree(treeToSet)
{
	tree = treeToSet;
};

function setHeight(heightToSet)
{
	height = heightToSet;
};

function getHeight()
{
	return height;
};

function setSvgImage(svgImageToSet)
{
	svgImage = svgImageToSet;
};

function getSvgImage()
{
	return svgImage;
};

function getMargin()
{
	return margin;
};

function setLayout(root)
{
	// calculate width 
	setWidth(200 * getMaxLevel(root,1) - getMargin().right - getMargin().left);
	getSvgImage().attr("width", getWidth() + getMargin().right + getMargin().left);
	getSvgImage().attr("height" , 1000 + getMargin().top + getMargin().bottom);
	getTree().size([getHeight(), getWidth()]);
}

function getMaxLevel(node, currentLevel)
{
	//recursive
	if (node.children != null)
	{	
		var children = node.children;
		var maxLevel = currentLevel+1;
		for (var i = 0; i < children.length; i++) {
			var newLevel = getMaxLevel(children[i], currentLevel+1);
			if (newLevel > maxLevel)
			{
				maxLevel = newLevel;
			}
		}
		return maxLevel;
	}else
	{
		return currentLevel;
	}
	
};
function getTypeNode(types, typeName)
{
	return types.find(function(type){ return type["name"] == typeName;});
};

function hasChildren(node)
{
	return node["typeNode"] && ((node.modelType == "element") ||  (node.typeNode.particles != null));
};



function makeLevelPositions(nodes)
{
	var levelMap ={};
	var maxLevel = getMaxLevel(getRoot(),1);
	console.log(maxLevel);
	
	nodes.forEach(function(d) { 
		if (d.modelType != "complexType" && d.modelType != "groupType" && d.modelType != "group")
		{
			levelMap[d.depth] = "long";
			
		}else
		{
			if (levelMap[d.depth] == null )
			{
				levelMap[d.depth] = "short";
			}
		}
	});
	levelArray = [0];
	var offset = 0;
	for (var i = 1; i< maxLevel; i++) {
		if (levelMap[i] == "long" )
		{
			offset = offset + 200;
			
		}
		else if (levelMap[i] == "short")
		{
			offset = offset + 100;
		}
		levelArray.push(offset);
		
	};
	return levelArray;
  
}
function getCircleStyleClass(d)
{
	var styleClass = null;
	if (hasChildren(d))
	{if (d.modelType == "element")
	 {
		styleClass = "elementWithChildren"
	 }
	 else
	 {
	 	styleClass = "typeWithChildren"
	 }
	}else
	{
	 if (d.modelType == "element")
	 {
	 	styleClass = "elementNoChildren"
	 }
	 else
	 {
	 	styleClass = "typeNoChildren"
	 }
	}
	return 	styleClass;
};

function update(source) {

  // Compute the new tree layout.
  var nodes = getTree().nodes(getRoot()).reverse(),
	  links = getTree().links(nodes);

  // Normalize for fixed-depth.
  var levelArray = makeLevelPositions(nodes);
  
  nodes.forEach(function(d) { d.y = levelArray[d.depth];});
  
  // Get Y Correction
  var verticalPosition = height;
  nodes.forEach(function(d) { if (d.x < verticalPosition){verticalPosition = d.x}});
  nodes.forEach(function(d) { d.x = d.x - verticalPosition + getMargin().top; });
  
  
  // Update the nodes…
  var node = getSvgGroup().selectAll("g.node")
	  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
	  .on("click", click)
	  .on("mouseover", function(d) {		
            getTooltip().transition()
            	.delay(500)	
                .duration(200)		
                .style("opacity", .9);		
            getTooltip().html(getTooltipText(d))
                .style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
            })					
      .on("mouseout", function(d) {		
            getTooltip().transition()		
                .duration(500)		
                .style("opacity", 0);	
       });

  nodeEnter.append("circle")
	  .attr("r", 1e-6)
	  .attr("class", getCircleStyleClass);

  nodeEnter.append("text")
	  .attr("x", function(d) { return d.children || hasChildren(d) ? -13 : 13; })
	  .attr("dy", ".35em")
	  .attr("text-anchor", function(d) { return d.children || hasChildren(d) ? "end" : "start"; })
	  .text(function(d) { return d.name; })
	  .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
	  .attr("r", 10)
	  .attr("class", getCircleStyleClass);

  nodeUpdate.select("text")
	  .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
	  .remove();

  nodeExit.select("circle")
	  .attr("r", 1e-6);

  nodeExit.select("text")
	  .style("fill-opacity", 1e-6);

  // Update the links…
  var link = getSvgGroup().selectAll("path.link")
	  .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
	  .attr("class", "link")
	  .attr("d", function(d) {
		var o = {x: source.x0, y: source.y0};
		return diagonal({source: o, target: o});
	  });

  // Transition links to their new position.
  link.transition()
	  .duration(duration)
	  .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
	  .duration(duration)
	  .attr("d", function(d) {
		var o = {x: source.x, y: source.y};
		return diagonal({source: o, target: o});
	  })
	  .remove();
  // Stash the old positions for transition.
  nodes.forEach(function(d) {
	d.x0 = d.x;
	d.y0 = d.y;
  });
}
function getTooltipText(d)
{
 var result = "";
 if (d.modelType =="element")
 {
	result = result + "<b>Element</b>";
	result = result + "</br>[" +  d.minOccurs + "..";
	if (d.maxOccurs == "unbounded")
	{
		result = result + "*]";
	}else
	{
		result = result + d.maxOccurs + "]";
	}
 }else if(d.modelType =="groupType")
 {
	// Add particles as types
	result = result + "<b>Group</b>";
	result = result + "</br>" + d.typeNode.name;
	
 }else if(d.modelType =="complexType")
 {
	// Add Particles as Elements
	result = result + "<b>ComplexType</b>";
	result = result + "<br/>" + d.typeNode.name;
	var attributes = d.typeNode.attributes;
	if (attributes != null)
	{
		result = result + "<br/><b>Attributes</b>";
		result = result + "<ul>";
		attributes.forEach(function(attribute){
			result = result + "<li>" 
			+ attribute.name + " ("
			+ attribute.type + ") ";
			if (attribute.use == "required")
			{
				result = result + "[1..1]";
			}else{
				result = result + "[0..1]";
			}
			result = result + "</li>";
			
		});
		result = result + "</ul>";
	}
	
	
 }else if(d.modelType =="group")
 {
	// Add particles as types
	result = result + "<b>GroupRef</b>";
	
 }
 return result;
}
// Toggle children on click.
function click(d) {
  if (d.children) {
	d.children = null;
  } else {
	var nextChild = null;
	if (d.modelType =="element" || d.modelType == "group")
	{
		var child = 
		{
				"name": d.typeNode.modelGroup,
				"modelType": d.typeNode.modelType,
				"typeNode": d.typeNode
		}
		d.children = []
		d.children.push(child);
		// Open the next Level
		//nextChild = child;
	}else if(d.modelType =="groupType" || d.modelType =="complexType")
	{
		// Add particles as types
		var typeNode = d.typeNode;
		var particles = typeNode.particles;
		if (particles != null)
		{
			d.children = [];
			for (var i = 0; i < particles.length; i++) {
				var subTypeNode = getTypeNode(getTypes(), particles[i].type)
				var map = null;
				if (particles[i].modelType == "element")
				{
					map = 
					{ 
						"typeNode" : subTypeNode,
						"modelType" :  particles[i].modelType
					};
					map.name =  particles[i].name;
					map.minOccurs = particles[i].minOccurs;
					map.maxOccurs = particles[i].maxOccurs;
				}else
				{
					// Add group directly
					map = 
					{ 
						"name" : subTypeNode.modelGroup,
						"typeNode" : subTypeNode,
						"modelType" :  "groupType"
						
					};
				}
				d.children.push(map);
				
			};
		}
		
	}
	
  }
  setLayout(getRoot());
  update(d);
}