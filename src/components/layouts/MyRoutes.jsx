import { Routes, Route } from "react-router-dom";
import { Feed, VideoDetails, ChannelDetails, SearchTerm } from "../index";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/youtube_clone" element={<Feed />} />
      <Route path="/youtube_clone/video/:videoID" element={<VideoDetails />} />
      <Route path="/youtube_clone/channel/:channelID" element={<ChannelDetails />} />
      <Route path="/youtube_clone/search/:searchTerm" element={<SearchTerm />} />
    </Routes>
  );
};

export default MyRoutes;
