import { clsx } from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.css";

export const Icon = ({ taskStyles, taskIcon }) => {
  return (
    <span
      className={clsx({
        [styles.icon_container]: true,
        ...taskStyles,
      })}
    >
      <FontAwesomeIcon
        icon={taskIcon}
        className={clsx({
          [styles.icon]: true,
          ...taskStyles,
        })}
      />
    </span>
  );
};
