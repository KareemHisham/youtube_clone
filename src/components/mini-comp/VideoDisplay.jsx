import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ReactPlayer from "react-player/lazy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import millify from "millify";
const VideoDisplay = ({ items, videoID }) => {
  return (
    <>
      {items?.map((item) => {
        return (
          <Grid
            item
            xs={12}
            md={8}
            key={item?.id}
            className="grid-video-player"
          >
            <Box className="video-player" sx={{backgroundColor: "#0F0E0E"}}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoID}`}
                controls
                width="100%"
                height="70vh"
              />
              <Box className="video-title">{item?.snippet?.title}</Box>
              <Box className="channel-info">
                <span className="channel-name">
                  {item?.snippet?.channelTitle}
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                </span>
                <div className="views-likes">
                  <div>{millify(item?.statistics?.viewCount)} Views</div>
                  <div>{millify(item?.statistics?.likeCount)} Likes</div>
                </div>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </>
  );
};

export default VideoDisplay;
