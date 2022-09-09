import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchVideo } from "../store/videoSlice";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { VideoCard, Spinner } from "./index";

const SearchTerm = () => {
  const dispatch = useDispatch();
  const {
    searchVideos: { items },
    isLoading,
  } = useSelector((state) => state.VideoSlice);

  const { searchTerm } = useParams();

  useEffect(() => {
    dispatch(SearchVideo(searchTerm));
  }, [dispatch, searchTerm]);

  if (isLoading) return <Spinner />;

  return (
    <Stack p={2} component="section" className="search-term">
      <Grid container spacing={2}>
        {items?.map((item, idx) => {
          console.log(item)
          return (
            <Grid item xs={12} md={4} lg={3} key={idx}>
              <VideoCard videoDetail={item} height="100%" />;
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default SearchTerm;
