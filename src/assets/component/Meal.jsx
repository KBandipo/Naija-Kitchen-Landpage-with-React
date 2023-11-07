import Button from "./Button";

function Meal(props) {
  const { photoname, photoalt, mealName, mealCombination, price } = props;
  return (
    <>
      <div className="m-[20px] w-[400px] justify-between overflow-hidden rounded bg-[#f7f7f7] p-4 shadow-lg hover:shadow-2xl lg:flex lg:w-[450px] ">
        <img
          src={photoname}
          alt={photoalt}
          className="h-[200px] w-[60%] rounded-md object-cover lg:h-[300px] lg:w-[60%]"
        />
        <div className="mx-4 mx-auto flex-1 md:w-2/3">
          <h2 className="mb-2 text-xl font-bold"> {mealName}</h2>
          <p className="mb-2 font-semibold">Contents</p>
          <h3 className="mb-2">{mealCombination}</h3>
          <p className="mb-2 font-semibold">
            <span>Price: </span> N{price}
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default Meal;
