import homebase from '../src/js/homebase'
import App from '../src/js/App'
import facilityStyle from '../src/js/facility-style'
import decorations from '../src/js/decorations'
import FinderApp from 'nyc-lib/nyc/ol/FinderApp'
import CsvPoint from 'nyc-lib/nyc/ol/format/CsvPoint'

jest.mock('nyc-lib/nyc/ol/FinderApp')
jest.mock('nyc-lib/nyc/ol/format/CsvPoint')

beforeEach(() => {
  FinderApp.mockClear()
  CsvPoint.mockClear()
})

test('constructor', () => {
  expect.assertions(14)
  const app = new App()

  expect(FinderApp).toHaveBeenCalledTimes(1)

  expect(FinderApp.mock.calls[0][0].title).toEqual('Homebase Location Finder')
  expect(FinderApp.mock.calls[0][0].facilityTabTitle).toEqual('Locations')
  expect(FinderApp.mock.calls[0][0].geoclientUrl).toEqual(homebase.GEOCLIENT_URL)
  expect(FinderApp.mock.calls[0][0].facilityUrl).toEqual(homebase.FACILITY_URL)
  expect(FinderApp.mock.calls[0][0].facilityStyle).toEqual(facilityStyle.pointStyle)
  expect(FinderApp.mock.calls[0][0].decorations).toEqual(decorations)
  expect(FinderApp.mock.calls[0][0].splashOptions).toEqual({
    message: 'Homebase splash message',
    buttonText: ['Screen reader instructions', 'View map']
  })
  expect(FinderApp.mock.calls[0][0].facilitySearch).toEqual({ displayField: 'search_label', nameField: 'search_name' })
  expect(FinderApp.mock.calls[0][0].directionsUrl).toEqual(homebase.DIRECTIONS_URL)

  expect(CsvPoint).toHaveBeenCalledTimes(1)
  expect(CsvPoint.mock.calls[0][0].x).toBe('Longitude')
  expect(CsvPoint.mock.calls[0][0].y).toBe('Latitude')    
  expect(CsvPoint.mock.calls[0][0].dataProjection).toBe('EPSG:4326')
})