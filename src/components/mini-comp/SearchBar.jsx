import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/youtube_clone/search/${searchTerm}`);
    }
  };

  return (
    <Paper component="form" elevation={3} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        defaultValue={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton aria-label="search" type="submit" color="error">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
