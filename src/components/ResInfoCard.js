import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ResInfoCard = () => {
  let [resInfo, setresInfo] = useState(null);
  const {resId} = useParams() ;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2379152&lng=86.9833671&restaurantId=${resId}`
    );
    const json = await data.json();
    console.log(json.data);
    setresInfo(json.data);
  };

  //   const { name, cuisines, locality, avgRating, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  if (!resInfo) return <h1>Loading.....</h1>;

  const { name, cuisines, locality, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{locality}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating}</h3>

      <h2>Menu</h2>
      <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (item) => {
            return <li>
              {item?.card?.info?.name}- {item?.card?.info?.price / 100}
            </li>;
          }
        )}
      </ul>
      {/* <ul>
        {resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards?.map(
          (item, index) => (
            <li key={index}>
              {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100 || "N/A"}
            </li>
          )
        )}
      </ul> */}
    </div>
  );
};

export default ResInfoCard;
