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
import { useHistory } from "react-router";

export type MovieCardProps = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

const MovieCard = ({ Title, Year, imdbID, Type, Poster }: MovieCardProps) => {
  const history = useHistory();
  const handleMovieSelect = () => {
    history.push(`/${imdbID}`);
  };

  return (
    <Card className={styles.root}>
      <CardActionArea className={styles.cardArea} onClick={handleMovieSelect}>
        <CardMedia
          component="img"
          alt={Title}
          height="400"
          image={Poster}
          title={Title}
          className={styles.poster}
        />
        <CardContent className={styles.overText}>
            <h2>{Title}</h2>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.actionsContainer}>
        <Typography gutterBottom component="i" className={styles.yearSection}>
          <CalendarToday fontSize="small" />
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
