import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'
import 'tachyons'

const appRoot = document.getElementById('app-root')

ReactDOM.render(<App />, appRoot)

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default
//     ReactDOM.render(<NextApp />, rootEl)
//   })
// }
