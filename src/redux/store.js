import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/waiting_list_form";
import termsReducer from "./reducers/terms_modal";

const store = configureStore({
  reducer: {
    form: formReducer,
    terms: termsReducer,
  },
});

export default store;
