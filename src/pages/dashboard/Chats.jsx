import { useTheme } from "@emotion/react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Archive, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { StyledBadge } from "../../styles/customMUIComponents";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../data";
// import {
//   Search,
//   SearchIconWrapper,
//   StyledInputBase,
// } from "../../styles/customMUIComponents";

// Actual Chats which need to be rendered
const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "8vh",
        backgroundColor:
          theme.palette.mode === "light"
            ? "white"
            : theme.palette.background.default,
        borderRadius: "1",
        display: "flex",
      }}
    >
      <Stack
        sx={{ width: "100%" }}
        direction={"row"}
        alignItems={"center"}
        padding={1}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          {online ? (
            <StyledBadge
              // sx={{ width: "10%" }}
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Rem Sharp" src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar alt="Rem Sharp" src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={1} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            <Badge badgeContent={unread} color="secondary" />
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "25rem",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#f8faff"
            : theme.palette.background.paper,
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 0px 2px rgba(0,0,0,0.25)"
            : "0px 0px 2px #fafafa",
      }}
    >
      <Stack p={3} spacing={3} sx={{ height: "100vh" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed></CircleDashed>
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          {/* <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709ce6"></MagnifyingGlass>
              <StyledInputBase
                aria-label="search for chats"
                placeholder="Search..."
              >
                <TextField variant="outlined"></TextField>
              </StyledInputBase>
            </SearchIconWrapper>
          </Search> */}
          <TextField
            variant="outlined"
            sx={{
              color: theme.palette.background.paper,
              backgroundColor: theme.palette.background.paper,
            }}
            aria-label="search for contacts"
            placeholder="Search...."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MagnifyingGlass></MagnifyingGlass>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Stack>
        <Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Archive size={30}></Archive>
            <Button variant="text">Archived</Button>
          </Stack>
          <Divider sx={{ width: "90%" }}></Divider>
        </Stack>
        <Stack
          spacing={2}
          sx={{
            flexGrow: 1,
            overflow: "auto",
            // overflowY: "scroll",
            height: "100%",
          }}
        >
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el) => (
              <ChatElement {...el}></ChatElement>
            ))}
          </Stack>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el) => (
              <ChatElement {...el}></ChatElement>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
