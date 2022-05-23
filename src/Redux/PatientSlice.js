import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PatientID: "",
};

const PatientSlice = createSlice({
  name: "patient",
  initialState,

  reducers: {
    AddPatientID: (state, action) => {
      state.PatientID = action.payload;
      console.log("id added in redux")
    },
  },
});

export const {AddPatientID} = PatientSlice.actions;
export default PatientSlice.reducer;