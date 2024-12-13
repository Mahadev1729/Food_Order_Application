/**
 * The `RestaurantCard` component displays information about a restaurant including its image, name,
 * cuisines, average rating, cost for two, and delivery time.
 * @param props - The `props` parameter in the `RestaurantCard` component contains the data passed down
 * to the component from its parent component. In this case, it seems to contain the `resData` object.
 * @returns The `RestaurantCard` component is being returned. It receives `resData` as a prop, extracts
 * specific data from `resData.info`, and displays information about a restaurant such as the image,
 * name, cuisines, average rating, cost for two, and delivery time.
 */
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser}=useContext(UserContext)

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[260px] h-[530px] bg-gray-100 rounded-lg hover:bg-gray-400 ">
      <img
        className="rounded-lg"
        alt="reso-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="font-bold py-4">{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} min</h4>
      <h4>User:{loggedInUser}</h4>
    </div>
  );
};
//Higher order component

//input -ResturantCard=> output- Prompted Restro card



export default RestaurantCard;
