export default function GoogleLogo({ homePage }) {
  return (
    <div className={homePage ? "google-logo" : "google-logo-result"}>
      <img src={require("../logo.png")} alt="google Logo"></img>
    </div>
  );
}
