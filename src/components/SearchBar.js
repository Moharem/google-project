import CameraAndMic from "./CameraAndMic";
export default function SearchBar({ homePage, onChangeHandler }) {
  return (
    // <div className="search-bar">
    <div className={homePage ? "search-bar" : "search-bar-result"}>
      <div
        className={homePage ? "search-components" : "search-components-result"}
      >
        <input onChange={onChangeHandler} type="search"></input>
        <i class="fa-solid fa-magnifying-glass"></i>
        <CameraAndMic />
      </div>
    </div>
  );
}
