import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className='bg-amber-200 text-center font-[30px]'>
      welcome to goa pulse
    </h1>
  )
}
export default App;