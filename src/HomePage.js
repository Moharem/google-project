import NavBar from "./components/NavBar";
import Logo from "./components/GoogleLogo";
import SearchBar from "./components/SearchBar";
import SearchButtons from "./components/SearchButtons";
import LocationLang from "./components/LocationLang";
import Footer from "./components/Footer";
export default function HomePage({ searchButton, homePage, onChangeHandler }) {
  return (
    <div className="Home-page">
      <NavBar homePage={homePage} />
      <Logo homePage={homePage} />
      <SearchBar homePage={homePage} onChangeHandler={onChangeHandler} />
      <SearchButtons googleButton={searchButton} />
      <LocationLang />
      <Footer />
    </div>
  );
}
