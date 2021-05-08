import { ReactElement } from "react";
import styles from "./index.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const Fallback = (): ReactElement => {
  return (
    <div className={styles.root}>
      <CircularProgress />
    </div>
  );
};

export default Fallback;
