/**
 * The `useRestaurantMenu` custom hook fetches restaurant menu data based on a given restaurant ID
 * using React's `useEffect` and `useState` hooks.
 * @param resId - The `resId` parameter in the `useRestaurantMenu` custom hook represents the unique
 * identifier of a restaurant. This identifier is used to fetch the menu data for that specific
 * restaurant from the API endpoint defined in the `MENU_API_URL` constant.
 * @returns The `useRestaurantMenu` custom hook is returning the `resInfo` state variable, which
 * contains the data fetched from the MENU_API_URL for a specific restaurant ID (`resId`).
 */
import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${MENU_API_URL}${resId}`);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json();
        console.log("Full Response Data:", json);
        setResInfo(json?.data || null);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setError("Failed to fetch menu data.");
      }
    };

    fetchMenu();
  }, [resId]);

  return { resInfo, error };
};

export default useRestaurantMenu;
