import ResCard from "./card";
import { useState, useEffect } from "react";

const Body = () => {
  let [listofRestaurant, setList] = useState([]);
  let [filteredRestaurant, setfilteredRestaurant] = useState([]);
  let [searchText,setsearchText] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627");
    const product = await data.json();
    console.log(product.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setList(product?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(product?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return (
    <div className="body">
    <div className="search"><input className="searchBox" type="text" value={searchText} onChange={(e)=>{
        setsearchText(e.target.value)
    }} />
    <button className="searchBtn" onClick={()=>{
        const filtered = listofRestaurant.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setfilteredRestaurant(filtered)
    }} >Search</button>
    </div>
      <button
        className="top-rated"
        onClick={() => {
          const filtered = filteredRestaurant.filter(
            (res) => res.info.avgRating> 4.5
          );
          setfilteredRestaurant(filtered);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <ResCard key={res?.info?.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
