import React, { useState, useEffect, ReactElement } from "react";
import styles from "./index.module.css";
import SearchBox from "components/SearchBox";

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

  return (
    <div className={styles.root}>
      <SearchBox onChange={handleSearchChange} />
    </div>
  );
};

export default Home;
