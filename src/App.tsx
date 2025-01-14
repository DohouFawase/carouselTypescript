import { useState } from 'react'

import './App.css'
import EventeCardre from './components/container/eventeCadre'
import GeneralCard from './components/ui/cadre/container'
import Newslater from './components/container/newslater/newslater'
import Typo from './components/ui/typo/typo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EventeCardre />
    <EventeCardre />
   <Newslater/>
   <Typo components='h1' >
    bonjour  je suis Fawase DOHOU
   </Typo>


    </>
  )
}

export default App
