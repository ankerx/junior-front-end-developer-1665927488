import { clsx } from "clsx";

import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";

import styles from "./styles.module.css";
import { Icon } from "./Icon";

export const Task = ({ task }) => {
  const taskStyles = {
    [styles.active]: task.status === "active",
    [styles.blocked]: task.status === "blocked",
  };

  const taskIcon =
    task.status === "completed"
      ? faCheck
      : task.status === "active"
      ? faArrowRight
      : faLock;

  return (
    <div className={styles.container}>
      <Icon taskIcon={taskIcon} taskStyles={taskStyles} />

      <p
        className={clsx({
          [styles.title]: true,
          ...taskStyles,
        })}
      >
        {task.title}
      </p>
    </div>
  );
};
