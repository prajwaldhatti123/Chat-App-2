import React from "react";
import { Box, Stack } from "@mui/material";
import ConversationFooter from "./ConversationFooter";
import ConversationHeader from "./ConversationHeader";
import Messages from "./Messages";
const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat message header */}
      <ConversationHeader></ConversationHeader>
      {/* chat messages/conversations */}
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
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
