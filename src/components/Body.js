import React, { useState } from "react";
import RestoCards from "./RestoCards";
import ResList from "../utils/mockData"

const Body = ()=>{
  
  const[intialResList,setResList] = useState(ResList);

  const handleFilterRes = ()=>{
    const filteredRes = intialResList.filter((res)=>res.info.avgRating>4.5)
    setResList(filteredRes)
  }
    return(
        <div className="body-container">
            <div className="search-wrap">
                {/* <input type="text" placeholder="Search Food"/> */}
                <div className="filter">
                  <button className="filter-btn" onClick={handleFilterRes}>Top Rated Restaurants</button>

                </div>
                <div className="resto-container">
                {
                    intialResList.map((item,index)=>(
                        <RestoCards key={index} ResData={item}/>
                    ))
                }
                
              

                </div>

            </div>

        </div>
    )
}

export default Body