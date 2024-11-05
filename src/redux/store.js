import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/waiting_list_form";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
