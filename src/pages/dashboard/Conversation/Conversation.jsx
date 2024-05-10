import React from "react";
import { Box, Stack } from "@mui/material";
import ConversationFooter from "./ConversationFooter";
import ConversationHeader from "./ConversationHeader";
import Messages from "./Messages";
import { useTheme } from "@emotion/react";
const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat message header */}
      <ConversationHeader></ConversationHeader>
      {/* chat messages/conversations */}
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
          overflowY: "auto", // Enable vertical scrolling
          "&::-webkit-scrollbar": {
            width: "6px",
            transition: "opacity 0.5s ease-in-out",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor:
              theme.palette.mode === "light" ? "#888" : "#a1a1a1", // Color of the thumb
            borderRadius: "4px", // Border radius of the thumb
          },
          backgroundImage:
            'url("https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png")',
        }}
        overflow={"auto"}
      >
        <Messages></Messages>
        {/* <h1>hello world</h1> */}
      </Box>
      {/* chat message footer */}
      <ConversationFooter></ConversationFooter>
    </Stack>
  );
};

export default Conversation;
