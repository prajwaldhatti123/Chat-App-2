import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { StyledBadge } from "../../../styles/customMUIComponents";
import { faker } from "@faker-js/faker";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { useTheme } from "@emotion/react";
import { toggleSideBar } from "../../../redux/slices/app";
import { useDispatch } from "react-redux";
const ConversationHeader = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#f8faff"
            : theme.palette.background.default,
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 0px 2px rgba(0,0,0,0.25)"
            : "0px 0px 2px #fafafa",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
        p={2}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack
          onClick={() => {
            dispatch(toggleSideBar());
          }}
          direction={"row"}
          spacing={2}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt={faker} src={faker.image.avatar()}></Avatar>
          </StyledBadge>
          <Stack spacing={0.2}>
            <Typography>{faker.name.fullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          <IconButton>
            <VideoCamera></VideoCamera>
          </IconButton>
          <IconButton>
            <Phone></Phone>
          </IconButton>
          <IconButton>
            <MagnifyingGlass></MagnifyingGlass>
          </IconButton>
          <Divider orientation="vertical" flexItem></Divider>
          <IconButton>
            <CaretDown></CaretDown>
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ConversationHeader;
