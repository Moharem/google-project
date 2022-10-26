import NavButtons from "./NavButtons";
import User from "./User";
export default function NavBar({ homePage }) {
  return (
    <nav className="nav-bar">
      <NavButtons />
      <User homePage={homePage} />
    </nav>
  );
}
