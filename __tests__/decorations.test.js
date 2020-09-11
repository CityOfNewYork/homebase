import $ from 'jquery'
import decorations from '../src/js/decorations'
import Feature from 'ol/Feature'

let feature
beforeEach(() => {
  feature = new Feature({
    'Provider': 'Name',
    'Service Area Zip Code': '11229, 11234',
    'Address': 'Address',
    'Phone Number': 'Phone',
    'Borough': 'Brooklyn',
    'Postcode': '11229',
    'Longitude': 40.861042,
    'Latitude': -73.891505,
  })
  Object.assign(feature, decorations)
})

test('extendFeature', () => {
  expect.assertions(2)
  
  feature.extendFeature()

  expect(feature.get('search_label')).toBe(
    `<b><span class="srch-lbl-lg">${feature.getName()}</span></b><br><span class="srch-lbl-sm">${feature.getAddress1()}</span>`
  )
  
  expect(feature.get('search_name')).toBe(
    `${feature.getName()}, ${feature.getAddress1()}, ${feature.getCityStateZip()}`
  )
})

test('getName', () => {
  expect.assertions(1)
  
  expect(feature.getName()).toBe('NAME')

})

test('getAddress1', () => {
  expect.assertions(1)
  
  expect(feature.getAddress1()).toBe('Address')

})

test('getBorough', () => {
  expect.assertions(1)
  
  expect(feature.getBorough()).toBe('Brooklyn')

})

test('getCityStateZip', () => {
  expect.assertions(1)
  
  expect(feature.getCityStateZip()).toBe('Brooklyn, NY 11229')

})

test('getPhone', () => {
  expect.assertions(1)
  
  expect(feature.getPhone()).toBe('Phone')

})

test('getZip', () => {
  expect.assertions(1)
  
  expect(feature.getZip()).toBe('11229')

})

test('detailsHtml', () => {
  expect.assertions(1)
  
  expect(feature.detailsHtml()).toEqual($(`<div><div class="zips"><strong>Serving ZIP Codes: </strong>11229, 11234</div></div>`))

})