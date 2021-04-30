import React, { useState, useEffect, ReactElement } from "react";
import styles from "./index.module.css";
import SearchBox from "components/SearchBox";
import service from "utils/service";
import CONSTANTS from "utils/constants";

const Home = (): ReactElement => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filterTimer = setTimeout(() => {
      console.log(searchText);
    }, 1000);
    return () => {
      clearTimeout(filterTimer);
    };
  }, [searchText]);

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const fetchData = async () => {
    const response = await service.get(CONSTANTS.BASE_URL);
    console.log(response);

    // fetch("http://www.omdbapi.com/?i=tt3896198&apikey=91300fc7")
    //   .then((response) => response.json())
    //   .then((response) => console.log(response));
  };

  return (
    <div className={styles.root}>
      <SearchBox onChange={handleSearchChange} />
      <button onClick={fetchData}>Fetch</button>
    </div>
  );
};

export default Home;
