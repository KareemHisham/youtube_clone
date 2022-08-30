import { Routes, Route } from "react-router-dom";
import { Feed, VideoDetails, ChannelDetails, SearchTerm } from "../index";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="video/:videoID" element={<VideoDetails />} />
      <Route path="channel/:channelID" element={<ChannelDetails />} />
      <Route path="search/:searchTerm" element={<SearchTerm />} />
    </Routes>
  );
};

export default MyRoutes;
