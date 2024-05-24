import { useTheme } from "@emotion/react";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { X } from "phosphor-react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../redux/slices/app";
import { faker } from "@faker-js/faker";

const Contact = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box sx={{ width: "25rem" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
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
            <IconButton onClick={() => dispatch(toggleSideBar())}>
              <X></X>
            </IconButton>
          </Stack>
        </Box>
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Stack alignItems={"center"} direction={"row"} spacing={4}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName}
              sx={{ height: 64, width: 64 }}
            ></Avatar>
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.firstName()}
              </Typography>
              <Typography variant="article" fontWeight={600}>
                +91 72389-92909
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
