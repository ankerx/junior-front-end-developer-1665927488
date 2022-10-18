import { useLocation } from "react-router-dom";

import { Content } from "../Content/Content";
import { ContextTabs } from "../ContextTabs/ContextTabs";

import { tasks } from "../../../mock-data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons/faCompass";

import styles from "./styles.module.css";
import { useState } from "react";

export const BusinessContext = () => {
  const location = useLocation();

  const [clicked, setClicked] = useState(1);

  const taskId = location.state?.taskId
    ? location.state.taskId
    : location.state;

  const task = tasks.find((item) => item.id === taskId);

  const businessContext = task.context.find((i) => i.id === clicked);

  const handleClick = (id) => {
    setClicked(id);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <p className={styles.heading}>
          <span className={styles.icon_container}>
            <FontAwesomeIcon icon={faCompass} className={styles.icon} />
          </span>
          Business context
        </p>
      </div>
      <div className={styles.flex}>
        <ContextTabs task={task} handleClick={handleClick} />
        <Content businessContext={businessContext} />
      </div>
    </div>
  );
};
