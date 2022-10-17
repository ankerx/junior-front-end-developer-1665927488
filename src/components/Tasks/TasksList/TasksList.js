import { useNavigate } from "react-router-dom";

import { tasks } from "../../../mock-data";
import { transformUrlPath } from "../../../utils";

import { Task } from "../Task/Task";

import styles from "./styles.module.css";

export const TasksList = () => {
  const navigate = useNavigate();

  const handleNavigate = (path, task) => {
    if (task.status === "blocked") return;
    navigate(`/task/${path}`, {
      state: {
        taskId: task.id,
      },
    });
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Your tasks</p>

      <div className={styles.container}>
        {tasks.map((task) => {
          return (
            <div
              className={styles.navigate}
              key={task.id}
              onClick={() => handleNavigate(transformUrlPath(task.title), task)}
            >
              <Task task={task} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
