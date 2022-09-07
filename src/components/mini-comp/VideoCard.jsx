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
  height,
  videoDetail: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
      <Card sx={{ backgroundColor: "#0F0E0E", marginBottom: "10px", height: {height} }}>
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
  );
};

export default VideoCard;
