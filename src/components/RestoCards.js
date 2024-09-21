import React from 'react'

function RestoCards({ResData}) {
    console.log(ResData)
  return (
    <div className='resto-card-wrapper'>
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5938.JPG'/>
        <h3>{ResData.info.name}</h3>
        <p>{ResData.info.sla.slaString}</p>
        <p>{ResData.info.cuisines.join(', ')}</p>
        <p>{ResData.info.locality}</p>
    </div>
  )
}

export default RestoCards