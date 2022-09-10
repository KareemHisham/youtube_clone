import { Stack, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../Data/data";
import { SearchBar } from "../index";
const Navbar = () => {
  return (
    <Stack
      component="nav"
      direction="row"
      p={2}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: "999",
      }}
    >
      <Link to="/youtube_clone" className="brand-img" rel="noopener noreferrer">
        <Avatar src={logo} alt="brand-img"></Avatar>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
