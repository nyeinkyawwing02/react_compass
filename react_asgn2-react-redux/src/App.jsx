import { useState } from 'react'
import Parent from './components/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Parent />
    </div>
  )
}

export default App
