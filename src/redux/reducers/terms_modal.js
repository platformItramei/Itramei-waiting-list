import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const TermsSlice = createSlice({
  name: "terms",
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleVisibility } = TermsSlice.actions;

export default TermsSlice.reducer;
