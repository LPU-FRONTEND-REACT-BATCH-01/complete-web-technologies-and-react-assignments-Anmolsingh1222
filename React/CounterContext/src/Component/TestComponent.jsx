import { useContext } from 'react'
import { CounterContext } from './CounterContextProvider'

const TestComponent = () => {
  const { count, increment, decrement } = useContext(CounterContext)

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Counter Context Demo</h1>
      <h2>{count}</h2>
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default TestComponent
