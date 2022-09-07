import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { VideoCard } from "./index";
const Videos = ({ SelectedVideos }) => {
  return (
    <Stack component="section" className="videos">
      <Grid container spacing={2}>
        {SelectedVideos?.map((video) => {
          return (
            <Grid item xs={12} md={6} lg={3} className="video-card" key={video?.id?.videoId}>
              {video?.id?.videoId && (
                <VideoCard videoDetail={video} style={{height:"100%"}} height="100%" />
              )}
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Videos;
