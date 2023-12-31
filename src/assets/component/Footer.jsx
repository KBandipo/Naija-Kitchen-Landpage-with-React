function Footer() {
  let hour = new Date().getHours();
  let presentTime = new Date().toLocaleTimeString();
  const openHour = 8;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="text-[ #e6eff9] mx-auto bg-[#004200] ">
      <h1 className="text-center">
        Local Time {presentTime}, {new Date().toDateString()},
        {isOpen ? (
          <p>We are open until {closeHour + 1}:00HR. Come visit us to order</p>
        ) : (
          <p>
            We are closed for the day, we are happy to welcome you between{" "}
            {openHour}:00HR and {closeHour + 1}:00HR Monday-Friday
          </p>
        )}
      </h1>
    </footer>
  );
}

export default Footer;
