import logo from "./assets/logo.png";
import avatar from "./assets/avatar.png";

import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="nerds family logo" />
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
    </header>
  );
};
