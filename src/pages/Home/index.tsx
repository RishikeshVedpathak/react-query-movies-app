import React, { useState, ReactElement } from "react";
import styles from "./index.module.css";
import SearchBox from "components/SearchBox";
import service from "utils/service";
import CONSTANTS from "utils/constants";
import { useQuery } from "react-query";

const Home = (): ReactElement => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const { status, error, data } = useQuery(
    [`movies`, searchText],
    () => service.get(CONSTANTS.BASE_URL, { s: searchText }),
    {
      enabled: !!searchText.length,
    }
  );

  return (
    <div className={styles.root}>
      <SearchBox onChange={handleSearchChange} />
      <div>{!!data && JSON.stringify(data)}</div>
    </div>
  );
};

export default Home;
