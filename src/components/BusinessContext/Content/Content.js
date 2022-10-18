import styles from "./styles.module.css";

export const Content = ({ businessContext }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{businessContext.title}</h4>
      <div className={styles.info}>
        <div>
          <img
            className={styles.img}
            src="https://hub.nerds.family/packs/static/images/avatar_project_manager-c3f4ff1c488d9437d22d.png"
            alt="avatar"
          />
        </div>

        <p className={styles.author}>{businessContext.author.name}</p>
        <span className={styles.bullet}></span>
        <p>{businessContext.created_at.slice(3, 11)}</p>
      </div>
      <p className={styles.content}>{businessContext.content}</p>
    </div>
  );
};
