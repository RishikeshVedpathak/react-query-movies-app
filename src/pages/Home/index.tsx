import React, { useState, ReactElement } from "react";
import styles from "./index.module.css";
import SearchBox from "components/SearchBox";
import service from "utils/service";
import CONSTANTS from "utils/constants";
import { useQuery } from "react-query";
import MovieCard, { MovieCardProps } from "components/MovieCard";
import Skeleton from "components/MovieCard/Skeleton";
import { Grid } from "@material-ui/core";

const Home = (): ReactElement => {
  const [searchText, setSearchText] = useState("man"); // Initial value set to 'man' to display default search results on UI

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const { isSuccess, isLoading, error, data } = useQuery(
    [`movies`, searchText],
    () => service.get(CONSTANTS.BASE_URL, { s: searchText }),
    {
      enabled: !!searchText.length,
    }
  );

  return (
    <div className={styles.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={10}>
          <Grid container justify="center">
            <Grid item xs={12} md={4}>
              <SearchBox
                className={styles.searchBox}
                onChange={handleSearchChange}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} className={styles.movieListContainer}>
            {isLoading && (
              <Grid container spacing={2}>
                {[...new Array(10)].map((_, i: number) => (
                  <Grid item xs={12} md={3} key={i}>
                    <Skeleton />
                  </Grid>
                ))}
              </Grid>
            )}

            {isSuccess &&
              (!!data && data.Search.length ? (
                <Grid container spacing={2}>
                  {data.Search.map(
                    ({ Title, imdbID, Type, Year, Poster }: MovieCardProps) => (
                      <Grid item xs={12} md={3} key={imdbID}>
                        <MovieCard {...{ Title, imdbID, Type, Year, Poster }} />
                      </Grid>
                    )
                  )}
                </Grid>
              ) : (
                "No Result"
              ))}

            {!!error && <div>{JSON.stringify(error)}</div>}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
