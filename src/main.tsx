import './index.css'

import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './app/store'

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
