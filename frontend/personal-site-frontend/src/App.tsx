import { useState } from 'react'

import './App.css'

import Header from './components/header/Header'
import Landing from './components/body/landing/Landing'
import Card from './components/body/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Landing />
      <Card>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </Card>
      <Card>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
    </>
  )
}

export default App
