import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  terms: false,
  privacy: false,
};

const TermsSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleTerms: (state) => {
      state.terms = !state.terms;
    },
    togglePrivacy: (state) => {
      state.privacy = !state.privacy;
    },
  },
});

export const { toggleTerms, togglePrivacy } = TermsSlice.actions;

export default TermsSlice.reducer;
