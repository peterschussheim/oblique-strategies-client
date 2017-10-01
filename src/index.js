import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'
import 'tachyons'

const rootEl = document.getElementById('root')

ReactDOM.render(<App className="bg-gray" />, rootEl)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(<NextApp className="bg-gray" />, rootEl)
  })
}
