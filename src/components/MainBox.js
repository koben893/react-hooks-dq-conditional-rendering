import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

const pageNavBar = {
  Profile: <Profile />,
  Photos: <Photos />,
  Cocktails: <Cocktails />,
  Pokemon: <Pokemon />,
};

function MainBox() {
  const [ currentPage, setCurrentPage] = useState("Profile");

  return (
    <div>
      <MenuBar  currentPage={currentPage} onMenuClick={setCurrentPage} />
      {pageNavBar[currentPage]}
    </div>
  );
}

export default MainBox;
