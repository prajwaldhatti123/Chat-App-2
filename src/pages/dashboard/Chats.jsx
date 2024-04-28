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
// import {
//   Search,
//   SearchIconWrapper,
//   StyledInputBase,
// } from "../../styles/customMUIComponents";

// Actual Chats which need to be rendered
const ChatElement = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // height: "7vh",
        backgroundColor: "white",
        borderRadius: "1",
        display: "flex",
        // alignItems: "center",
      }}
    >
      <Stack
        sx={{ width: "100%" }}
        direction={"row"}
        alignItems={"center"}
        padding={1}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          <StyledBadge
            // sx={{ width: "10%" }}
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Rem Sharp" src={faker.image.avatar()} />
          </StyledBadge>
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">Prajwal Dhatti</Typography>
            <Typography variant="caption">How r u ?</Typography>
          </Stack>
        </Stack>
        <Stack spacing={1} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            9:52
          </Typography>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            <Badge badgeContent={100} color="secondary" />
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
        height: "100vh",
        width: "25rem",
        backgroundColor: "#f8faff",
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 0px 2px rgba(0,0,0,0.25)"
            : "0px 0px 2px #fafafa",
      }}
    >
      <Stack p={3} spacing={3}>
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
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Archive size={30}></Archive>
            <Button variant="text">Archived</Button>
          </Stack>
          <Divider sx={{ width: "90%" }}></Divider>
        </Stack>
        <Stack>
          <ChatElement />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
