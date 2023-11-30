export  const RestaurantCard = ({name,avgRatingString,cloudinaryImageId,cuisines,areaName,slaString}) => {
    return (
        <div className="card">
            <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
        <h3>{name}</h3>
        <h5>{avgRatingString}</h5>
        {/* <h4>{slaString}</h4> */}
        {/* <p>{cuisines.join(", ")}</p> */}
        <p>{areaName}</p>
    </div>
);
};

export default RestaurantCard;