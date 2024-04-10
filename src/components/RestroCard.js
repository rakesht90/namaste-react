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
  } = resData?.info;

  return (
    <div
      data-testid="restroCard"
      className="w-64 rounded-lg p-2 bg-slate-100 hover:bg-slate-200"
    >
      <img
        alt="food"
        className="h-48 w-48 rounded-xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h3 className="py-2">{cuisines.join(", ")}</h3>
      <h3 className="py-2">{deliveryTime} minutes</h3>
      <h3 className="py-2">{costForTwo}</h3>
      <h3>{avgRating} stars</h3>
    </div>
  );
};
export default RestroCard;

export const PromtedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <p className="absolute p-1 m-2 bg-slate-700 rounded-xl ">Promoted</p>
        <RestroCard {...props} />
      </div>
    );
  };
};
