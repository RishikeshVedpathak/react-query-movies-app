import React, { ReactElement } from "react";
import { Input } from "@material-ui/core";
import styles from "./index.module.css";

type SearchBoxProps = {
  onChange: (text: string) => void;
};
const defaultProps = {
  onChange: () => {},
};

const SearchBox = ({ onChange }: SearchBoxProps): ReactElement => {
  return (
    <Input type="text" onChange={(event) => onChange(event.target.value)} />
  );
};

SearchBox.defaultProps = defaultProps;

export default SearchBox;
