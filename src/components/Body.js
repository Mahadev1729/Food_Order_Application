/**
 * The `Body` component fetches a list of restaurants, allows filtering by search text and top rating,
 * and displays restaurant cards with links.
 * @returns The `Body` component is being returned. It contains conditional rendering based on the
 * length of `listOfRestaurants`. If the length is 0, it renders a `Shimmer` component. Otherwise, it
 * renders a div with class "body" containing search and filter functionality, and a list of restaurant
 * cards based on the filteredRestaurant state.
 */
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState,useContext, use} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DinoGame from "../gamesforfun/DinoGame";
import UserContext from "../utils/UserContext";



const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

//promopred component
  // const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

  // console.log(listOfRestaurants);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9717208&lng=77.6006245&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(data);
    
    
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const{loggedInUser,setUserName}=useContext(UserContext)
  const onlineStatus=useOnlineStatus();
  if(onlineStatus==false) return (
    <DinoGame/>
  )

  // const {setUserName}=useContext(UserContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-2xl text-lg"
            onClick={() => {
              const filteredResLists = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredResLists);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4  flex items-center ">
          <button
            className="px-4 py-2 bg-gray-100 m-4"
            onClick={() => {
              const filterresLists = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurant(filterresLists);
            }}
          >
            Top rated restaurant
          </button>

          <div></div>
        </div>
        <div className=" search m-4 p-4  flex items-center">
          <label>User Name:</label>
          <input className="border border-black p-2"
          value={loggedInUser}
           onChange={(e)=>setUserName(e.target.value)} />
          
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {<RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
