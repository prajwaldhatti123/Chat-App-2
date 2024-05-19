import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import {
  Box,
  Divider,
  Stack,
  Typography,
  Link,
  MenuItem,
  Menu,
  IconButton,
} from "@mui/material";
import {
  DotsThreeVertical,
  Download,
  DownloadSimple,
  Image,
} from "phosphor-react";
import React from "react";
import { Message_options } from "../../../data";

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DotsThreeVertical></DotsThreeVertical>
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {Message_options.map((el) => {
          return <MenuItem onClick={handleClose}>{el.title}</MenuItem>;
        })}
      </Menu>
    </Box>
  );
};

// Timeline component
const Timeline = ({ obj }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      spacing={2}
    >
      <Divider width="46%"></Divider>
      <Typography variant="caption" color={theme.palette.text}>
        {obj.text}
      </Typography>
      <Divider width="46%"></Divider>
    </Stack>
  );
};

// simple text msg
const MsgText = ({ obj }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={obj.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: obj.incoming
            ? theme.palette.mode === "light"
              ? "#deedf8"
              : "#6c757d"
            : "#06bee1",
          borderRadius: "1rem",
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: obj.incoming ? theme.palette.text : "#fff" }}
        >
          {obj.message}{" "}
        </Typography>
      </Box>
      <MessageOptions></MessageOptions>
    </Stack>
  );
};

// media message
const MediaMsg = ({ obj }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={obj.incoming ? "start" : "end"}>
      <Box
        sx={{
          backgroundColor: obj.incoming
            ? theme.palette.mode === "light"
              ? "#deedf8"
              : "#6c757d"
            : "#06bee1",
          borderRadius: "0.5rem",
          width: "max-content",
        }}
      >
        <Stack>
          <Typography
            variant="body2"
            pl={1}
            pt={1}
            sx={{ color: obj.incoming ? "#38b000" : "#fff" }}
          >
            ~ {faker.name.fullName()}{" "}
          </Typography>
          <img
            src={obj.img}
            alt={obj.message}
            style={{
              objectFit: "cover",
              maxHeight: "210px",
              borderRadius: "0.5rem",
            }}
          ></img>
          <Typography
            variant="body2"
            pl={1}
            sx={{ color: obj.incoming ? theme.palette.text : "#fff" }}
          >
            {obj.message}
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"end"}>
          {" "}
          <Typography
            sx={{
              color: obj.incoming ? theme.palette.text : "#fff",
              fontSize: "0.7rem",
            }}
          >
            1:08 pm
          </Typography>
        </Stack>
      </Box>
      <MessageOptions></MessageOptions>
    </Stack>
  );
};

// Reply to the message
const ReplyMsg = ({ obj }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={obj.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: obj.incoming
            ? theme.palette.mode === "light"
              ? "#deedf8"
              : "#6c757d"
            : "#06bee1",
          borderRadius: "0.5rem",
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            direction={"column"}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: "1rem",
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {obj.message}
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            color={obj.incoming ? theme.palette.text : "#ffffff"}
          >
            {obj.reply}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions></MessageOptions>
    </Stack>
  );
};

// Link type message

const LinkMessage = ({ obj }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={obj.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: obj.incoming
            ? theme.palette.mode === "light"
              ? "#deedf8"
              : "#6c757d"
            : "#06bee1",
          borderRadius: "0.5rem",
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            direction={"column"}
            alignItems={"start"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: "1rem",
            }}
          >
            <img
              src={obj.preview}
              alt={obj.message}
              style={{ maxHeight: "210px", borderRadius: "10px" }}
            ></img>
            <Stack spacing={2}>
              <Typography
                variant="subtitle2"
                color={obj.incoming ? theme.palette.text : "#ffffff"}
              >
                Head of the Link
              </Typography>
              <Typography
                variant="subtitle2"
                color={theme.palette.primary.main}
                component={Link}
                // to="https://www.youtube.com"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener"
              >
                {/* <Link o="https://www.youtube.com">www.youtube.com</Link> */}
                www.youtube.com
                {/* <Link to={"https://www.youtube.com"}>www.youtube.com </Link> */}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            variant="subtitle2"
            color={obj.incoming ? theme.palette.text : "#ffffff"}
          >
            {obj.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions></MessageOptions>
    </Stack>
  );
};

// Document type of message
const DocMessage = ({ obj }) => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} justifyContent={obj.incoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: obj.incoming
            ? theme.palette.mode === "light"
              ? "#deedf8"
              : "#6c757d"
            : "#06bee1",
          borderRadius: "0.5rem",
          width: "max-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={1}
            spacing={3}
            direction={"row"}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: "1rem",
            }}
          >
            <Image size={48}></Image>
            <Typography
              variant="caption"
              color={obj.incoming ? theme.palette.text : "#ffffff"}
              fontSize={16}
            >
              Abstract.png
            </Typography>
            <DownloadSimple size={24}></DownloadSimple>
          </Stack>
          <Typography
            variant="body2"
            color={obj.incoming ? theme.palette.text : "#ffffff"}
          >
            {obj.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions></MessageOptions>
    </Stack>
  );
};

export { Timeline, MsgText, MediaMsg, ReplyMsg, LinkMessage, DocMessage };
