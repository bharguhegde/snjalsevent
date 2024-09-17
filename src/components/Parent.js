import React from 'react'
import Child from './Child';

export const UserData = React.createContext();
const data = {name:'Bhargav',star:'5 star'}

function Parent() {
  return (
    <div>Parent
        <>
        <UserData.Provider value={data}>
            <Child/>
        </UserData.Provider>

        </>
    </div>
  )
}

export default Parent