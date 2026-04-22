import { createContext, useState } from 'react'

export const CounterContext = createContext()
export const CounterContex = CounterContext

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <CounterContext.Provider
      value={{ count, increment: handleIncrement, decrement: handleDecrement }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider
