import React,{useReducer} from 'react'



const App = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 }
      case 'decrement':
        return { ...state, count: state.count - 1 }
      case 'changeName':
        return { ...state, name: action.payload }

    }
  }
  const [current_state, dispatch] = useReducer(reducer, {
    count: 0,
    name: "Nick"
  })
  return (

    <>
      <h1>{current_state.name}: {current_state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'changeName', payload: "John" })}>Change Name</button>
    </>
  )
}

export default App
