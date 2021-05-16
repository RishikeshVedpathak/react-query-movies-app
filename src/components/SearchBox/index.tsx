import { ReactElement, useRef } from "react";
import { makeStyles, Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

type SearchBoxProps = {
  onChange: (text: string) => void;
  className?: string;
};
const defaultProps = {
  onChange: () => {},
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000000",
    border: "1px solid #f6c700",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchBox = ({ onChange, className }: SearchBoxProps): ReactElement => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    if (!!inputRef.current) {
      onChange(inputRef.current.value);
    }
  };

  return (
    <Paper className={`${classes.root} ${className}`}>
      <InputBase
        className={classes.input}
        placeholder="Search for a movie"
        inputRef={inputRef}
        fullWidth
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleChange();
          }
        }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        onClick={handleChange}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

SearchBox.defaultProps = defaultProps;

export default SearchBox;
