import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    PresciptionID: "",
    DrugID:"",
  };
  
  const TemplateSlice = createSlice({
    name: "template",
    initialState,
  
    reducers: {
      AddPrescription: (state, action) => {
        state.PresciptionID = action.payload;
      },

      AddDrug: (state, action) => {
        state.DrugID = action.payload;
      },
    },
  });


  export const {AddDrug,AddPrescription} = TemplateSlice.actions;
  export default TemplateSlice.reducer;