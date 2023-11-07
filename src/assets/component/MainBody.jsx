import About from "./About";
import HeroSection from "./HeroSection";
import Menu from "./Menu";

function MainBody() {
  return (
    <main id="home" className="grid-cols-[1fr_auto] md:grid">
      <div>
        <HeroSection />
        <Menu />
      </div>
      <About />
    </main>
  );
}

export default MainBody;
