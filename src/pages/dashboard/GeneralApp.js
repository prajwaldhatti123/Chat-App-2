import React from "react";
import Chats from "./Chats";
import Conversation from "./Conversation/Conversation";
import { Box } from "@mui/material";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import Starred from "../../components/Starred";
import Shared from "../../components/Shared";

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
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact></Contact>;
            case "SHARED":
              return <Shared></Shared>;
            case "STARRED":
              return <Starred></Starred>;
            default:
              break;
          }
        })()}
    </>
  );
};

export default GeneralApp;
