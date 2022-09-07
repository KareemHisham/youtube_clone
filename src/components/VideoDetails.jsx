import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import { FetchVideoDetail, FetchRelatedVideos } from "../store/videoSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Spinner, VideoDisplay, VideoCard } from "./index.js";
import Grid from "@mui/material/Unstable_Grid2";

const VideoDetails = () => {
  const { videoID } = useParams();
  const { videoDetail, isLoading, relatedVideos } = useSelector(
    (state) => state.VideoSlice
  );
  const dispatch = useDispatch();
  const { items } = videoDetail;
  const relatedVideo = relatedVideos.items;

  // FetchVideoDetail
  useEffect(() => {
    dispatch(FetchVideoDetail(`videos?part=snippet&id=${videoID}`));
    dispatch(
      FetchRelatedVideos(
        `search?relatedToVideoId=${videoID}&part=snippet&type=video&maxResults=5`
      )
    );
  }, [dispatch, videoID]);

  // Loader
  if (isLoading) return <Spinner />;

  // FetchVideoDetail
  return (
    <Stack p={2} className="video-details" component="section">
      <Grid container spacing={2}>
        <VideoDisplay items={items} videoID={videoID} />
        <Grid item xs={12} md={4} sx={{ overflowY: "scroll", height: "100vh" }}>
          {relatedVideo?.map((video) => {
            return <VideoCard key={video?.id?.videoId} videoDetail={video} />;
          })}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default VideoDetails;
