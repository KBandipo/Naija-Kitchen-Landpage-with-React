import Button from "./Button";

function Meal(props) {
  const { photoname, photoalt, mealName, mealCombination, price } = props;
  return (
    <>
      <div className="m-[30px] flex w-[500px] justify-between overflow-hidden rounded bg-[#f7f7f7] p-4 shadow-lg hover:shadow-2xl">
        <img
          src={photoname}
          alt={photoalt}
          className="h-[300px] w-[60%] rounded-md object-cover "
        />
        <div className="w-[35%]">
          <h2 className="mb-[5px] text-lg font-bold"> {mealName}</h2>
          <p className="font-semibold">Contents</p>
          <h3 className="mb-[5px]">{mealCombination}</h3>
          <p className="font-semibold">
            <span>Price: </span> N{price}
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}

export default Meal;
