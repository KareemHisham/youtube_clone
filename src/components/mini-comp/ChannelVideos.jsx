import Grid from "@mui/material/Unstable_Grid2";
import { VideoCard } from "../index";

const ChannelVideos = ({ channelVideosFetch }) => {
  return (
    <Grid container spacing={2}>
      {channelVideosFetch &&
        channelVideosFetch?.map((item) => {
          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              className="video-card"
              key={item?.id?.videoId}
            >
              <VideoCard videoDetail={item} key={item?.id?.videoId} height="100%" />;
            </Grid>
          );
        })}
    </Grid>
  );
};

export default ChannelVideos;
