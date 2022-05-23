import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LoggedIn: false,
  UserID: "",
  UserName: "",
  UserImage: "",
  UserEmail: "",
  UserNumber: "",
  token: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    LogIn: (state, action) => {
      if ((state.LoggedIn = false)) {
        state.PatientID = true;
        state.UserName = action.payload.name;
        state.UserImage = action.payload.image;
        state.UserID = action.payload.id;
      }
    },
    LogOut: (state, action) => {
      if ((state.LoggedIn = true)) {
        state.PatientID = false;
        //state= initialState;
      }
    },

    ChangeImage: (state, action) => {
        if ((state.LoggedIn = true)) {
          state.UserImage = action.payload;
        }
      },
  },
});

export const {LogIn,LogOut} = AuthSlice.actions;
export default AuthSlice.reducer;
