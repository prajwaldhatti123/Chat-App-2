import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";

let initialState = {
  sidebar: {
    open: false,
    type: "", // This can be changed to starred , shared like -> media , links , docs
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

export default slice.reducer;

export const toggleSideBar = () => {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
};

export const updateSidebarType = (type) => {
  return async () => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
};
