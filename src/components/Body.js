import React, { useState,useEffect } from "react";
import RestoCards from "./RestoCards";
import Shimmer from "./Shimmer";

const Body = ()=>{
  
  const[intialResList,setResList] = useState([]);
  const[FilteredResList,setFilteredResList] = useState([]);
  const[searchValue,setsearchValue] = useState('');

  const handleFilterRes = ()=>{
    const filteredRes = intialResList.filter((res)=>res.info.avgRating>4.5)
    setResList(filteredRes)
  }

  useEffect(()=>{
    fetchData();
  },[])

  const handleChange = (e)=>{
    let value = e.target.value;
    setsearchValue(value)
  }

  const handleSearch = ()=>{
    console.log(searchValue)
    const searchedData = intialResList.filter((res)=>res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredResList(searchedData)
  }

  const fetchData = async ()=>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredResList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }
  // if(intialResList.length===0){
  //   return <Shimmer/>
  // }

    return intialResList.length===0? <Shimmer/>:(
        <div className="body-container">
            <div className="search-wrap">
                <input type="text" placeholder="Search Food" value={searchValue} onChange={handleChange}/>
                <button className="search-btn" onClick={handleSearch}>Search</button>
                <div className="filter" style={{marginTop:'10px'}}>
                  <button className="filter-btn" onClick={handleFilterRes}>Top Rated Restaurants</button>

                </div>
                <div className="resto-container">
                {
                    FilteredResList.map((item,index)=>(
                        <RestoCards key={index} ResData={item}/>
                    ))
                }
                
              

                </div>

            </div>

        </div>
    )
}

export default Body