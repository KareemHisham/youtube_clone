import { Stack, Button } from "@mui/material";
import { categories } from "../../Data/data";

const SideBar = ({ newCategory, setNewCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
      className="sidebar-wrapper"
    >
      {categories.map((category) => {
        return (
          <Button
            variant="outlined"
            key={category.name}
            sx={{
              minWidth: "unset",
            }}
            style={{
              marginBottom: "20px",
              borderColor: "transparent",
              width: "100%",
              justifyContent: "start",
              opacity: category.name === newCategory ? "1" : ".7",
              backgroundColor: category.name === newCategory ? "#f44336" : "",
            }}
            onClick={() => {
              setNewCategory(category.name);
            }}
          >
            <span
              className="category-icon"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "5px",
                color: category.name === newCategory ? "#fff" : "#f44336",
              }}
            >
              {category.icon}
            </span>
            <span
              className="category-name"
              style={{
                color: "#fff",
              }}
            >
              {category.name}
            </span>
          </Button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
