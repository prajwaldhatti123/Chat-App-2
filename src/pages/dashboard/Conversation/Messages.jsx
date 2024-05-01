import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../../data";
import { Media, MediaMsg, MsgText, Timeline } from "./MessageTypes";

const Messages = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline obj={el}></Timeline>;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg obj={el}></MediaMsg>;
                case "doc":
                  // doc msg
                  break;
                case "link":
                  // link msg
                  break;
                case "reply":
                  // reply msg
                  break;
                default:
                  return <MsgText obj={el}></MsgText>;
              }
              break;
            default:
              break;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Messages;
