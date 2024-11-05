import { updateErrorField } from "../../redux/reducers/waiting_list_form";

export const handleValidate = (dispatch, form) => {
  let valid = true;

  const emptyError = "This can't be empty!";
  const termsError = "You must agree to the terms and conditions!";
  const emailError = "Must be a valid email!";

  //ResetState on Click

  //Name
  if (!form.name) {
    dispatch(updateErrorField({ field: "name", message: emptyError }));
    valid = false;
  } else dispatch(updateErrorField({ field: "name", message: "" }));

  //Surname
  if (!form.surname) {
    dispatch(updateErrorField({ field: "surname", message: emptyError }));
    valid = false;
  } else dispatch(updateErrorField({ field: "surname", message: "" }));

  //Email
  if (!form.email) {
    dispatch(updateErrorField({ field: "email", message: emptyError }));
    valid = false;
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
  ) {
    dispatch(updateErrorField({ field: "email", message: emailError }));
  } else dispatch(updateErrorField({ field: "email", message: "" }));

  //Phone
  if (!form.phone) {
    dispatch(updateErrorField({ field: "phone", message: emptyError }));
    valid = false;
  } else dispatch(updateErrorField({ field: "phone", message: "" }));

  //Company Name
  if (!form.org) {
    dispatch(updateErrorField({ field: "org", message: emptyError }));
    valid = false;
  } else dispatch(updateErrorField({ field: "org", message: "" }));

  //Title
  if (!form.title) {
    dispatch(updateErrorField({ field: "title", message: emptyError }));
    valid = false;
  } else dispatch(updateErrorField({ field: "title", message: "" }));

  //Terms
  if (!form.terms) {
    dispatch(updateErrorField({ field: "terms", message: termsError }));
    valid = false;
  } else dispatch(updateErrorField({ field: "terms", message: "" }));

  return valid;
};
