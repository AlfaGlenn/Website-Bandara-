var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format_ne_10m_airports_1 = new ol.format.GeoJSON();
var features_ne_10m_airports_1 = format_ne_10m_airports_1.readFeatures(json_ne_10m_airports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_1.addFeatures(features_ne_10m_airports_1);
var lyr_ne_10m_airports_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ne_10m_airports_1, 
                style: style_ne_10m_airports_1,
                popuplayertitle: "ne_10m_airports",
                interactive: true,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_1_0.png" /> major<br />\
    <img src="styles/legend/ne_10m_airports_1_1.png" /> mid<br />\
    <img src="styles/legend/ne_10m_airports_1_2.png" /> small<br />'
        });

lyr_2gisMap_0.setVisible(true);lyr_ne_10m_airports_1.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_ne_10m_airports_1];
lyr_ne_10m_airports_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'Type_1': 'Type_1', });
lyr_ne_10m_airports_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'ValueMap', 'natlscale': 'TextEdit', 'Type_1': '', });
lyr_ne_10m_airports_1.set('fieldLabels', {'name': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'natlscale': 'no label', 'Type_1': 'no label', });
lyr_ne_10m_airports_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});