import React from "react";

const ShopCategory = ({
  filterItem,
  setItem,
  menuItems,
  setProducts,
  selectedCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      
      <div>
        <button
          className={`n-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
          onClick={() => filterItem("All")}
        >
          All
        </button>

        {menuItems.map((Val, id) => {
          return (
            <button
              className={`n-2 ${selectedCategory === Val ? "bg-warning" : ""}`}
              key={id}
              onClick={() => filterItem(Val)}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
