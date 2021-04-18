import React from 'react'
import Stack from './routes'
import Apsp from './Praktikum/M2'
import {Provider } from 'react-redux' 
import Store from './redux/praktikum/store'
function App() {
  return (
    <Provider store={Store}>
      <Apsp />
    </Provider>
  )
}

export default App
