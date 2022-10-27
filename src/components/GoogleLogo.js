export default function Logo({ homePage }) {
  return (
    <div className={homePage ? "google-logo" : "google-logo-result"}>
      <img
        src={require("../pexels-magda-ehlers-1337386-removebg-preview.png")}
        alt="google Logo"
      ></img>
    </div>
  );
}
