import { tasks } from "../../../mock-data";

import { Task } from "../Task/Task";

import styles from "./styles.module.css";

export const TasksList = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Your tasks</p>

      <div className={styles.container}>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};
