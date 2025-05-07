import './App.css'
import useCounter from './hooks/useCounter'

function App() {
  const count = useCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={count.increment}>
          count is {count.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
