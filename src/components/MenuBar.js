import React from "react";

function MenuBar({ currentPage, onMenuClick }) {
  return (
    <div className="ui four item menu">
      <span className={currentPage === "Profile" ? "item active" : "item"}
        onClick={() => onMenuClick("Profile")}
      >
        <i className="user large icon" />
      </span>

      <span className={currentPage === "Photo" ? "item active" : "item"}
        onClick={() => onMenuClick("Photos")}
      >
        <i className="photo large icon" />
      </span>

      <span 
        className={currentPage === "Cocktail" ? "item active" : "item"}
        onClick={() => onMenuClick("Cocktails")}
      >
        <i className="cocktail large icon" />
      </span>

      <span 
        className={currentPage === "Pokemon" ? "item active" : "item"}
        onClick={() => onMenuClick("Pokemon")}
      >
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
