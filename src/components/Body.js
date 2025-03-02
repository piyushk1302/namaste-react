import { Link } from "react-router-dom";
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
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2379152&lng=86.9833671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    console.log("Body component");
    console.log(json);
    
    
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
            (res) => res.info.avgRating> 4
          );
          setfilteredRestaurant(filtered);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <Link key={res?.info?.id} to={`/restaurants/${res?.info?.id}`}>
            <ResCard resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
