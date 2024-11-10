import { updateErrorField } from "../../redux/reducers/waiting_list_form";
import bannedWordsData from "./bannedWords.json";

export const handleValidate = (dispatch, form, event) => {
  let valid = true;
  const bannedWords = bannedWordsData.bannedWords;
  const emptyError = "This can't be empty!";
  const termsError = "You must agree to the terms and conditions!";
  const emailError = "Must be a valid email!";
  const abusiveError = "Please refrain from using abusive words.";
  const lengthError = "This must be at least 3 letters long";

  // Helper function to check for banned words
  const containsBannedWords = (input) => {
    const lowercasedInput = input.toLowerCase();
    return bannedWords.some((word) => lowercasedInput.includes(word));
  };

  // Reset State on Click

  // Name
  if (!form.name) {
    dispatch(updateErrorField({ field: "name", message: emptyError }));
    valid = false;
  } else if (containsBannedWords(form.name)) {
    dispatch(updateErrorField({ field: "name", message: abusiveError }));
    valid = false;
  } else if (form.name.length < 3) {
    dispatch(updateErrorField({ field: "name", message: lengthError }));
  } else {
    dispatch(updateErrorField({ field: "name", message: "" }));
  }

    // Email
    if (!form.email) {
      dispatch(updateErrorField({ field: "email", message: emptyError }));
      valid = false;
  
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
    ) {
      dispatch(updateErrorField({ field: "email", message: emailError }));
      valid = false;
  
    } else {
      
      dispatch(updateErrorField({ field: "email", message: "" }));
    }

  // Surname
  if(event=="launch-waitlist")
  {
  if (!form.surname) {
    dispatch(updateErrorField({ field: "surname", message: emptyError }));
    valid = false;
  } else if (containsBannedWords(form.surname)) {
    dispatch(updateErrorField({ field: "surname", message: abusiveError }));
    valid = false;

  } else if (form.surname.length < 3 ) {
    dispatch(updateErrorField({ field: "surname", message: lengthError }));
  } else {
    dispatch(updateErrorField({ field: "surname", message: "" }));
  }

  // Phone
  if (!form.phone) {
    dispatch(updateErrorField({ field: "phone", message: emptyError }));
    valid = false;
  } else if (!/^\+[0-9]{7,15}$/.test(form.phone)) {
    dispatch(
      updateErrorField({
        field: "phone",
        message: "Invalid number format. Dont forget your country code",
      })
    );
    valid = false;
  } else {
    dispatch(updateErrorField({ field: "phone", message: "" }));
  }

  // Company Name
  if (!form.org) {
    dispatch(updateErrorField({ field: "org", message: emptyError }));
    valid = false;
  } else if (containsBannedWords(form.org)) {
    dispatch(updateErrorField({ field: "org", message: abusiveError }));
    valid = false;
  } else if (form.org.length < 3) {
    dispatch(updateErrorField({ field: "org", message: lengthError }));
  } else {
    dispatch(updateErrorField({ field: "org", message: "" }));
  }

  // Title
  if (!form.title) {
    dispatch(updateErrorField({ field: "title", message: emptyError }));
    valid = false;
  } else if (containsBannedWords(form.title)) {
    dispatch(updateErrorField({ field: "title", message: abusiveError }));
    valid = false;
  } else if (form.title.length < 3) {
    dispatch(updateErrorField({ field: "title", message: lengthError }));
  } else {
    dispatch(updateErrorField({ field: "title", message: "" }));
  }
}

  // Terms
  if (!form.terms) {
    dispatch(updateErrorField({ field: "terms", message: termsError }));
    valid = false;
  } else {
    dispatch(updateErrorField({ field: "terms", message: "" }));
  }

  return valid;
};
