import { useState } from 'react'

import './App.css'
import EventeCardre from './components/container/eventeCadre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EventeCardre />
    </>
  )
}

export default App
