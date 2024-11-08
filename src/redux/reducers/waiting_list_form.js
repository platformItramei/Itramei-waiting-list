import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Form
  form: "itramei",

  //Shared state
  name: "",
  email: "",

  //Launch Event Waitinglist
  surname: "",
  phone: "+353",
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
    setForm: (state, action) => {
      state.form = action.payload;
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
  setForm,
  updateErrorField,
  toggleTerms,
  resetErrorState,
} = formSlice.actions;
export default formSlice.reducer;
