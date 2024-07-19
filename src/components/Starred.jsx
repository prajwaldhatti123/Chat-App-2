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
import { toggleSideBar } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { IOSSwitch } from "./AntSwitch";

const Starred = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "25rem",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Stack sx={{ height: "100%" }}></Stack>
    </Box>
  );
};

export default Starred;
