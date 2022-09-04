import Grid from "@mui/material/Unstable_Grid2";
import { VideoCard } from "../index";
const ChannelVideos = ({ channelVideosFetch }) => {
  return (
    <Grid container spacing={2}>
      {channelVideosFetch &&
        channelVideosFetch?.map((item) => {
          return <VideoCard videoDetail={item} key={item?.id?.videoId} />;
        })}
    </Grid>
  );
};

export default ChannelVideos;
