import { createSlice } from "@reduxjs/toolkit";

const visitedSlice = createSlice({
  name: "visited",
  initialState: { user: null, token: null, userData: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.userData = user;
    },
    updateUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      state.userData = null;
    },
  },
});

export const {
  setCredentials,
  logOut: any,
  setUserData,
  updateUser,
} = visitedSlice.actions;

export default visitedSlice.reducer;

export const selectCurrentUser = (state: any) => state.visited.user;
export const selectCurrentToken = (state: any) => state.visited.token;
export const selectCurrentUserData = (state: any) => state.visited.user;
