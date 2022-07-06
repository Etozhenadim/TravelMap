// country uses ISO2 codes for its keys

var map = AmCharts.makeChart("mapdiv",{
    type: "map",
    theme: "dark",
    projection: "mercator",
    panEventsEnabled : true,
    backgroundColor : "transparent",
    backgroundAlpha : 1,
    zoomControl: {
        zoomControlEnabled : true
    },
    dataProvider : {
        map : "worldHigh",
        getAreasFromMap : true,
        areas :
            [
                {
                    "id": "KZ",
                    "showAsSelected": true
                },
                {
                    "id": "KG",
                    "showAsSelected": true
                },
                {
                    "id": "TR",
                    "showAsSelected": true
                },
                {
                    "id": "CZ",
                    "showAsSelected": true
                },
                {
                    "id": "IT",
                    "showAsSelected": true
                },
                {
                    "id": "PL",
                    "showAsSelected": true
                },
                {
                    "id": "AT",
                    "showAsSelected": true
                },
                {
                    "id": "DE",
                    "showAsSelected": true
                },
                {
                    "id": "GR",
                    "showAsSelected": true
                }


            ]
    },
    areasSettings : {
        autoZoom : true,
        color : "#8d8b8b",
        colorSolid: "#fc0330",
        selectedColor : "#02a31f",
        outlineColor : "#000000",
        rollOverColor : "#9EC2F7",
        rollOverOutlineColor : "#000000"
    }
});