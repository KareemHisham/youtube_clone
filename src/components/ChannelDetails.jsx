import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChannelFetching, ChannelVideoFetching } from "../store/channelSlice";
import { useSelector, useDispatch } from "react-redux";
import { Stack, Box } from "@mui/material";
import { Spinner, ChannelInfo, ChannelVideos } from "./index";

const ChannelDetails = () => {
  const { channelID } = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ChannelSlice);
  const { items } = useSelector((state) => state.ChannelSlice.channelInfo);
  const ChannelVideosFetch = useSelector(
    (state) => state.ChannelSlice.channelVideos.items
  );

  // useEffect
  useEffect(() => {
    dispatch(ChannelFetching(`channels?part=snippet&id=${channelID}`));
    dispatch(
      ChannelVideoFetching(
        `search?channelId=${channelID}&part=snippet%2Cid&order=date&maxResults=50`
      )
    );
  }, [dispatch, channelID]);

  // Loader
  if (isLoading) return <Spinner />;

  return (
    <Stack component="section" className="channel-page" p={2}>
      <Box className="channel-wrapper">
        <ChannelInfo items={items} />
        <ChannelVideos channelVideosFetch={ChannelVideosFetch} />
      </Box>
    </Stack>
  );
};

export default ChannelDetails;
