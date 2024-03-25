import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const {
    cuisines,
    deliveryTime,
    name,
    costForTwo,
    avgRating,
    cloudinaryImageId,
  } = resData;

  return (
    <div className="restro-card">
      <img
        alt="food"
        className="restro-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{deliveryTime} minutes</h3>
      <h3>{costForTwo}</h3>
      <h3>{avgRating} stars</h3>
    </div>
  );
};
export default RestroCard;
