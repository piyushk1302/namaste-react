
const ResCard = ({resData}) => {
    const { name, cloudinaryImageId,costForTwo, cuisines,locality, avgRating } =
      resData;
  
    return (
      <div className="res-card">
        <img className="res-pic" alt="res-photo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
  
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{locality}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
      </div>
    );
  };

  export default ResCard;