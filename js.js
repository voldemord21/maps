//map initailazation
var map = L.map('map').setView([ 27.717245, 85.323960], 13);

//osm layer
var osm= L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);


//watercolor
var Watercolor = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
	minZoom: 1,
	maxZoom: 16,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
});
Watercolor.addTo(map);

//dark
var Dark = L.tileLayer('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	accessToken: '<your accessToken>'
});
 Dark.addTo(map);


//google street
googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleStreets.addTo(map);


//change marker img
var myIcon = L.icon({
    iconUrl: 'red markers.png',
    iconSize: [30, 30],
   
});

var singlemarker=L.marker([27.7352928,85.3127612],{icon:myIcon,draggable:true});
var popup=singlemarker.bindPopup('This is ASMT').openPopup();
popup.addTo(map);

var roommarker=L.marker([27.7452928,85.3127612]);
var roommarker=L.marker([27.7452928,85.3127672]);


//layer controller

var baseMaps = {
    "OSM": osm,
    "Water color map": Watercolor,
    "Dark":Dark,
    "google":googleStreets
};

var overlayMaps = {
    "college": singlemarker,
    "Available room":roommarker
};
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);





