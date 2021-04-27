import React from "react";
import styles from "./index.module.css";
import SearchBox from "components/SearchBox";

const Home = () => {
  const handleSearchChange = (text: string) => {
    console.log(text);
  };

  return (
    <div className={styles.root}>
      <SearchBox onChange={handleSearchChange} />
    </div>
  );
};

export default Home;
