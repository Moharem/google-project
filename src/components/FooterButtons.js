export default function FooterButtons() {
  return (
    <div className="footer-buttons">
      <div className="left-buttons">
        <button>
          <a
            href="https://ads.google.com/intl/en_de/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            target="_blank"
            rel="noreferrer"
          >
            Advertising
          </a>
        </button>
        <button>
          <a
            href="https://smallbusiness.withgoogle.com/intl/de_de/?subid=de-de-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=de-de-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u#!/"
            target="_blank"
            rel="noreferrer"
          >
            Business
          </a>
        </button>
        <button>
          <a
            href="https://www.google.com/search/howsearchworks/?fg=1"
            target="_blank"
            rel="noreferrer"
          >
            How Search works
          </a>
        </button>
      </div>
      <div className="right-buttons">
        <button>
          <a
            href="https://policies.google.com/privacy?hl=en-DE&fg=1"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
        </button>
        <button>
          <a
            href="https://policies.google.com/terms?hl=en-DE&fg=1"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
        </button>
        <button>Settings</button>
      </div>
    </div>
  );
}
