import { Suspense } from 'react'
import './App.css'
import Countrys from './components/countrys/countrys'

const countresPromise= fetch('https://openapi.programming-hero.com/api/all')
.then(res=> res.json())

function App() {
  return (
    <>
      <Suspense fallback={<p>Data Is Loadding...</p>}>
       <Countrys countresPromise={countresPromise}></Countrys>
       </Suspense>
    </>
  )
}

export default App
