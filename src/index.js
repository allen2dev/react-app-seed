import React from 'react'
import { render } from 'react-dom'
import App from './App'

// render(<App />, document.getElementById('root'))
const renderApp = Component => {
  render(<App />, document.getElementById('root'))
}
renderApp()
if (module.hot) {
  module.hot.accept(() => renderApp(App))
}
