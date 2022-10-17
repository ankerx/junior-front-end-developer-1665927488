import { useLocation } from "react-router-dom";

import { tasks } from "../../../mock-data";
import { ContextTab } from "../ContextTab/ContextTab";

import styles from "./styles.module.css";

export const ContextTabs = () => {
  const location = useLocation();

  const taskId = location.state?.taskId
    ? location.state.taskId
    : location.state;

  const taskContext = tasks.find((item) => item.id === taskId);

  return (
    <div className={styles.wrapper}>
      {taskContext.context.map((ctx) => (
        <ContextTab key={ctx.id} context={ctx} />
      ))}
    </div>
  );
};
