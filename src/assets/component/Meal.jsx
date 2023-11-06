function Meal() {
  return (
    <>
      <div className="m-[30px] flex w-[500px] justify-between overflow-hidden rounded bg-[#f7f7f7] p-4 shadow-lg hover:shadow-2xl">
        <img
          src="/images/amala.jpg"
          alt="amala with ewedu and gbediri image"
          className="h-[300px] w-[60%] rounded-md object-cover "
        />
        <div className="w-[35%]">
          <h2 className="text-lg font-bold"> Amala</h2>
          <p>Amala ewedu and gbegiri</p>
          <p className="font-semibold">
            <span>Price: </span> N5000
          </p>
        </div>
      </div>
    </>
  );
}

export default Meal;
