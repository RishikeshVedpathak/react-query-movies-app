import styles from "./index.module.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarToday from "@material-ui/icons/CalendarToday";

export type MovieCardProps = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

const MovieCard = ({ Title, Year, imdbID, Type, Poster }: MovieCardProps) => {
  return (
    <Card className={styles.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={Title}
          height="200"
          image={Poster}
          title={Title}
          className={styles.poster}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.actionsContainer}>
        <Typography gutterBottom component="i" className={styles.yearSection}>
          <CalendarToday />
          &nbsp;
          {Year}
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
