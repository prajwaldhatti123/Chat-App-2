import React from "react";
import Chats from "./Chats";
import Conversation from "./Conversation/Conversation";
import { Box } from "@mui/material";
import Contact from "../../components/settings/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const { sidebar } = useSelector((store) => store.app);
  return (
    <>
      <Chats></Chats>
      <Box
        sx={{
          width: sidebar.open ? "calc(100vw - 55rem)" : "calc(100vw - 30rem)",
        }}
      >
        <Conversation></Conversation>
      </Box>
      {}
      {sidebar.open && <Contact></Contact>}
    </>
  );
};

export default GeneralApp;
