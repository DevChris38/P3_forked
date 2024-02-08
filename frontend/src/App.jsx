import "./App.css";
import Navbar from "./layout/navbar/Navbar";
import HeroSlider from "./components/heroSlider/HeroSlider";
import NavMobile from "./layout/NavMobile/NavMobile";
import Carrousel from "./components/carrousel/Carrousel";
import Boutons from "./components/boutonsLanguages/BoutonsLanguages";

function App() {
  const title1 = "Dernieres Sorties";
  const title2 = "Les Plus Populaires";
  const title3 = "Les Plus Plébiscitées";
  const tableId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Navbar />
      <HeroSlider />x
      <Boutons />
      <Carrousel title={title1} tableId={tableId} categorie="last" />
      <Carrousel title={title2} tableId={tableId} categorie="view" />
      <Carrousel title={title3} tableId={tableId} categorie="like" />
      <NavMobile />
    </>
  );
}

export default App;
