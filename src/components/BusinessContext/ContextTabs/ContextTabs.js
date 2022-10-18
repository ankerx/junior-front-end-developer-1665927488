import { ContextTab } from "../ContextTab/ContextTab";

import styles from "./styles.module.css";

export const ContextTabs = ({ task, handleClick }) => {
  return (
    <div className={styles.wrapper}>
      {task.context.map((ctx) => (
        <ContextTab key={ctx.id} context={ctx} handleClick={handleClick} />
      ))}
    </div>
  );
};
