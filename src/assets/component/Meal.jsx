function Meal(props) {
  return (
    <>
      <div className="m-[30px] flex w-[500px] justify-between overflow-hidden rounded bg-[#f7f7f7] p-4 shadow-lg hover:shadow-2xl">
        <img
          src={props.photoname}
          alt={props.photoalt}
          className="h-[300px] w-[60%] rounded-md object-cover "
        />
        <div className="w-[35%]">
          <h2 className="text-lg font-bold"> {props.mealName}</h2>
          <p>{props.mealCombination}</p>
          <p className="font-semibold">
            <span>Price: </span> N{props.price}
          </p>
        </div>
      </div>
    </>
  );
}

export default Meal;
