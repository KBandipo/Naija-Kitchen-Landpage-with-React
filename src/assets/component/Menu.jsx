import React from "react";
import Meal from "./Meal";

function Menu() {
  return (
    <>
      <div className="my-[100px] text-stone-700">
        <div className="flex justify-center ">
          <h1 className="border-b-2 border-t-2 border-solid border-stone-500  text-center text-xl">
            OUR MENU
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <Meal
            photoname="/images/amala.jpg"
            photoalt="amala with ewedu and gbediri image"
            mealName="Amala"
            mealCombination="Amala ewedu and gbegiri"
            price="7000"
          />
          <Meal
            photoname="/images/pounded-yam-with-egusi-soup.jpg"
            photoalt="pounded-yam-with-egusi-soup image"
            mealName="Pounded yam"
            mealCombination="Pounded yam with egusi soup"
            price="8000"
          />

          <Meal
            photoname="/images/Ekuru.jpg"
            photoalt="Ekuru image"
            mealName="Ekuru"
            mealCombination="Ekuru with stew"
            price="7000"
          />
          <Meal
            photoname="/images/eba.jpg"
            photoalt="Eba image"
            mealName="Eba"
            mealCombination="Eba with Efo-riru"
            price="8000"
          />
        </div>
      </div>
    </>
  );
}

export default Menu;
