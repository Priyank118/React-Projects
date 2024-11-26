import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="card">
        <h1> COUNT IS : {count} </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count increase {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count decrease {count}
        </button>
      </div>
    </>
  )
}

export default App
