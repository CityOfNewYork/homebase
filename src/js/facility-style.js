import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill'
import Circle from 'ol/style/Circle'
import Stroke from 'ol/style/Stroke'
import nycOl from 'nyc-lib/nyc/ol' 

const facilityStyle = {
  pointStyle: (feature, resolution) => {
    let zoom = nycOl.TILE_GRID.getZForResolution(resolution)
    return new Style({
      image: new Circle({
        radius: zoom * .75,
        fill: new Fill({
          color: 'rgba(23, 113, 183, 0.8)'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 1
        })
      })
    })
  }
}
export default facilityStyle