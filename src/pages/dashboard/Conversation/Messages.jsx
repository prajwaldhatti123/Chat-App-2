import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../../data";
import {
  DocMessage,
  LinkMessage,
  MediaMsg,
  MsgText,
  ReplyMsg,
  Timeline,
} from "./MessageTypes";

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
                  return <DocMessage obj={el}></DocMessage>;
                case "link":
                  return <LinkMessage obj={el}></LinkMessage>;
                case "reply":
                  return <ReplyMsg obj={el}></ReplyMsg>;
                default:
                  return <MsgText obj={el}></MsgText>;
              }
            default:
              break;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Messages;
