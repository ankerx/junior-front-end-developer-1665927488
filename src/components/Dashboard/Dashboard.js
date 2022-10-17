import { BusinessContext } from "../BusinessContext/Main/BusinessContext";
import { TasksList } from "../Tasks/TasksList/TasksList";

import styles from "./styles.module.css";
export const Dashboard = () => {
  return (
    <main className={styles.wrapper}>
      <TasksList />
      <BusinessContext />
    </main>
  );
};
