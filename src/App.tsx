import './App.css'
import { Counter } from './components/Counter'
import { User } from './components/User'

function App() {

  return (
    <>
      <h1>React + Redux</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Counter />
      <User />
    </>
  )
}

export default App
