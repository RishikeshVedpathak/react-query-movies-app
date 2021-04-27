import React, { ReactElement } from "react";
import { TextField } from "@material-ui/core";
import styles from "./index.module.css";

type SearchBoxProps = {
  onChange: (text: string) => void;
};
const defaultProps = {
  onChange: () => {},
};

const SearchBox = ({ onChange }: SearchBoxProps): ReactElement => {
  return (
    <TextField
      type="text"
      variant="outlined"
      placeholder="Search for a movie"
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

SearchBox.defaultProps = defaultProps;

export default SearchBox;
