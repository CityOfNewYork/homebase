import App from '../src/js/App'
import index from '../src/js/index'

test('index creates app', () => {
  expect.assertions(1)
  expect(window.finderApp instanceof App).toBe(true)
})