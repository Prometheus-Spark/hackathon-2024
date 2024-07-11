import styles from "./navbar.module.scss";
import Logo from "@assets/brand/sipnplay.svg?react";

const NAV_LINKS = [
  { text: "About", to: "about" },
  { text: "Menu", to: "menu" },
  { text: "Board Games", to: "board-games" },
  {
    text: "Calendar",
    to: "calendar",
  },
];

function Navbar() {
  return (
    <div className={styles["header-container"]}>
      <header className={styles["header"]}>
        <Logo />
        <div>
          <nav className={`${styles["nav"]}`}>
            <div className={styles["nav-content"]}>
              <div className={styles["nav-buttons"]}>
                {NAV_LINKS.map((btn, i) => (
                  <button className="button-link" key={i}>
                    {btn.text}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
