import { useState } from 'react'
import './App.css'
import Card from "./components/card.jsx";




function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "love",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        Tailwind test
      </h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-4"
      >
        Increase Count
      </button>

      <p>User: {myObj.username}</p>
      <p>Array: {newArr.join(", ")}</p>

      <Card username="code with love" />
      <Card username="love" />
    </>
  )
}

export default App
