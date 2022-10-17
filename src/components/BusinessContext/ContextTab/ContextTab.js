import styles from "./styles.module.css";
import { clsx } from "clsx";
export const ContextTab = ({ context }) => {
  console.log(context);
  const classes = clsx({
    [styles.old]: context.label === "old",
    [styles.active]: context.label === "active",
  });
  return (
    <div className={`${styles.wrapper} ${classes}`}>
      <div className={styles.info}>
        {context.label === "new" && <span className={styles.new}>NEW</span>}
        <p>{context.author.name}</p>
        <span className={styles.bullet}></span>
        <p> {context.created_at.slice(3, 11)}</p>
      </div>
      <div>
        <p
          className={`${styles.title} ${
            context.label === "new" && styles.active
          }`}
        >
          {context.title}
        </p>
        <p className={styles.content}>{context.content.slice(0, 100)}...</p>
      </div>
    </div>
  );
};
