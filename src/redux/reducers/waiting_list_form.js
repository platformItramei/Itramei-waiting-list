import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Shared state
  name: "",
  email: "",

  //Launch Event Waitinglist
  surname: "",
  countrycode: "",
  phone: "",
  org: "",
  title: "",
  terms: false,
};

const formSlice = createSlice({
  name: "waiting_form",
  initialState,
  reducers: {
    resetState: () => initialState,
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    toggleTerms: (state) => !state.terms,
  },
});

export const { resetState, updateField, toggleTerms } = formSlice.actions;
export default formSlice.reducer;
