export default function SearchButtons({ googleButton }) {
  return (
    <div className="search-buttons">
      <button onClick={googleButton}>Google Search</button>
      <button>I'm Feeling Lucky</button>
    </div>
  );
}
