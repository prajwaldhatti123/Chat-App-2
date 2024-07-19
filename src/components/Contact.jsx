import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { toggleSideBar, updateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { IOSSwitch } from "./AntSwitch";

const Contact = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "25rem",
        boxShadow:
          theme.palette.mode === "light"
            ? "0px 0px 2px rgba(0,0,0,0.25)"
            : "0px 0px 2px #fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow:
              theme.palette.mode === "light"
                ? "0px 0px 2px rgba(0,0,0,0.25)"
                : "0px 0px 2px #fafafa",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2" fontSize={16}>
              Contact Info
            </Typography>
            <IconButton
              onClick={() => {
                dispatch(toggleSideBar());
              }}
            >
              <X></X>
            </IconButton>
          </Stack>
        </Box>
        <Box
          sx={{
            height: "100%",

            position: "relative",
            overflowY: "auto",
            flexGrow: 1,
            "&::-webkit-scrollbar": {
              width: "6px",
              transition: "opacity 0.5s ease-in-out",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor:
                theme.palette.mode === "light" ? "#888" : "#a1a1a1", // Color of the thumb
              borderRadius: "4px", // Border radius of the thumb
            },
          }}
        >
          <Stack
            p={3}
            spacing={3}
            // overflow={"auto"}
          >
            <Stack alignItems={"center"} spacing={4}>
              <Avatar
                src={faker.image.avatar()}
                alt={faker.name.firstName}
                sx={{ height: 64, width: 64 }}
              ></Avatar>
              <Stack spacing={0.5} alignItems={"center"}>
                <Typography variant="article" fontWeight={600}>
                  {faker.name.firstName()}
                </Typography>
                <Typography variant="article" fontWeight={600}>
                  +91 72389-92909
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Stack spacing={1} alignItems={"center"}>
                <IconButton>
                  <Phone></Phone>
                </IconButton>
                <Typography variant="overline">Voice</Typography>
              </Stack>
              <Stack spacing={1} alignItems={"center"}>
                <IconButton>
                  <VideoCamera></VideoCamera>
                </IconButton>
                <Typography variant="overline">Video</Typography>
              </Stack>
            </Stack>
            <Divider></Divider>
            <Stack spacing={1}>
              <Typography variant="article">About</Typography>
              <Typography variant="body2">
                Never Give Up !.................
              </Typography>
            </Stack>
            <Divider></Divider>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2">Media , Links & Docs</Typography>
              <Button
                onClick={() => {
                  dispatch(updateSidebarType("SHARED"));
                }}
                endIcon={<CaretRight></CaretRight>}
              >
                225
              </Button>
            </Stack>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              {[1, 2, 3].map((el) => (
                <Box key={el}>
                  <img src={faker.image.food()} alt={faker.name.firstName()} />
                </Box>
              ))}
            </Stack>

            {/* starred messages */}
            <Divider></Divider>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Star size={21}></Star>
                <Typography variant="subtitle2">Starred Messages</Typography>
              </Stack>
              <Stack>
                <IconButton>
                  <CaretRight
                    size={20}
                    onClick={() => {
                      dispatch(updateSidebarType("STARRED"));
                    }}
                  ></CaretRight>
                </IconButton>
              </Stack>
            </Stack>

            {/* Mute notifications */}
            <Divider></Divider>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Bell size={21}></Bell>
                <Typography variant="subtitle2">Mute Notifications</Typography>
              </Stack>
              <Stack>
                <IOSSwitch></IOSSwitch>
              </Stack>
            </Stack>

            {/* Groups in common */}
            <Divider></Divider>
            <Typography>1 group in Common</Typography>
            <Stack direction={"row"} spacing={4}>
              <Avatar
                src={faker.image.avatar()}
                alt={faker.name.firstName()}
              ></Avatar>
              <Stack spacing={0.5}>
                <Typography variant="subtitle2">ECE Freshers</Typography>
                <Typography variant="subtitle2">
                  Abhishek , vivek , you
                </Typography>
              </Stack>
            </Stack>

            {/* block and delete person  */}
            <Divider></Divider>
            <Stack spacing={3}>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Prohibit color="red" size={21}></Prohibit>
                <Typography color={"red"} variant="heading6">
                  Block Person
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={4} alignItems={"center"}>
                <Trash color="red" size={21}></Trash>
                <Typography color={"red"} variant="heading6">
                  Delete Person
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
