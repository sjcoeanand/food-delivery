import {useState, useEffect} from 'react';
import cardsList from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
import React from 'react';

const BodyWrapper = () => {
  const rawData = cardsList.map(x => x.info);
  const [allRestaurantData, setAllRestaurantData] = useState(rawData);
  const [filterDataList, setFilterDataList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterLabel, setFilterLabel] = useState("Show Top Rated");

  useEffect(()=>{
      fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const jsonData = await data.json();
    const dataStructured = jsonData?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(x => x.info);
    setAllRestaurantData(dataStructured);
    setFilterDataList(dataStructured)
  }

  return (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input type="text" className='search-box' value={searchText} 
            onChange={(e)=>{
              console.log("onChange in input called")
            setSearchText(e.target.value)
          }}/>
          <button onClick={()=>{
            console.log("search text", searchText)
            const searchFilterData = allRestaurantData.filter(x => {
              return x.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilterDataList(searchFilterData)
          }}>Search</button>
        </div>
        <button onClick={()=>{
          const filteredData = allRestaurantData.filter(x => x.avgRating > 4.4);
          if(filterLabel === 'Show Top Rated') {
            setFilterDataList(filteredData);
            setFilterLabel('Show All');
          } else {
            setFilterDataList(allRestaurantData);
            setFilterLabel('Show Top Rated')
          }
        }}>{filterLabel}</button>
      </div>
        <h2>{filterLabel}</h2>
      <div className='res-container'>
        { filterDataList?.map((resDataItem)=><RestaurantCard key={resDataItem.id} resData={resDataItem} />)
        }
      </div>
    </div>
  )
}

export default BodyWrapper;