import { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { StyledInput } from "../../../styles/customMUIComponents";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Person,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import { useTheme } from "@emotion/react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const ConversationFooter = () => {
  const theme = useTheme();

  // emoji picker functioning
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const handleEmojiClick = () => {
    setOpenEmojiPicker((prev) => !prev);
  };

  // select attachment functioning
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
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
        {/* Emoji picker */}
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              display: openEmojiPicker ? "inline" : "none",
              zIndex: 10,
              bottom: "5rem",
              right: "5rem",
              position: "fixed",
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            ></Picker>
          </Box>

          {/* this is for input textfield */}
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
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <LinkSimple></LinkSimple>
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
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem sx={{ mb: "0.3rem" }} onClick={handleClose}>
                      <Image size={24}></Image>
                      <Typography variant="subtitle1" ml={2}>
                        Photos & Videos
                      </Typography>
                    </MenuItem>
                    <MenuItem sx={{ mb: "0.3rem" }} onClick={handleClose}>
                      <Sticker size={24}></Sticker>
                      <Typography variant="subtitle1" ml={2}>
                        Stickers
                      </Typography>
                    </MenuItem>
                    <MenuItem sx={{ mb: "0.3rem" }} onClick={handleClose}>
                      <Camera size={24}></Camera>
                      <Typography variant="subtitle1" ml={2}>
                        Camera
                      </Typography>
                    </MenuItem>
                    <MenuItem sx={{ mb: "0.3rem" }} onClick={handleClose}>
                      <User size={24}></User>
                      <Typography variant="subtitle1" ml={2}>
                        Contact
                      </Typography>
                    </MenuItem>
                    <MenuItem sx={{ mb: "0.3rem" }} onClick={handleClose}>
                      <File size={24}></File>
                      <Typography variant="subtitle1" ml={2}>
                        Documents
                      </Typography>
                    </MenuItem>
                  </Menu>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton sx={{ mr: "1rem" }} onClick={handleEmojiClick}>
                    <Smiley></Smiley>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></StyledInput>
        </Stack>
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
  );
};

export default ConversationFooter;
