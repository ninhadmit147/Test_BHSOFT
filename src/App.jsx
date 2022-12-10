import { useState } from 'react'
import Body from './component/body'
import Footer from './component/footer'
import Header from './component/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto font-poppins not-italic">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
