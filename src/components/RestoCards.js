import React from 'react'
import { CDN_URL } from '../utils/constants'

function RestoCards({ResData}) {
  return (
    <div className='resto-card-wrapper'>
        <img src={CDN_URL+ResData.info.cloudinaryImageId}/>
        <h3>{ResData.info.name}</h3>
        <p>{ResData.info.sla.slaString}</p>
        <p>{ResData.info.avgRating}</p>
        <p>{ResData.info.cuisines.join(', ')}</p>
        <p>{ResData.info.locality}</p>
    </div>
  )
}

export default RestoCards