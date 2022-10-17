import { businessContext } from "../../../mock-data";
import { ContextTab } from "../ContextTab/ContextTab";

import styles from "./styles.module.css";
export const ContextTabs = () => {
  return (
    <div className={styles.wrapper}>
      {businessContext.map((context) => (
        <ContextTab key={context.id} context={context} />
      ))}
    </div>
  );
};
