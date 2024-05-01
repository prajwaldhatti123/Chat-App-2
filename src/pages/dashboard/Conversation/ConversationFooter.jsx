import React from "react";
import { Box, IconButton, InputAdornment, Stack } from "@mui/material";
import { StyledInput } from "../../../styles/customMUIComponents";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import { useTheme } from "@emotion/react";

const ConversationFooter = () => {
  const theme = useTheme();
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
                <IconButton sx={{ mr: "1rem" }}>
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
  );
};

export default ConversationFooter;
