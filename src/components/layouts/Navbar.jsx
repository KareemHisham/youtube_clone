import { Stack, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../Data/data";
import { SearchBar } from "../index";
const Navbar = () => {
  return (
    <Stack component="nav" direction="row" p={2} sx={{alignItems: "center", justifyContent: "space-between"}}>
      <Link to="/" className="brand-img">
        <Avatar src={logo} alt="brand-img"></Avatar>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
