function Footer() {
  let hour = new Date().getHours();
  let presentTime = new Date().toLocaleTimeString();
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="text-[ #e6eff9] mx-auto bg-[#004200] ">
      <h1 className="text-center">
        {presentTime}, {new Date().toDateString()},{" "}
        {isOpen ? (
          <p>We are open until {closeHour + 1}:00. Come visit us to order</p>
        ) : (
          <p>
            We are closed for today, we are happy to welcome you between{" "}
            {openHour}:00 and {closeHour + 1}:00
          </p>
        )}
      </h1>
    </footer>
  );
}

export default Footer;
