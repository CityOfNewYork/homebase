import $ from 'jquery'
import FinderApp from 'nyc-lib/nyc/ol/FinderApp'
import CsvPoint from 'nyc-lib/nyc/ol/format/CsvPoint'
import decorations from './decorations'
import facilityStyle from './facility-style'
import homebase from './homebase'

class App extends FinderApp {
	/**
	 * @desc Create an instance of App
	 * @public
	 * @constructor
	 */
	constructor() {
		super({
			title: 'Homebase Location Finder',
			facilityStyle: facilityStyle.pointStyle,
			facilityTabTitle: 'Locations',
			decorations: decorations,
      facilityFormat: new CsvPoint({
        x: 'Longitude',
        y: 'Latitude',
        dataProjection: 'EPSG:4326'
      }),
      facilityUrl: homebase.FACILITY_URL,
			geoclientUrl: homebase.GEOCLIENT_URL,
			directionsUrl: homebase.DIRECTIONS_URL,
			splashOptions: {
				message: 'Homebase splash message',
				buttonText: ['Screen reader instructions', 'View map']
			},
      facilitySearch: { displayField: 'search_label', nameField: 'search_name' },
    })
  }
}
export default App