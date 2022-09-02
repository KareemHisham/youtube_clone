import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { VideoCard } from "./index";
const Videos = ({ SelectedVideos }) => {
  return (
    <Stack component="section" className="videos">
      <Grid container spacing={2}>
        {SelectedVideos?.map((video) => {
          return (
            video?.id?.videoId && (
              <VideoCard videoDetail={video} key={video.id.videoId} />
            )
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Videos;
