// import React, { useState } from 'react'

// const App = () => {
//   const [state, setState] = useState({
//     count:0
//   })

//   // let normal = 0

//   // let handleNormal = () => {
//   //   normal = 10
//   // }
//   // let handleState = () => {
//   //   setState(state+5)
//   // }


//   let handleIncrement = () => {
//     setState({
//       count : state.count+5
//     })
//   }
//   let handledecrement = () => {
//     setState({
//       count : state.count+5
//     })
//   }
//   return(
//     <div>
//     <h1> this is a state variable {state.count}</h1>
//     {/* <h1> this is a Normal variable {normal}</h1> */}
//     <button onClick={handleIncrement}>Increment</button>
//     <button onClick={handledecrement}><Decrement></Decrement></button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//   const [count, setCount] = useState(0)

//   let normal = 0

//   let handleIncrement = () => {
//     setCount(count + 5)
//   }

//   let handledecrement = () => {
//     setCount(count - 5)
//   }

//   return(
//     <div>
//       <h1>this is a state variable {count}</h1>
//       <h1>this is a Normal variable {normal}</h1>

//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handledecrement}>Decrement</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// const App = ()=>{
//   const[show,setShow]=useState(true)
//   let handleShow = ()=> {
//     setShow(prev => !prev)
//   }
//   console.log("Executed")
//   return(
//     <div>
      
//     <input type={show?"text":"password"}/>
//     <i className={show ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
//         onClick={handleShow}
//       ></i>
//       <br /><br />
    
//     </div>
//   )
// }
// export default App



// import React, { useState } from "react"

// const App = () => {

//   const [light, setLight] = useState(false)

//   const toggleLight = () => {
//     setLight(prev => !prev)
//   }

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "100px"
//       }}
//     >

//       {/* Lightbulb icon */}
//       <i
//         className="fa-solid fa-lightbulb"
//         style={{
//           fontSize: "120px",
//           color: light ? "gold" : "gray",
//           transition: "0.3s"
//         }}
//       ></i>

      

//       {/* Button controls toggle */}
//       <button
//         onClick={toggleLight}
//         style={{
//           padding: "10px 20px",
//           fontSize: "18px",
//           cursor: "pointer"
//         }}
//       >
//         {light ? "Turn OFF" : "Turn ON"}
//       </button>

//     </div>
//   )
// }

// export default App


