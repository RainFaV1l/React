import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Main/>
      <Footer />
    </div>
  )
}

export default App
