/**
 * The `RestaurantCategory` component displays a category title and a list of items when clicked, using
 * React state to toggle visibility.
 * @returns The RestaurantCategory component is being returned. It renders a div containing a header
 * with the category title and item count, and a dropdown icon that toggles the visibility of the
 * ItemList component when clicked. The ItemList component is rendered below the header if showItems
 * state is true.
 */

import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    
    setShowIndex(showItems ? null : index);
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-m">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
