import styles from "./index.module.css";
import { default as MuiSkeleton } from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const Skeleton = (): React.ReactElement => {
  return (
    <Card className={styles.root}>
      <CardActionArea>
        <MuiSkeleton
          animation="wave"
          variant="rect"
          width="100%"
          height={400}
        />
        <CardContent className={styles.overText}>
          <MuiSkeleton
            animation="wave"
            variant="text"
            width="80%"
            height={40}
          />
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.actionsContainer}>
        <MuiSkeleton animation="wave" variant="text" width={100} height={40} />
        <MuiSkeleton animation="wave" variant="circle" width={40} height={40} />
      </CardActions>
    </Card>
  );
};

export default Skeleton;
