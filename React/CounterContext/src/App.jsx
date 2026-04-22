import CounterContextProvider from './Component/CounterContextProvider'
import AppRouter from './Component/AppRouter'

function App() {
  return (
    <CounterContextProvider>
      <AppRouter />
    </CounterContextProvider>
  )
}

export default App
