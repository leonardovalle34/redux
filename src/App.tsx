import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch , useSelector } from 'react-redux/es/exports'//to use hook from redux - old way to use redux
import { increment , decrementMinus1, incrementAmount, decrementMinus11 } from './redux/counter-slicer'


function App() {

  //using redux toolkit 
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();

  const handleclick1 = ()=>{
    dispatch(increment())
  }
  const handleclick5 = ()=>{
    dispatch(incrementAmount(5))
  }

  const handleMinus = ()=>{
    dispatch(decrementMinus1(5))
  }

  const handleMinus1 = ()=>{
    dispatch(decrementMinus1(1))
  }


  /*code to use the hooks from redux and to get this functions from redux.ts
  const handleclick1 = ()=>{
    dispatch({type:"counter/increment"})
  }
  const handleclick5 = ()=>{
    dispatch({type:"counter/incrementAmount" , payload : 5})
  }
  const handleMinus = ()=>(
    dispatch({type: "counter/decrement" , payload : 5})
  )
  const handleMinus1 = ()=>(
    dispatch({type: "counter/decrementMinus1" , payload : 1})
  )
  */

  return (
    <div className="App">
      
      <h1>Learning Redux and REduxToolkit</h1>
      <div className="card">
        <button onClick={()=>handleMinus()}>
          -5
        </button>
        <button onClick={()=>handleMinus1()}>
          -1
        </button>
        <button onClick={()=>handleclick1()}>
          +1
        </button>
        <button onClick={()=>handleclick5()}>
          +5
        </button>
        <p>
          Clicks {count}
        </p>
      </div>
    </div>
  )
}

export default App
