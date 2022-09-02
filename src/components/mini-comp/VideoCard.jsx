import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

import {
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../../Data/data";

const VideoCard = ({
  videoDetail: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Grid item xs={12} md={6} lg={3} className="video-card">
      <Card sx={{ height: "100%", backgroundColor: "#0F0E0E" }}>
        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
          <CardMedia
            component="img"
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.channelTitle}
          />
          <CardContent sx={{ padding: "10px" }}>
            <Typography variant="body2" color="#fff" title={snippet?.title}>
              {snippet?.title || demoVideoTitle}
            </Typography>
          </CardContent>
        </Link>
        <CardContent sx={{ padding: "10px" }}>
          <Link
            to={
              snippet?.channelId
                ? `channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", color: "#7F8487" }}
            >
              {snippet?.channelTitle || demoChannelTitle}
              <span className="icon">
                <CheckCircleIcon
                  sx={{ marginLeft: "10px", fontSize: "15px" }}
                />
              </span>
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default VideoCard;
