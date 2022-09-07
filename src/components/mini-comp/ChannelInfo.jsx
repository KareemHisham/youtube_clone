import { Box, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import millify from "millify";
const ChannelInfo = ({ items }) => {
  return (
    items &&
    items?.map((item) => {
      return (
        <Box
          className="channel-info"
          style={{ marginBottom: "30px" }}
          key={item?.id}
        >
          <div
            className="channel-background"
            style={{
              backgroundImage: `url(${item?.brandingSettings?.image?.bannerExternalUrl})`,
              backgroundSize: "100%",
              backgroundPosition: "center center",
              width: "100%",
              height: "230px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="details"
            style={{
              textAlign: "center",
              marginTop: "-50px",
            }}
          >
            <Avatar
              alt={item?.snippet?.title}
              src={item?.snippet?.thumbnails?.high?.url}
              sx={{ width: "150px", height: "150px", margin: "auto" }}
            />
            <div
              className="channel-title"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <span style={{ color: "#fff" }}>{item?.snippet?.title}</span>
              <span
                className="icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckCircleIcon
                  sx={{
                    fontSize: "16px",
                    color: "#fff",
                    marginLeft: "10px",
                  }}
                />
              </span>
            </div>
            <div
              className="subscribers"
              style={{
                marginTop: "10px",
                color: "#fff",
              }}
            >
              {millify(item?.statistics?.subscriberCount)} Subscribers
            </div>
          </div>
        </Box>
      );
    })
  );
};

export default ChannelInfo;
