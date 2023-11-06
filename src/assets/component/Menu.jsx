import React from "react";
import Meal from "./Meal";

function Menu() {
  return (
    <>
      <div className="text-stone-700">
        <div className="flex justify-center ">
          <h1 className="border-b-2 border-t-2 border-solid border-stone-500  text-center text-xl">
            OUR MENU
          </h1>
        </div>
        <Meal />
      </div>
    </>
  );
}

export default Menu;
