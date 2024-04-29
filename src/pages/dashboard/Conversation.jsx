import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { StyledBadge, StyledInput } from "../../styles/customMUIComponents";
import { faker } from "@faker-js/faker";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import { useTheme } from "@emotion/react";
const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat message header */}
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
          <Stack direction={"row"} spacing={2}>
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

      {/* chat messages/conversations */}
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
          backgroundImage:
            'url("https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png")',
        }}
      ></Box>

      {/* chat Footer */}
      <Box
        p={2}
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
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <StyledInput
            fullWidth
            variant="filled"
            placeholder="Write a message..."
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton
                    aria-label="link any attachments"
                    sx={{ mr: "1rem" }}
                  >
                    <LinkSimple></LinkSimple>
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton
                    aria-label="emoji for reaction"
                    sx={{ mr: "1rem" }}
                  >
                    <Smiley></Smiley>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></StyledInput>
          <Box
            sx={{
              height: "3rem",
              width: "3rem",
              backgroundColor: theme.palette.primary.main,
              borderRadius: "1rem",
            }}
          >
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ height: "100%", width: "100%" }}
            >
              <IconButton sx={{ color: "white" }}>
                <PaperPlaneTilt></PaperPlaneTilt>
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Conversation;
