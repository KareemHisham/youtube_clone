import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <Paper component="form" elevation={3}>
      <input type="text" placeholder="Search..." defaultValue="" />
      <IconButton aria-label="search" type="submit" color="error">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
