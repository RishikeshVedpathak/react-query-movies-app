import styles from "./index.module.css";
import { default as MuiSkeleton } from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const Skeleton = (): React.ReactElement => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <MuiSkeleton variant="rect" height={500} width="100%" />
          </Grid>
          <Grid item xs={12} sm={8} className={styles.detailsSection}>
            <div className={styles.titleContainer}>
              <MuiSkeleton variant="text" height={80} width="70%" />
              <MuiSkeleton variant="text" height={80} width="20%" />
            </div>

            <div className={styles.plot}>
              <MuiSkeleton variant="text" height={40} width="100%" />
              <MuiSkeleton variant="text" height={40} width="80%" />
              <MuiSkeleton variant="text" height={40} width="60%" />
              <MuiSkeleton variant="text" height={40} width="90%" />
            </div>

            <Divider light={false} />

            {[...new Array(8)].map((_, i) => (
              <Grid container key={i} className={styles.metaData}>
                <Grid item xs={3} md={2} className={styles.metaLabel}>
                  <MuiSkeleton variant="text" height={40} width="90%" />
                </Grid>
                <Grid item xs={9} md={10} className={styles.metaValue}>
                  <MuiSkeleton variant="text" height={40} width="90%" />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skeleton;
