import React, { useState, ReactElement } from "react";
import styles from "./index.module.css";
import SearchBox from "components/SearchBox";
import service from "utils/service";
import CONSTANTS from "utils/constants";
import { useQuery } from "react-query";
import MovieCard, { MovieCardProps } from "components/MovieCard";
import { Container, Grid } from "@material-ui/core";

const Home = (): ReactElement => {
  const [searchText, setSearchText] = useState("");

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
      <div>
        <SearchBox onChange={handleSearchChange} />
      </div>

      <div className={styles.movieListContainer}>
        {isLoading && <div>Loading...</div>}

        {isSuccess &&
          (!!data && data.Search.length ? (
            <Container maxWidth={false}>
              <Grid container spacing={2} xs={12}>
                {data.Search.map(
                  ({ Title, imdbID, Type, Year, Poster }: MovieCardProps) => (
                    <Grid item xs={12} md={2} key={imdbID}>
                      <MovieCard {...{ Title, imdbID, Type, Year, Poster }} />
                    </Grid>
                  )
                )}
              </Grid>
            </Container>
          ) : (
            "No Result"
          ))}

        {!!error && <div>{JSON.stringify(error)}</div>}
      </div>
    </div>
  );
};

export default Home;
