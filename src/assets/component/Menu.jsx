import Meal from "./Meal";
const meals = [
  {
    photoname: "/images/amala.jpg",
    photoalt: "amala with ewedu and gbediri image",
    mealName: "Amala",
    mealCombination: "Amala ewedu and gbegiri",
    price: 7000,
    soldOut: true,
  },
  {
    photoname: "/images/Iyan with egusi soup.jpg",
    photoalt: "pounded-yam-with-egusi-soup image",
    mealName: "Pounded yam",
    mealCombination: "Pounded yam with egusi soup",
    price: 10000,
    soldOut: true,
  },
  {
    photoname: "/images/Ekuru.jpg",
    photoalt: "Ekuru image",
    mealName: "Ekuru",
    mealCombination: "Ekuru with stew",
    price: 8000,
    soldOut: true,
  },
  {
    photoname: "/images/eba.jpg",
    photoalt: "Eba image",
    mealName: "Eba",
    mealCombination: "Eba with Efo-riru",
    price: 7000,
    soldOut: false,
  },
];

function Menu() {
  const numMeals = meals.length;
  return (
    <div id="menu">
      <div className="mx-auto mt-[150px] max-w-screen-lg px-4 text-stone-700 md:mt-[100px]">
        <div className="flex justify-center ">
          <h1 className=" mb-10 border-b-2 border-t-2 border-solid border-stone-500 text-center text-2xl md:mb-16 md:text-4xl">
            OUR MENU
          </h1>
        </div>
        <div className="container mx-auto">
          {numMeals ? (
            <div className="  grid grid-cols-1 gap-8 md:grid-cols-2">
              {meals.map((meal) => (
                <Meal mealObj={meal} key={meal.mealName} />
              ))}
            </div>
          ) : (
            <p className="sm:text-center">
              We're still working on our menu. Please come back later :)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
