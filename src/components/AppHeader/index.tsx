import styles from "./index.module.css";
import { ReactComponent as IMDBLogo } from "assets/images/IMDB_Logo.svg";
import { useHistory } from "react-router-dom";

const AppHeader = (): React.ReactElement => {
  const history = useHistory();

  return (
    <div style={{ padding: "0.5rem 2rem" }} className={styles.root}>
      <IMDBLogo
        height={48}
        width={100}
        className={styles.appLogo}
        onClick={() => history.replace("/")}
      />
    </div>
  );
};

export default AppHeader;
