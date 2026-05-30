import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hemu",
    age: 25
  }
  let newArr =[1,2,3]

  return (
    <>
     <h1 className= 'bg-green-400 text-black p-4'>Tailwind CSS</h1>
    
  <Card username="working here"/>
  <Card />


    </>
  )
}

export default App
