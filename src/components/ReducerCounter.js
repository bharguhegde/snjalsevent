import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react'

const initialState1 = {count:0};
const initialState2 = {count:0};

function reducer1(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
    }
}
function reducer2(state,action){
    switch(action.type){
        case 'decrement':
            return {count:state.count-1}
    }
}



function ReducerCounter() {

    const[state1,dispatch1] = useReducer(reducer1,initialState1)
    const[state2,dispatch2] = useReducer(reducer2,initialState2)

  return (
    <div>
        <h1>ReducerCounter</h1>
        <h2>Count : {state1.count}</h2>
        <h2>Count : {state2.count}</h2>
        <button onClick={()=>dispatch1({type:'increment'})} style={{marginBottom:'10px',display:'block'}}>Incerement</button>
        <button onClick={()=>dispatch2({type:'decrement'})} style={{marginBottom:'10px',display:'block'}}>Decrement</button>
    </div>
  )
}

export default ReducerCounter