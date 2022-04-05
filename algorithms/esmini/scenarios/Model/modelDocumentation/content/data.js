var typedata = {
    "types": [
        {
            "name": "AbsoluteSpeed",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "SteadyState",
                    "modelType": "group",
                    "type": "SteadyState"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "AbsoluteTargetLane",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "AbsoluteTargetLaneOffset",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "AbsoluteTargetSpeed",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "AccelerationCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "AcquirePositionAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "Act",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ManeuverGroup",
                    "modelType": "element",
                    "type": "ManeuverGroup",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "StartTrigger",
                    "modelType": "element",
                    "type": "Trigger",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "StopTrigger",
                    "modelType": "element",
                    "type": "Trigger",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Action",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "GlobalAction",
                    "modelType": "element",
                    "type": "GlobalAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "UserDefinedAction",
                    "modelType": "element",
                    "type": "UserDefinedAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "PrivateAction",
                    "modelType": "element",
                    "type": "PrivateAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "ActivateControllerAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "lateral",
                    "type": "Boolean",
                    "use": "optional"
                },
                {
                    "name": "longitudinal",
                    "type": "Boolean",
                    "use": "optional"
                }
            ]
        },
        {
            "name": "Actors",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "selectTriggeringEntities",
                    "type": "Boolean",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "EntityRef",
                    "modelType": "element",
                    "type": "EntityRef",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "AddEntityAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "AssignControllerAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "activateLateral",
                    "type": "Boolean",
                    "use": "optional"
                },
                {
                    "name": "activateLongitudinal",
                    "type": "Boolean",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Controller",
                    "modelType": "element",
                    "type": "Controller",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "CatalogReference",
                    "modelType": "element",
                    "type": "CatalogReference",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "AssignRouteAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Route",
                    "modelType": "element",
                    "type": "Route",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "CatalogReference",
                    "modelType": "element",
                    "type": "CatalogReference",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Axle",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "maxSteering",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "positionX",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "positionZ",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "trackWidth",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "wheelDiameter",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Axles",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "FrontAxle",
                    "modelType": "element",
                    "type": "Axle",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "RearAxle",
                    "modelType": "element",
                    "type": "Axle",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "AdditionalAxle",
                    "modelType": "element",
                    "type": "Axle",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "BoundingBox",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Center",
                    "modelType": "element",
                    "type": "Center",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Dimensions",
                    "modelType": "element",
                    "type": "Dimensions",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "ByEntityCondition",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "TriggeringEntities",
                    "modelType": "element",
                    "type": "TriggeringEntities",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "EntityCondition",
                    "modelType": "element",
                    "type": "EntityCondition",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "ByObjectType",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "type",
                    "type": "ObjectType",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ByType",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "objectType",
                    "type": "ObjectType",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ByValueCondition",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "ParameterCondition",
                    "modelType": "element",
                    "type": "ParameterCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TimeOfDayCondition",
                    "modelType": "element",
                    "type": "TimeOfDayCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "SimulationTimeCondition",
                    "modelType": "element",
                    "type": "SimulationTimeCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "StoryboardElementStateCondition",
                    "modelType": "element",
                    "type": "StoryboardElementStateCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "UserDefinedValueCondition",
                    "modelType": "element",
                    "type": "UserDefinedValueCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficSignalCondition",
                    "modelType": "element",
                    "type": "TrafficSignalCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficSignalControllerCondition",
                    "modelType": "element",
                    "type": "TrafficSignalControllerCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Catalog",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Vehicle",
                    "modelType": "element",
                    "type": "Vehicle",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "Controller",
                    "modelType": "element",
                    "type": "Controller",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "Pedestrian",
                    "modelType": "element",
                    "type": "Pedestrian",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "MiscObject",
                    "modelType": "element",
                    "type": "MiscObject",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "Environment",
                    "modelType": "element",
                    "type": "Environment",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "Maneuver",
                    "modelType": "element",
                    "type": "Maneuver",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "Trajectory",
                    "modelType": "element",
                    "type": "Trajectory",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "Route",
                    "modelType": "element",
                    "type": "Route",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "CatalogDefinition",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "Catalog",
                    "modelType": "element",
                    "type": "Catalog",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "CatalogLocations",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "VehicleCatalog",
                    "modelType": "element",
                    "type": "VehicleCatalogLocation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ControllerCatalog",
                    "modelType": "element",
                    "type": "ControllerCatalogLocation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "PedestrianCatalog",
                    "modelType": "element",
                    "type": "PedestrianCatalogLocation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "MiscObjectCatalog",
                    "modelType": "element",
                    "type": "MiscObjectCatalogLocation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "EnvironmentCatalog",
                    "modelType": "element",
                    "type": "EnvironmentCatalogLocation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ManeuverCatalog",
                    "modelType": "element",
                    "type": "ManeuverCatalogLocation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrajectoryCatalog",
                    "modelType": "element",
                    "type": "TrajectoryCatalogLocation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RouteCatalog",
                    "modelType": "element",
                    "type": "RouteCatalogLocation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "CatalogReference",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "catalogName",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "entryName",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ParameterAssignments",
                    "modelType": "element",
                    "type": "ParameterAssignments",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Center",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "x",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "y",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "z",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "CentralSwarmObject",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Clothoid",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "curvature",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "curvatureDot",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "length",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "startTime",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "stopTime",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "curvaturePrime",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "CollisionCondition",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "EntityRef",
                    "modelType": "element",
                    "type": "EntityRef",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ByType",
                    "modelType": "element",
                    "type": "ByObjectType",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Condition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "conditionEdge",
                    "type": "ConditionEdge",
                    "use": "required"
                },
                {
                    "name": "delay",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ByEntityCondition",
                    "modelType": "element",
                    "type": "ByEntityCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ByValueCondition",
                    "modelType": "element",
                    "type": "ByValueCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "ConditionGroup",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Condition",
                    "modelType": "element",
                    "type": "Condition",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Controller",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ParameterDeclarations",
                    "modelType": "element",
                    "type": "ParameterDeclarations",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Properties",
                    "modelType": "element",
                    "type": "Properties",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "ControllerAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "AssignControllerAction",
                    "modelType": "element",
                    "type": "AssignControllerAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "OverrideControllerValueAction",
                    "modelType": "element",
                    "type": "OverrideControllerValueAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ActivateControllerAction",
                    "modelType": "element",
                    "type": "ActivateControllerAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "ControllerCatalogLocation",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Directory",
                    "modelType": "element",
                    "type": "Directory",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "ControllerDistribution",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "ControllerDistributionEntry",
                    "modelType": "element",
                    "type": "ControllerDistributionEntry",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ControllerDistributionEntry",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "weight",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Controller",
                    "modelType": "element",
                    "type": "Controller",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "CatalogReference",
                    "modelType": "element",
                    "type": "CatalogReference",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "ControlPoint",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "time",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "weight",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "CustomCommandAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "type",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "DeleteEntityAction",
            "modelType": "complexType"
        },
        {
            "name": "Deterministic",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "DeterministicParameterDistribution",
                    "modelType": "group",
                    "type": "DeterministicParameterDistribution"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "DeterministicMultiParameterDistribution",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "DeterministicMultiParameterDistributionType",
                    "modelType": "group",
                    "type": "DeterministicMultiParameterDistributionType"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "DeterministicMultiParameterDistributionType",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "ValueSetDistribution",
                    "modelType": "element",
                    "type": "ValueSetDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "DeterministicParameterDistribution",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "DeterministicMultiParameterDistribution",
                    "modelType": "element",
                    "type": "DeterministicMultiParameterDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "DeterministicSingleParameterDistribution",
                    "modelType": "element",
                    "type": "DeterministicSingleParameterDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "DeterministicSingleParameterDistribution",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "parameterName",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "DeterministicSingleParameterDistributionType",
                    "modelType": "group",
                    "type": "DeterministicSingleParameterDistributionType"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "DeterministicSingleParameterDistributionType",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "DistributionSet",
                    "modelType": "element",
                    "type": "DistributionSet",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "DistributionRange",
                    "modelType": "element",
                    "type": "DistributionRange",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "UserDefinedDistribution",
                    "modelType": "element",
                    "type": "UserDefinedDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Dimensions",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "height",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "length",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "width",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Directory",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "path",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "DistanceCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "alongRoute",
                    "type": "Boolean",
                    "use": "optional"
                },
                {
                    "name": "freespace",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "coordinateSystem",
                    "type": "CoordinateSystem",
                    "use": "optional"
                },
                {
                    "name": "relativeDistanceType",
                    "type": "RelativeDistanceType",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "DistributionDefinition",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "Deterministic",
                    "modelType": "element",
                    "type": "Deterministic",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Stochastic",
                    "modelType": "element",
                    "type": "Stochastic",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "DistributionRange",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "stepWidth",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Range",
                    "modelType": "element",
                    "type": "Range",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "DistributionSet",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Element",
                    "modelType": "element",
                    "type": "DistributionSetElement",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "DistributionSetElement",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "DynamicConstraints",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "maxAcceleration",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "maxDeceleration",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "maxSpeed",
                    "type": "Double",
                    "use": "optional"
                }
            ]
        },
        {
            "name": "EndOfRoadCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "duration",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Entities",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "ScenarioObject",
                    "modelType": "element",
                    "type": "ScenarioObject",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "EntitySelection",
                    "modelType": "element",
                    "type": "EntitySelection",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "EntityAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "AddEntityAction",
                    "modelType": "element",
                    "type": "AddEntityAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "DeleteEntityAction",
                    "modelType": "element",
                    "type": "DeleteEntityAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "EntityCondition",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "EndOfRoadCondition",
                    "modelType": "element",
                    "type": "EndOfRoadCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "CollisionCondition",
                    "modelType": "element",
                    "type": "CollisionCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "OffroadCondition",
                    "modelType": "element",
                    "type": "OffroadCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TimeHeadwayCondition",
                    "modelType": "element",
                    "type": "TimeHeadwayCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TimeToCollisionCondition",
                    "modelType": "element",
                    "type": "TimeToCollisionCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "AccelerationCondition",
                    "modelType": "element",
                    "type": "AccelerationCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "StandStillCondition",
                    "modelType": "element",
                    "type": "StandStillCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "SpeedCondition",
                    "modelType": "element",
                    "type": "SpeedCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RelativeSpeedCondition",
                    "modelType": "element",
                    "type": "RelativeSpeedCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TraveledDistanceCondition",
                    "modelType": "element",
                    "type": "TraveledDistanceCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ReachPositionCondition",
                    "modelType": "element",
                    "type": "ReachPositionCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "DistanceCondition",
                    "modelType": "element",
                    "type": "DistanceCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RelativeDistanceCondition",
                    "modelType": "element",
                    "type": "RelativeDistanceCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "EntityObject",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "CatalogReference",
                    "modelType": "element",
                    "type": "CatalogReference",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Vehicle",
                    "modelType": "element",
                    "type": "Vehicle",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Pedestrian",
                    "modelType": "element",
                    "type": "Pedestrian",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "MiscObject",
                    "modelType": "element",
                    "type": "MiscObject",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ExternalObjectReference",
                    "modelType": "element",
                    "type": "ExternalObjectReference",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "EntityRef",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "EntitySelection",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Members",
                    "modelType": "element",
                    "type": "SelectedEntities",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Environment",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ParameterDeclarations",
                    "modelType": "element",
                    "type": "ParameterDeclarations",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TimeOfDay",
                    "modelType": "element",
                    "type": "TimeOfDay",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Weather",
                    "modelType": "element",
                    "type": "Weather",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RoadCondition",
                    "modelType": "element",
                    "type": "RoadCondition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "EnvironmentAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Environment",
                    "modelType": "element",
                    "type": "Environment",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "CatalogReference",
                    "modelType": "element",
                    "type": "CatalogReference",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "EnvironmentCatalogLocation",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Directory",
                    "modelType": "element",
                    "type": "Directory",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "Event",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "maximumExecutionCount",
                    "type": "UnsignedInt",
                    "use": "optional"
                },
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "priority",
                    "type": "Priority",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Action",
                    "modelType": "element",
                    "type": "Action",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "StartTrigger",
                    "modelType": "element",
                    "type": "Trigger",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ExternalObjectReference",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "File",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "filepath",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "FileHeader",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "author",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "date",
                    "type": "DateTime",
                    "use": "required"
                },
                {
                    "name": "description",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "revMajor",
                    "type": "UnsignedShort",
                    "use": "required"
                },
                {
                    "name": "revMinor",
                    "type": "UnsignedShort",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "License",
                    "modelType": "element",
                    "type": "License",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "FinalSpeed",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "AbsoluteSpeed",
                    "modelType": "element",
                    "type": "AbsoluteSpeed",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RelativeSpeedToMaster",
                    "modelType": "element",
                    "type": "RelativeSpeedToMaster",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Fog",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "visualRange",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "BoundingBox",
                    "modelType": "element",
                    "type": "BoundingBox",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "FollowTrajectoryAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "initialDistanceOffset",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Trajectory",
                    "modelType": "element",
                    "type": "Trajectory",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "CatalogReference",
                    "modelType": "element",
                    "type": "CatalogReference",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TimeReference",
                    "modelType": "element",
                    "type": "TimeReference",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrajectoryFollowingMode",
                    "modelType": "element",
                    "type": "TrajectoryFollowingMode",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrajectoryRef",
                    "modelType": "element",
                    "type": "TrajectoryRef",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "GeoPosition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "latitude",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "longitude",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "height",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Orientation",
                    "modelType": "element",
                    "type": "Orientation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "GlobalAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "EnvironmentAction",
                    "modelType": "element",
                    "type": "EnvironmentAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "EntityAction",
                    "modelType": "element",
                    "type": "EntityAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ParameterAction",
                    "modelType": "element",
                    "type": "ParameterAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "InfrastructureAction",
                    "modelType": "element",
                    "type": "InfrastructureAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficAction",
                    "modelType": "element",
                    "type": "TrafficAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Histogram",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Bin",
                    "modelType": "element",
                    "type": "HistogramBin",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "HistogramBin",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "weight",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Range",
                    "modelType": "element",
                    "type": "Range",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "InfrastructureAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "TrafficSignalAction",
                    "modelType": "element",
                    "type": "TrafficSignalAction",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "Init",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Actions",
                    "modelType": "element",
                    "type": "InitActions",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "InitActions",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "GlobalAction",
                    "modelType": "element",
                    "type": "GlobalAction",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "UserDefinedAction",
                    "modelType": "element",
                    "type": "UserDefinedAction",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "Private",
                    "modelType": "element",
                    "type": "Private",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "InRoutePosition",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "FromCurrentEntity",
                    "modelType": "element",
                    "type": "PositionOfCurrentEntity",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "FromRoadCoordinates",
                    "modelType": "element",
                    "type": "PositionInRoadCoordinates",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "FromLaneCoordinates",
                    "modelType": "element",
                    "type": "PositionInLaneCoordinates",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Knot",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "LaneChangeAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "targetLaneOffset",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "LaneChangeActionDynamics",
                    "modelType": "element",
                    "type": "TransitionDynamics",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "LaneChangeTarget",
                    "modelType": "element",
                    "type": "LaneChangeTarget",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "LaneChangeTarget",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "RelativeTargetLane",
                    "modelType": "element",
                    "type": "RelativeTargetLane",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "AbsoluteTargetLane",
                    "modelType": "element",
                    "type": "AbsoluteTargetLane",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "LaneOffsetAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "continuous",
                    "type": "Boolean",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "LaneOffsetActionDynamics",
                    "modelType": "element",
                    "type": "LaneOffsetActionDynamics",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "LaneOffsetTarget",
                    "modelType": "element",
                    "type": "LaneOffsetTarget",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "LaneOffsetActionDynamics",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "dynamicsShape",
                    "type": "DynamicsShape",
                    "use": "required"
                },
                {
                    "name": "maxLateralAcc",
                    "type": "Double",
                    "use": "optional"
                }
            ]
        },
        {
            "name": "LaneOffsetTarget",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "RelativeTargetLaneOffset",
                    "modelType": "element",
                    "type": "RelativeTargetLaneOffset",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "AbsoluteTargetLaneOffset",
                    "modelType": "element",
                    "type": "AbsoluteTargetLaneOffset",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "LanePosition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "laneId",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "offset",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "roadId",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "s",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Orientation",
                    "modelType": "element",
                    "type": "Orientation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "LateralAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "LaneChangeAction",
                    "modelType": "element",
                    "type": "LaneChangeAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "LaneOffsetAction",
                    "modelType": "element",
                    "type": "LaneOffsetAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "LateralDistanceAction",
                    "modelType": "element",
                    "type": "LateralDistanceAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "LateralDistanceAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "continuous",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "distance",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "freespace",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "displacement",
                    "type": "LateralDisplacement",
                    "use": "optional"
                },
                {
                    "name": "coordinateSystem",
                    "type": "CoordinateSystem",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "DynamicConstraints",
                    "modelType": "element",
                    "type": "DynamicConstraints",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "License",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "resource",
                    "type": "String",
                    "use": "optional"
                },
                {
                    "name": "spdxId",
                    "type": "String",
                    "use": "optional"
                }
            ]
        },
        {
            "name": "LongitudinalAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "SpeedAction",
                    "modelType": "element",
                    "type": "SpeedAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "LongitudinalDistanceAction",
                    "modelType": "element",
                    "type": "LongitudinalDistanceAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "LongitudinalDistanceAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "continuous",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "distance",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "freespace",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "timeGap",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "displacement",
                    "type": "LongitudinalDisplacement",
                    "use": "optional"
                },
                {
                    "name": "coordinateSystem",
                    "type": "CoordinateSystem",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "DynamicConstraints",
                    "modelType": "element",
                    "type": "DynamicConstraints",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "Maneuver",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ParameterDeclarations",
                    "modelType": "element",
                    "type": "ParameterDeclarations",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Event",
                    "modelType": "element",
                    "type": "Event",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ManeuverCatalogLocation",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Directory",
                    "modelType": "element",
                    "type": "Directory",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "ManeuverGroup",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "maximumExecutionCount",
                    "type": "UnsignedInt",
                    "use": "required"
                },
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Actors",
                    "modelType": "element",
                    "type": "Actors",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "CatalogReference",
                    "modelType": "element",
                    "type": "CatalogReference",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "Maneuver",
                    "modelType": "element",
                    "type": "Maneuver",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "MiscObject",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "mass",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "miscObjectCategory",
                    "type": "MiscObjectCategory",
                    "use": "required"
                },
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "model3d",
                    "type": "String",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "ParameterDeclarations",
                    "modelType": "element",
                    "type": "ParameterDeclarations",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "BoundingBox",
                    "modelType": "element",
                    "type": "BoundingBox",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Properties",
                    "modelType": "element",
                    "type": "Properties",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "MiscObjectCatalogLocation",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Directory",
                    "modelType": "element",
                    "type": "Directory",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "ModifyRule",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "AddValue",
                    "modelType": "element",
                    "type": "ParameterAddValueRule",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "MultiplyByValue",
                    "modelType": "element",
                    "type": "ParameterMultiplyByValueRule",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "None",
            "modelType": "complexType"
        },
        {
            "name": "NormalDistribution",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "expectedValue",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "variance",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Range",
                    "modelType": "element",
                    "type": "Range",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Nurbs",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "order",
                    "type": "UnsignedInt",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ControlPoint",
                    "modelType": "element",
                    "type": "ControlPoint",
                    "minOccurs": "2",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "Knot",
                    "modelType": "element",
                    "type": "Knot",
                    "minOccurs": "2",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ObjectController",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "CatalogReference",
                    "modelType": "element",
                    "type": "CatalogReference",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Controller",
                    "modelType": "element",
                    "type": "Controller",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "OffroadCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "duration",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "OpenScenario",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "FileHeader",
                    "modelType": "element",
                    "type": "FileHeader",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "OpenScenarioCategory",
                    "modelType": "group",
                    "type": "OpenScenarioCategory"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "OpenScenarioCategory",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "ScenarioDefinition",
                    "modelType": "group",
                    "type": "ScenarioDefinition"
                },
                {
                    "name": "CatalogDefinition",
                    "modelType": "group",
                    "type": "CatalogDefinition"
                },
                {
                    "name": "ParameterValueDistributionDefinition",
                    "modelType": "group",
                    "type": "ParameterValueDistributionDefinition"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Orientation",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "h",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "p",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "r",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "type",
                    "type": "ReferenceContext",
                    "use": "optional"
                }
            ]
        },
        {
            "name": "OverrideBrakeAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "active",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "OverrideClutchAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "active",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "OverrideControllerValueAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Throttle",
                    "modelType": "element",
                    "type": "OverrideThrottleAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Brake",
                    "modelType": "element",
                    "type": "OverrideBrakeAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Clutch",
                    "modelType": "element",
                    "type": "OverrideClutchAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ParkingBrake",
                    "modelType": "element",
                    "type": "OverrideParkingBrakeAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "SteeringWheel",
                    "modelType": "element",
                    "type": "OverrideSteeringWheelAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Gear",
                    "modelType": "element",
                    "type": "OverrideGearAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "OverrideGearAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "active",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "number",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "OverrideParkingBrakeAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "active",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "OverrideSteeringWheelAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "active",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "OverrideThrottleAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "active",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ParameterAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "parameterRef",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "SetAction",
                    "modelType": "element",
                    "type": "ParameterSetAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ModifyAction",
                    "modelType": "element",
                    "type": "ParameterModifyAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "ParameterAddValueRule",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ParameterAssignment",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "parameterRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ParameterAssignments",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "ParameterAssignment",
                    "modelType": "element",
                    "type": "ParameterAssignment",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ParameterCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "parameterRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ParameterDeclaration",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "parameterType",
                    "type": "ParameterType",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ConstraintGroup",
                    "modelType": "element",
                    "type": "ValueConstraintGroup",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ParameterDeclarations",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "ParameterDeclaration",
                    "modelType": "element",
                    "type": "ParameterDeclaration",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ParameterModifyAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Rule",
                    "modelType": "element",
                    "type": "ModifyRule",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "ParameterMultiplyByValueRule",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ParameterSetAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ParameterValueDistribution",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "ScenarioFile",
                    "modelType": "element",
                    "type": "File",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "DistributionDefinition",
                    "modelType": "group",
                    "type": "DistributionDefinition"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ParameterValueDistributionDefinition",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "ParameterValueDistribution",
                    "modelType": "element",
                    "type": "ParameterValueDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ParameterValueSet",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "ParameterAssignment",
                    "modelType": "element",
                    "type": "ParameterAssignment",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Pedestrian",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "mass",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "model",
                    "type": "String",
                    "use": "optional"
                },
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "pedestrianCategory",
                    "type": "PedestrianCategory",
                    "use": "required"
                },
                {
                    "name": "model3d",
                    "type": "String",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "ParameterDeclarations",
                    "modelType": "element",
                    "type": "ParameterDeclarations",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "BoundingBox",
                    "modelType": "element",
                    "type": "BoundingBox",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Properties",
                    "modelType": "element",
                    "type": "Properties",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "PedestrianCatalogLocation",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Directory",
                    "modelType": "element",
                    "type": "Directory",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "Performance",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "maxAcceleration",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "maxDeceleration",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "maxSpeed",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Phase",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "duration",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "TrafficSignalState",
                    "modelType": "element",
                    "type": "TrafficSignalState",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "PoissonDistribution",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "expectedValue",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Range",
                    "modelType": "element",
                    "type": "Range",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Polyline",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Vertex",
                    "modelType": "element",
                    "type": "Vertex",
                    "minOccurs": "2",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Position",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "WorldPosition",
                    "modelType": "element",
                    "type": "WorldPosition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RelativeWorldPosition",
                    "modelType": "element",
                    "type": "RelativeWorldPosition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RelativeObjectPosition",
                    "modelType": "element",
                    "type": "RelativeObjectPosition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RoadPosition",
                    "modelType": "element",
                    "type": "RoadPosition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RelativeRoadPosition",
                    "modelType": "element",
                    "type": "RelativeRoadPosition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "LanePosition",
                    "modelType": "element",
                    "type": "LanePosition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RelativeLanePosition",
                    "modelType": "element",
                    "type": "RelativeLanePosition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RoutePosition",
                    "modelType": "element",
                    "type": "RoutePosition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "GeoPosition",
                    "modelType": "element",
                    "type": "GeoPosition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrajectoryPosition",
                    "modelType": "element",
                    "type": "TrajectoryPosition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "PositionInLaneCoordinates",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "laneId",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "laneOffset",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "pathS",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "PositionInRoadCoordinates",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "pathS",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "t",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "PositionOfCurrentEntity",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Precipitation",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "intensity",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "precipitationType",
                    "type": "PrecipitationType",
                    "use": "required"
                },
                {
                    "name": "precipitationIntensity",
                    "type": "Double",
                    "use": "optional"
                }
            ]
        },
        {
            "name": "Private",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "PrivateAction",
                    "modelType": "element",
                    "type": "PrivateAction",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "PrivateAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "LongitudinalAction",
                    "modelType": "element",
                    "type": "LongitudinalAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "LateralAction",
                    "modelType": "element",
                    "type": "LateralAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "VisibilityAction",
                    "modelType": "element",
                    "type": "VisibilityAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "SynchronizeAction",
                    "modelType": "element",
                    "type": "SynchronizeAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ActivateControllerAction",
                    "modelType": "element",
                    "type": "ActivateControllerAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "ControllerAction",
                    "modelType": "element",
                    "type": "ControllerAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TeleportAction",
                    "modelType": "element",
                    "type": "TeleportAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "RoutingAction",
                    "modelType": "element",
                    "type": "RoutingAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "ProbabilityDistributionSet",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Element",
                    "modelType": "element",
                    "type": "ProbabilityDistributionSetElement",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ProbabilityDistributionSetElement",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "weight",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Properties",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Property",
                    "modelType": "element",
                    "type": "Property",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "File",
                    "modelType": "element",
                    "type": "File",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Property",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Range",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "lowerLimit",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "upperLimit",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ReachPositionCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "tolerance",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "RelativeDistanceCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "freespace",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "relativeDistanceType",
                    "type": "RelativeDistanceType",
                    "use": "required"
                },
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "coordinateSystem",
                    "type": "CoordinateSystem",
                    "use": "optional"
                }
            ]
        },
        {
            "name": "RelativeLanePosition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "dLane",
                    "type": "Int",
                    "use": "required"
                },
                {
                    "name": "ds",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "offset",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "dsLane",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Orientation",
                    "modelType": "element",
                    "type": "Orientation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "RelativeObjectPosition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "dx",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "dy",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "dz",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Orientation",
                    "modelType": "element",
                    "type": "Orientation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "RelativeRoadPosition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "ds",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "dt",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Orientation",
                    "modelType": "element",
                    "type": "Orientation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "RelativeSpeedCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "RelativeSpeedToMaster",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "speedTargetValueType",
                    "type": "SpeedTargetValueType",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "SteadyState",
                    "modelType": "group",
                    "type": "SteadyState"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "RelativeTargetLane",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Int",
                    "use": "required"
                }
            ]
        },
        {
            "name": "RelativeTargetLaneOffset",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "RelativeTargetSpeed",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "continuous",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "speedTargetValueType",
                    "type": "SpeedTargetValueType",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "RelativeWorldPosition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "dx",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "dy",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "dz",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Orientation",
                    "modelType": "element",
                    "type": "Orientation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "RoadCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "frictionScaleFactor",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Properties",
                    "modelType": "element",
                    "type": "Properties",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "RoadNetwork",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "LogicFile",
                    "modelType": "element",
                    "type": "File",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "SceneGraphFile",
                    "modelType": "element",
                    "type": "File",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficSignals",
                    "modelType": "element",
                    "type": "TrafficSignals",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "UsedArea",
                    "modelType": "element",
                    "type": "UsedArea",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "RoadPosition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "roadId",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "s",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "t",
                    "type": "Double",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Orientation",
                    "modelType": "element",
                    "type": "Orientation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "Route",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "closed",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ParameterDeclarations",
                    "modelType": "element",
                    "type": "ParameterDeclarations",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Waypoint",
                    "modelType": "element",
                    "type": "Waypoint",
                    "minOccurs": "2",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "RouteCatalogLocation",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Directory",
                    "modelType": "element",
                    "type": "Directory",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "RoutePosition",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "RouteRef",
                    "modelType": "element",
                    "type": "RouteRef",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Orientation",
                    "modelType": "element",
                    "type": "Orientation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "InRoutePosition",
                    "modelType": "element",
                    "type": "InRoutePosition",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "RouteRef",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Route",
                    "modelType": "element",
                    "type": "Route",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "CatalogReference",
                    "modelType": "element",
                    "type": "CatalogReference",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "RoutingAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "AssignRouteAction",
                    "modelType": "element",
                    "type": "AssignRouteAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "FollowTrajectoryAction",
                    "modelType": "element",
                    "type": "FollowTrajectoryAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "AcquirePositionAction",
                    "modelType": "element",
                    "type": "AcquirePositionAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "ScenarioDefinition",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "ParameterDeclarations",
                    "modelType": "element",
                    "type": "ParameterDeclarations",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "CatalogLocations",
                    "modelType": "element",
                    "type": "CatalogLocations",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "RoadNetwork",
                    "modelType": "element",
                    "type": "RoadNetwork",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Entities",
                    "modelType": "element",
                    "type": "Entities",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Storyboard",
                    "modelType": "element",
                    "type": "Storyboard",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ScenarioObject",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ObjectController",
                    "modelType": "element",
                    "type": "ObjectController",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "EntityObject",
                    "modelType": "group",
                    "type": "EntityObject"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "SelectedEntities",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "EntityRef",
                    "modelType": "element",
                    "type": "EntityRef",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "ByType",
                    "modelType": "element",
                    "type": "ByType",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Shape",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Polyline",
                    "modelType": "element",
                    "type": "Polyline",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Clothoid",
                    "modelType": "element",
                    "type": "Clothoid",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Nurbs",
                    "modelType": "element",
                    "type": "Nurbs",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "SimulationTimeCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "SpeedAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "SpeedActionDynamics",
                    "modelType": "element",
                    "type": "TransitionDynamics",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "SpeedActionTarget",
                    "modelType": "element",
                    "type": "SpeedActionTarget",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "SpeedActionTarget",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "RelativeTargetSpeed",
                    "modelType": "element",
                    "type": "RelativeTargetSpeed",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "AbsoluteTargetSpeed",
                    "modelType": "element",
                    "type": "AbsoluteTargetSpeed",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "SpeedCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "StandStillCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "duration",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "SteadyState",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "TargetDistanceSteadyState",
                    "modelType": "element",
                    "type": "TargetDistanceSteadyState",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "TargetTimeSteadyState",
                    "modelType": "element",
                    "type": "TargetTimeSteadyState",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Stochastic",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "numberOfTestRuns",
                    "type": "UnsignedInt",
                    "use": "required"
                },
                {
                    "name": "randomSeed",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "StochasticDistribution",
                    "modelType": "element",
                    "type": "StochasticDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "StochasticDistribution",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "parameterName",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "StochasticDistributionType",
                    "modelType": "group",
                    "type": "StochasticDistributionType"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "StochasticDistributionType",
            "modelType": "groupType",
            "particles": [
                {
                    "name": "ProbabilityDistributionSet",
                    "modelType": "element",
                    "type": "ProbabilityDistributionSet",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "NormalDistribution",
                    "modelType": "element",
                    "type": "NormalDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "UniformDistribution",
                    "modelType": "element",
                    "type": "UniformDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "PoissonDistribution",
                    "modelType": "element",
                    "type": "PoissonDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Histogram",
                    "modelType": "element",
                    "type": "Histogram",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "UserDefinedDistribution",
                    "modelType": "element",
                    "type": "UserDefinedDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Story",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ParameterDeclarations",
                    "modelType": "element",
                    "type": "ParameterDeclarations",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Act",
                    "modelType": "element",
                    "type": "Act",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Storyboard",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Init",
                    "modelType": "element",
                    "type": "Init",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Story",
                    "modelType": "element",
                    "type": "Story",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                },
                {
                    "name": "StopTrigger",
                    "modelType": "element",
                    "type": "Trigger",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "StoryboardElementStateCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "storyboardElementRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "state",
                    "type": "StoryboardElementState",
                    "use": "required"
                },
                {
                    "name": "storyboardElementType",
                    "type": "StoryboardElementType",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Sun",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "azimuth",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "elevation",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "intensity",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "SynchronizeAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "masterEntityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "targetToleranceMaster",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "targetTolerance",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "TargetPositionMaster",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "TargetPosition",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "FinalSpeed",
                    "modelType": "element",
                    "type": "FinalSpeed",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "TargetDistanceSteadyState",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "distance",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TargetTimeSteadyState",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "time",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TeleportAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "TimeHeadwayCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "entityRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "alongRoute",
                    "type": "Boolean",
                    "use": "optional"
                },
                {
                    "name": "freespace",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "coordinateSystem",
                    "type": "CoordinateSystem",
                    "use": "optional"
                },
                {
                    "name": "relativeDistanceType",
                    "type": "RelativeDistanceType",
                    "use": "optional"
                }
            ]
        },
        {
            "name": "TimeOfDay",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "animation",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "dateTime",
                    "type": "DateTime",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TimeOfDayCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "dateTime",
                    "type": "DateTime",
                    "use": "required"
                },
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TimeReference",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "None",
                    "modelType": "element",
                    "type": "None",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Timing",
                    "modelType": "element",
                    "type": "Timing",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "TimeToCollisionCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "alongRoute",
                    "type": "Boolean",
                    "use": "optional"
                },
                {
                    "name": "freespace",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "relativeDistanceType",
                    "type": "RelativeDistanceType",
                    "use": "optional"
                },
                {
                    "name": "coordinateSystem",
                    "type": "CoordinateSystem",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "TimeToCollisionConditionTarget",
                    "modelType": "element",
                    "type": "TimeToCollisionConditionTarget",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "TimeToCollisionConditionTarget",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "EntityRef",
                    "modelType": "element",
                    "type": "EntityRef",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "Timing",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "domainAbsoluteRelative",
                    "type": "ReferenceContext",
                    "use": "required"
                },
                {
                    "name": "offset",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "scale",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TrafficAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "trafficName",
                    "type": "String",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "TrafficSourceAction",
                    "modelType": "element",
                    "type": "TrafficSourceAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficSinkAction",
                    "modelType": "element",
                    "type": "TrafficSinkAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficSwarmAction",
                    "modelType": "element",
                    "type": "TrafficSwarmAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficStopAction",
                    "modelType": "element",
                    "type": "TrafficStopAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "TrafficDefinition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "VehicleCategoryDistribution",
                    "modelType": "element",
                    "type": "VehicleCategoryDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "ControllerDistribution",
                    "modelType": "element",
                    "type": "ControllerDistribution",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "TrafficSignalAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "TrafficSignalControllerAction",
                    "modelType": "element",
                    "type": "TrafficSignalControllerAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficSignalStateAction",
                    "modelType": "element",
                    "type": "TrafficSignalStateAction",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "TrafficSignalCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "state",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TrafficSignalController",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "delay",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "reference",
                    "type": "String",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Phase",
                    "modelType": "element",
                    "type": "Phase",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "TrafficSignals",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "TrafficSignalController",
                    "modelType": "element",
                    "type": "TrafficSignalController",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "TrafficSignalControllerAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "trafficSignalControllerRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "phase",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TrafficSignalControllerCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "trafficSignalControllerRef",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "phase",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TrafficSignalState",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "state",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "trafficSignalId",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TrafficSignalStateAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "state",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TrafficSinkAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "radius",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "rate",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficDefinition",
                    "modelType": "element",
                    "type": "TrafficDefinition",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "TrafficSourceAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "radius",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "rate",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "velocity",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficDefinition",
                    "modelType": "element",
                    "type": "TrafficDefinition",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "TrafficStopAction",
            "modelType": "complexType"
        },
        {
            "name": "TrafficSwarmAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "innerRadius",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "numberOfVehicles",
                    "type": "UnsignedInt",
                    "use": "required"
                },
                {
                    "name": "offset",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "semiMajorAxis",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "semiMinorAxis",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "velocity",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "CentralObject",
                    "modelType": "element",
                    "type": "CentralSwarmObject",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrafficDefinition",
                    "modelType": "element",
                    "type": "TrafficDefinition",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "Trajectory",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "closed",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "ParameterDeclarations",
                    "modelType": "element",
                    "type": "ParameterDeclarations",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Shape",
                    "modelType": "element",
                    "type": "Shape",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "TrajectoryCatalogLocation",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Directory",
                    "modelType": "element",
                    "type": "Directory",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "TrajectoryFollowingMode",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "followingMode",
                    "type": "FollowingMode",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TrajectoryPosition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "s",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "t",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Orientation",
                    "modelType": "element",
                    "type": "Orientation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "TrajectoryRef",
                    "modelType": "element",
                    "type": "TrajectoryRef",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "TrajectoryRef",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Trajectory",
                    "modelType": "element",
                    "type": "Trajectory",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "CatalogReference",
                    "modelType": "element",
                    "type": "CatalogReference",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "choice"
        },
        {
            "name": "TransitionDynamics",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "dynamicsDimension",
                    "type": "DynamicsDimension",
                    "use": "required"
                },
                {
                    "name": "dynamicsShape",
                    "type": "DynamicsShape",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "TraveledDistanceCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "value",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Trigger",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "ConditionGroup",
                    "modelType": "element",
                    "type": "ConditionGroup",
                    "minOccurs": "0",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "TriggeringEntities",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "triggeringEntitiesRule",
                    "type": "TriggeringEntitiesRule",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "EntityRef",
                    "modelType": "element",
                    "type": "EntityRef",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "UniformDistribution",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Range",
                    "modelType": "element",
                    "type": "Range",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "UsedArea",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "2",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "UserDefinedAction",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "CustomCommandAction",
                    "modelType": "element",
                    "type": "CustomCommandAction",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "UserDefinedDistribution",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "type",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "UserDefinedValueCondition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ValueConstraint",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "rule",
                    "type": "Rule",
                    "use": "required"
                },
                {
                    "name": "value",
                    "type": "String",
                    "use": "required"
                }
            ]
        },
        {
            "name": "ValueConstraintGroup",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "ValueConstraint",
                    "modelType": "element",
                    "type": "ValueConstraint",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "ValueSetDistribution",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "ParameterValueSet",
                    "modelType": "element",
                    "type": "ParameterValueSet",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Vehicle",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "name",
                    "type": "String",
                    "use": "required"
                },
                {
                    "name": "vehicleCategory",
                    "type": "VehicleCategory",
                    "use": "required"
                },
                {
                    "name": "mass",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "model3d",
                    "type": "String",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "ParameterDeclarations",
                    "modelType": "element",
                    "type": "ParameterDeclarations",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "BoundingBox",
                    "modelType": "element",
                    "type": "BoundingBox",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Performance",
                    "modelType": "element",
                    "type": "Performance",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Axles",
                    "modelType": "element",
                    "type": "Axles",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                },
                {
                    "name": "Properties",
                    "modelType": "element",
                    "type": "Properties",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "VehicleCatalogLocation",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "Directory",
                    "modelType": "element",
                    "type": "Directory",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "VehicleCategoryDistribution",
            "modelType": "complexType",
            "particles": [
                {
                    "name": "VehicleCategoryDistributionEntry",
                    "modelType": "element",
                    "type": "VehicleCategoryDistributionEntry",
                    "minOccurs": "1",
                    "maxOccurs": "unbounded"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "VehicleCategoryDistributionEntry",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "category",
                    "type": "VehicleCategory",
                    "use": "required"
                },
                {
                    "name": "weight",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Vertex",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "time",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "VisibilityAction",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "graphics",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "sensors",
                    "type": "Boolean",
                    "use": "required"
                },
                {
                    "name": "traffic",
                    "type": "Boolean",
                    "use": "required"
                }
            ]
        },
        {
            "name": "Waypoint",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "routeStrategy",
                    "type": "RouteStrategy",
                    "use": "required"
                }
            ],
            "particles": [
                {
                    "name": "Position",
                    "modelType": "element",
                    "type": "Position",
                    "minOccurs": "1",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "sequence"
        },
        {
            "name": "Weather",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "cloudState",
                    "type": "CloudState",
                    "use": "optional"
                },
                {
                    "name": "atmosphericPressure",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "temperature",
                    "type": "Double",
                    "use": "optional"
                }
            ],
            "particles": [
                {
                    "name": "Sun",
                    "modelType": "element",
                    "type": "Sun",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Fog",
                    "modelType": "element",
                    "type": "Fog",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Precipitation",
                    "modelType": "element",
                    "type": "Precipitation",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                },
                {
                    "name": "Wind",
                    "modelType": "element",
                    "type": "Wind",
                    "minOccurs": "0",
                    "maxOccurs": "1"
                }
            ],
            "modelGroup": "all"
        },
        {
            "name": "Wind",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "direction",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "speed",
                    "type": "Double",
                    "use": "required"
                }
            ]
        },
        {
            "name": "WorldPosition",
            "modelType": "complexType",
            "attributes": [
                {
                    "name": "h",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "p",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "r",
                    "type": "Double",
                    "use": "optional"
                },
                {
                    "name": "x",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "y",
                    "type": "Double",
                    "use": "required"
                },
                {
                    "name": "z",
                    "type": "Double",
                    "use": "optional"
                }
            ]
        }
    ],
    "rootElement": {
        "name": "OpenSCENARIO",
        "type": "OpenScenario"
    }
};