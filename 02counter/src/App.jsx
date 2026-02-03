import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // ✅ Add Value (Max 20)
  const addValue = () => {
    setCounter(prevCounter => {
      if (prevCounter >= 20) {
        return 20 // limit fix
      }
      return prevCounter + 1
    })
  }

  // ✅ Remove Value (Min 0)
  const removeValue = () => {
    setCounter(prevCounter => {
      if (prevCounter <= 0) {
        return 0 // limit fix
      }
      return prevCounter - 1
    })
  }

  return (
    <>
      <h1>Code with Love</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Add value
      </button>

      <br />

      <button onClick={removeValue}>
        Remove value
      </button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
