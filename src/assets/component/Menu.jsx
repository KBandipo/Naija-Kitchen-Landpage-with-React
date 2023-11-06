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
          price="10000"
        />

        <Meal
          photoname="/images/Ekuru.jpg"
          photoalt="Ekuru image"
          mealName="Ekuru"
          mealCombination="Ekuru with stew"
          price="6000"
        />
      </div>
    </>
  );
}

export default Menu;
