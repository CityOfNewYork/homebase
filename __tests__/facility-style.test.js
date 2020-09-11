import Feature from 'ol/Feature'
import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill'
import Circle from 'ol/style/Circle'
import Stroke from 'ol/style/Stroke'
import facilityStyle from '../src/js/facility-style'

test('pointStyle', () => {
  expect.assertions(7)

  const style = facilityStyle.pointStyle(new Feature({}), 38.21851414258813)
  expect(style.getImage() instanceof Circle).toBe(true)
  expect(style.getImage().getRadius()).toBe(9)
  expect(style.getImage().getFill() instanceof Fill).toBe(true)
  expect(style.getImage().getFill().getColor()).toBe('rgba(23, 113, 183, 0.8)')
  expect(style.getImage().getStroke() instanceof Stroke).toBe(true)
  expect(style.getImage().getStroke().getColor()).toBe('#fff')
  expect(style.getImage().getStroke().getWidth()).toBe(1)
})