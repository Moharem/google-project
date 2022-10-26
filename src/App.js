import { useState } from "react";
import HomePage from "./HomePage";
import ResultsPage from "./ResultsPage";

function App() {
  const [homePage, setHomePage] = useState(true);
  const [handleChange, setHandleChange] = useState("");

  const onChangeHandler = (e) => {
    // console.log(e.target.value);
    setHandleChange(e.target.value);
  };
  const googleSearch = (e) => setHomePage(false);

  const fakeList = [1, 2, 3, 4, 5, 6];

  return (
    <div className="App">
      {homePage ? (
        <HomePage
          searchButton={googleSearch}
          homePage={homePage}
          onChangeHandler={onChangeHandler}
        />
      ) : (
        <ResultsPage fakeList={fakeList} handleChange={handleChange} />
      )}
    </div>
  );
}
export default App;
