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

  //Error
  error: {
    name: "",
    surname: "",
    email: "",
    phone: "",
    org: "",
    title: "",
    terms: "",
  },
};

const formSlice = createSlice({
  name: "waiting_form",
  initialState,
  reducers: {
    resetState: () => initialState,
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
    updateErrorField: (state, action) => {
      state.error[action.payload.field] = action.payload.message;
    },
    toggleTerms: (state) => {
      state.terms = !state.terms;
    },
    resetErrorState: (state) => {
      // Clear all error messages
      for (let key in state.error) {
        state.error[key] = "";
      }
    },
  },
});

export const {
  resetState,
  updateField,
  updateErrorField,
  toggleTerms,
  resetErrorState,
} = formSlice.actions;
export default formSlice.reducer;
