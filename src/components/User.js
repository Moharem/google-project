export default function User({ homePage }) {
  return (
    <>
      {/* <div className="user"> */}
      <div className={homePage ? "user" : "user-result"}>
        <i
          class={homePage ? "fa-solid fa-gear-result" : "fa-solid fa-gear"}
        ></i>
        <button type="button">
          <a href="https://mail.google.com/" rel="noreferrer" target="_blank">
            Gmail
          </a>
        </button>
        <button type="button">
          <a
            href="https://www.google.de/imghp?hl=en&authuser=0&ogbl"
            rel="noreferrer"
            target="_blank"
          >
            Images
          </a>
        </button>
        <span>
          <i class="fa-solid fa-braille"></i>
        </span>
        <img
          src={require("../—Pngtree—user avatar login interface abstract_6796239.png")}
          alt="Mr Bean"
        ></img>
      </div>
    </>
  );
}
