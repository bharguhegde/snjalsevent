import React,{useEffect, useRef} from 'react'

function Ref(){

    const focusRef = useRef(null)

   const focusInput = ()=>{
    focusRef.current.focus();
   }
    useEffect(()=>{
        focusInput();
    },[])
    return(
    <div>
        <input ref={focusRef} type='text' placeholder='Name'/>
    </div>
        )
}
export default Ref;