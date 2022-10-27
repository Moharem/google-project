import Logo from "./components/GoogleLogo";
import SearchBar from "./components/SearchBar";
import User from "./components/User";
import Filter from "./components/Filter";
import RenderedList from "./components/RenderedList";
// import ResultInfo from "./components/ResultInfo";
export default function ResultsPage({ fakeList, homePage, handleChange }) {
  return (
    <>
      <Logo />
      <SearchBar />
      <User />
      <Filter />
      <p className="results-number">About 999.000.000 results(000 Seconds)</p>
      <RenderedList fakeList={fakeList} handleChange={handleChange} />
      {/* <ResultInfo /> */}
    </>
  );
}
