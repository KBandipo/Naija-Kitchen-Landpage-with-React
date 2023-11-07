import Meal from "./Meal";

function Menu() {
  return (
    <div id="menu">
      <div className="mx-auto my-[150px] max-w-screen-lg px-4 text-stone-700 md:my-[150px]">
        <div className="flex justify-center ">
          <h1 className=" mb-10 border-b-2 border-t-2 border-solid border-stone-500 text-center text-2xl md:mb-16 md:text-4xl">
            OUR MENU
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="  grid grid-cols-1 gap-8 md:grid-cols-2">
            <Meal
              photoname="/images/amala.jpg"
              photoalt="amala with ewedu and gbediri image"
              mealName="Amala"
              mealCombination="Amala ewedu and gbegiri"
              price="7000"
            />
            <Meal
              photoname="/images/Iyan with egusi soup.jpg"
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
      </div>
    </div>
  );
}

export default Menu;
