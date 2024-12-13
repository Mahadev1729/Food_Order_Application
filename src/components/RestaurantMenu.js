import { useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, error } = useRestaurantMenu(resId);

  const [showIndex,setShowIndex]=useState(null);

  // const regularCards =
  //   resInfo?.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
  //     ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // const itemCards =
  //   regularCards.find((card) => card?.card?.card?.itemCards)?.card?.card
  //     ?.itemCards || [];

  const categories = resInfo?.cards
    ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const name =
    resInfo?.cards?.[2]?.card?.card?.info?.name || "Unknown Restaurant";
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines || [];
  const costForTwoMessage =
    resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage ||
    "Cost info unavailable";

  return (
    <div className="text-center bg-sky-200">
      {resInfo === null && !error ? (
        <Shimmer />
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div>
          <h1 className="font-extrabold text-2xl my-6">{name}</h1>
          <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
          {/**Accorderain */}
          {/**control power to paren RestuarantMenu */}
          {categories.map((category,index)=>(
            //controlled component
            <RestaurantCategory key={
              category?.card?.card?.title} 
              data={category?.card?.card}
              showItems={index===showIndex ? true:false}
              setShowIndex={()=>setShowIndex(index)}
              />
          ))}
          
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
