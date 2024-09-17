import React, { useContext } from 'react'
import {UserData} from './Parent'

function Child() {
const data = useContext(UserData)
  return (
    <div>
    <>
    {data.name}
    </>
    <>
    {data.star}
    </>
    </div>
  )
}

export default Child