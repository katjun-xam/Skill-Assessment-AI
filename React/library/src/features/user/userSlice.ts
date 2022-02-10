import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { IIdentity } from "../../models";
import { fetchUser } from "./userAPI";

export interface UserState {
  identity: IIdentity;
  isLogged: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  identity: {
    displayName: "",
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "1899-12-31T14:00:00.000Z",
  },
  isLogged: false,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      return {
        ...state,
        identity: {
          displayName: "Mr Baskin Robbins",
          title: "Mr",
          firstName: "Baskin",
          lastName: "Robbins",
          dateOfBirth: "2021-09-13T00:00:00.000Z",
        },
        isLogged: true,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLogged = true;
        state.identity = action.payload;
      });
  },
});

// Actions
export const getUserAsync = createAsyncThunk(
  "user/fetchUser",
  async (pName: string) => {
    const response = await fetchUser(pName);
    return response.data;
  }
);
export const { getUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
