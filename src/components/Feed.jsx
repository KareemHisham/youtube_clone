import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SideBar, Videos, Spinner } from "./index";
import { VideoFetching } from "../store/videoSlice";
const Feed = () => {
  const { selectedCategory } = useSelector((state) => state.VideoSlice);
  const SelectedVideos = useSelector((state) => state.VideoSlice.videos.items);
  const { isLoading } = useSelector((state) => state.VideoSlice);
  const [newCategory, setNewCategory] = useState(selectedCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      VideoFetching(
        `search?q=${newCategory}&part=id%2Csnippet&type=video&maxResults=100`
      )
    );
  }, [dispatch, newCategory]);
  return (
    <Stack
      component="section"
      className="feed"
      p={2}
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Box
        component="section"
        className="sidebar"
        sx={{
          borderRight: "1px solid #eee6",
          flexBasis: { xs: "100%", md: "220px" },
          marginBottom: { xs: "20px", md: "0" },
          height: "100%",
          position: { xs: "static", md: "sticky" },
          top: { xs: "0", md: "90px" },
        }}
        px={2}
      >
        <SideBar newCategory={newCategory} setNewCategory={setNewCategory} />
      </Box>
      <Box
        component="section"
        className="feed-section"
        px={2}
        sx={{ flexGrow: "1" }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ textTransform: "capitalize", marginBottom: "10px" }}
        >
          {newCategory} <span style={{ color: "#f44336" }}>videos</span>
        </Typography>
        {isLoading ? <Spinner /> : <Videos SelectedVideos={SelectedVideos} />}
      </Box>
    </Stack>
  );
};

export default Feed;
