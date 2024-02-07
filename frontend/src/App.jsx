import "./App.css";
import Navbar from "./layout/navbar/Navbar";
import HeroSlider from "./components/heroSlider/HeroSlider";
import NavMobile from "./layout/NavMobile/NavMobile";
import Carrousel from "./components/carrousel/Carrousel";
import Boutons from "./components/boutonsLanguages/BoutonsLanguages";

function App() {
  const title1 = "Dernieres Sorties";
  const title2 = "Les Plus Populaire";
  const title3 = "Les Plus Plebicites";

  return (
    <>
      <Navbar />
      <HeroSlider />
      <Boutons />
      <Carrousel title={title1} />
      <Carrousel title={title2} />
      <Carrousel title={title3} />
      <NavMobile />
    </>
  );
}

export default App;
