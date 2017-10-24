var finderStyle = function(feature, resolution){
  var zoom = nyc.ol.TILE_GRID.getZForResolution(resolution);
  if (!finderStyle.cache[zoom]){
    var radius = zoom * .75, stroke = 1;
    finderStyle.cache[zoom] = [
      new ol.style.Style({
        image: new ol.style.Circle({
          radius: radius,
          fill: new ol.style.Fill({
            color: 'rgba(23, 113, 183, 0.8)'
          }),
          stroke: new ol.style.Stroke({
            color: '#fff',
            width: stroke
          })
        })
      })
    ];
  }
  return finderStyle.cache[zoom];
};

finderStyle.cache = {};
