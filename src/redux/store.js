import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/waiting_list_form";
import modalReducer from "./reducers/modals";

const store = configureStore({
  reducer: {
    form: formReducer,
    modals: modalReducer,
  },
});

export default store;
