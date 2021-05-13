import { useState, useEffect, ReactElement } from "react";
import styles from "./index.module.css";
import SearchBox from "components/SearchBox";
import service from "utils/service";
import CONSTANTS from "utils/constants";
import { useInfiniteQuery } from "react-query";
import MovieCard, { MovieCardProps } from "components/MovieCard";
import Skeleton from "components/MovieCard/Skeleton";
import { Grid, Button } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = (): ReactElement => {
  const [searchText, setSearchText] = useState("man"); // Initial value set to 'man' to display default search results on UI
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
    remove();
    setTimeout(() => {
      refetch();
    }, 1000);
  }, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const fetchMovies = ({ pageParam = 1 }) =>
    service.get(CONSTANTS.BASE_URL, {
      s: searchText,
      page: pageParam,
    });

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isLoading,
    refetch,
    remove,
  } = useInfiniteQuery(`movies`, fetchMovies, {
    getNextPageParam: (lastPage, pages) => currentPage + 1,
    enabled: !!searchText.length,
    onSuccess: () => {
      setCurrentPage(currentPage + 1);
    },
  });

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
              (!!data ? (
                <InfiniteScroll
                  dataLength={
                    data.pages.reduce((a, b) => {
                      return { Search: [...a.Search, ...b.Search] };
                    }).Search.length
                  }
                  next={fetchNextPage}
                  hasMore={hasNextPage || false}
                  loader={<h4>Loading...</h4>}
                >
                  <Grid container spacing={2}>
                    {data.pages
                      .reduce((a, b) => {
                        return { Search: [...a.Search, ...b.Search] };
                      })
                      .Search.map(
                        ({
                          Title,
                          imdbID,
                          Type,
                          Year,
                          Poster,
                        }: MovieCardProps) => (
                          <Grid item xs={12} md={3} key={imdbID}>
                            <MovieCard
                              {...{ Title, imdbID, Type, Year, Poster }}
                            />
                          </Grid>
                        )
                      )}
                  </Grid>
                </InfiniteScroll>
              ) : (
                "No Result"
              ))}

            {!!error && <div>{JSON.stringify(error)}</div>}
          </Grid>
        </Grid>
      </Grid>
      <Button onClick={() => fetchNextPage()}>Fetch more</Button>
    </div>
  );
};

export default Home;
