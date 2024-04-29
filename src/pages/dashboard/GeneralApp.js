import React from "react";
import Chats from "./Chats";
import Conversation from "./Conversation";
import { Box } from "@mui/material";

const GeneralApp = () => {
  return (
    <>
      <Chats></Chats>
      <Box sx={{ width: "calc(100vw - 31rem)" }}>
        <Conversation></Conversation>
      </Box>
    </>
  );
};

export default GeneralApp;
