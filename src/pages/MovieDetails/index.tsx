import { ReactElement } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import service from "utils/service";
import CONSTANTS from "utils/constants";
import { Grid } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const MovieDetails = (): ReactElement => {
  const { movieId } = useParams<{ movieId: string }>();
  const { isSuccess, isLoading, error, data } = useQuery(
    [`movie`, movieId],
    () => service.get(CONSTANTS.BASE_URL, { i: movieId, plot: "full" }),
    {
      enabled: !!movieId,
    }
  );

  return (
    <div className={styles.root}>
      {isSuccess && (
        <Grid container justify="center">
          <Grid item xs={12} sm={8}>
            <Grid container>
              <Grid item xs={12} sm={4}>
                <img
                  src={data.Poster}
                  alt={data.Title}
                  height="500"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12} sm={8} className={styles.detailsSection}>
                <div className={styles.titleContainer}>
                  <div className={styles.title}>{data.Title}</div>
                  <div className={styles.ratingsRoot}>
                    <StarIcon fontSize="large" htmlColor="#e4bb24" />
                    <div>
                      <div className={styles.ratingsContainer}>
                        {data.imdbRating}
                        <i>/10</i>
                      </div>
                      <div className={styles.votes}>{data.imdbVotes}</div>
                    </div>
                  </div>
                </div>

                <div className={styles.plot}>{data.Plot}</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      {!!error && <div>{JSON.stringify(error)}</div>}
    </div>
  );
};

export default MovieDetails;
