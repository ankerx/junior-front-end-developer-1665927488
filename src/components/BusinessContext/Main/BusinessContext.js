import { Content } from "../Content/Content";
import { ContextTabs } from "../ContextTabs/ContextTabs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons/faCompass";

import styles from "./styles.module.css";

export const BusinessContext = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.heading}>
          <span className={styles.icon_container}>
            <FontAwesomeIcon icon={faCompass} className={styles.icon} />
          </span>
          Business context
        </p>
      </div>
      <div className={styles.flex}>
        <ContextTabs />
        <Content />
      </div>
    </div>
  );
};
