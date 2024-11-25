import React, { useState,useEffect } from "react";
import axiosInstance from '../../services/axiosInstance';
import { updateErrorField } from "../../redux/reducers/waiting_list_form";
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  resetState,
  toggleTerms,
  setForm
} from "../../redux/reducers/waiting_list_form";

import { handleValidate } from "./validate";

import {
  FormContainer,
  FormTitle,
  SubTitle,
  Disclaimer,
  Form,
  SubmitButton,
} from "./formStyling";
import ToggleForm from "../reusable/toggleFormButton";
import Privacy from "../reusable/privacy";
import {
  InputWrapper,
  Label,
  Input,
  Error,
  CheckboxWrapper,
  Checkbox,
  CheckboxLabel,
} from "../reusable/inputs";
import SuccessModal from "./successModal";


export default function Forms({ isModal = false, onClose }) {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const formType = useSelector((state) => state.form.form);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isModal) {
      dispatch(setForm("launch")); 
    }
  }, [isModal, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only numbers and a single '+' at the start
      const numericValue = value.replace(/(?!^\+)\D/g, "");
      dispatch(updateField({ field: name, value: numericValue }));
    } else {
      dispatch(updateField({ field: name, value }));
    }
  };

  const toggleTerm = () => {
    dispatch(toggleTerms());
  };

  const formTitle =
    formType === "itramei"
      ? "Be one of the First to Gain Insight & Access"
      : "Exclusive Invitation to Dublin Launch Event 2025";

  const handleSubmit = async (e, event) => {
    e.preventDefault();
    setLoading(true);
    const isValid = handleValidate(dispatch, form, event);
    if (!isValid) {
      setLoading(false);
      return;
    }
    let data = null;
    try {
      if (event === "waitinglist") {
        const nameParts = form.name.trim().split(" ");
        data = {
          fullName: form.name,
          firstName: nameParts[0],
          email: form.email,
          consent: form.terms ? 1 : 0,
          event: event,
        };
      } else {
        let firstname = form.name.trim().split(" ")[0];
        data = {
          firstName: firstname,
          fullName: `${firstname} ${form.surname}`,
          lastName: form.surname,
          email: form.email,
          companyName: form.org,
          position: form.title,
          event: event,
          phoneNumber: form.phone,
          consent: form.terms ? 1 : 0,
        };
      }
      const response= await axiosInstance.post('/itramei/api/save', data);

      if (response.status===201) {
        setSubmitted(true);
        setShowModal(true);
        dispatch(resetState());
        if (isModal && onClose) {
          onClose();
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data.itramei_status_code === "USER_ALREADY_REGISTERED") {
          dispatch(updateErrorField({ field: "email", message: "This email has already been used." }));
        } else {
          // console.error('Error response:', error.response.data);
        }
      } else if (error.request) {
        // console.error('No response received:', error.request);
      } else {
        // console.error('Error setting up request:', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showModal && <SuccessModal onClick={() => setShowModal(false)} />}
      <div>
        <FormContainer isModal={isModal}>
          {!isModal && <ToggleForm formType={formType} isModal={isModal} />}
          <FormTitle isModal={isModal}>{formTitle}</FormTitle>
          {formType === "launch" && (
            <SubTitle isModal={isModal}>
              Limited seats. Secure your spot now!
            </SubTitle>
          )}
          {formType === "itramei" && (
            <Form  onSubmit={(e) => handleSubmit(e, "waitinglist")}>
              <InputWrapper isModal={isModal}>
                <Label htmlFor="name" isModal={isModal}>Full Name</Label>
                <Input
                  isModal={isModal}
                  value={form.name}
                  name="name"
                  id="name"
                  placeholder=""
                  onChange={handleInputChange}
                />
                {form.error.name && <Error isModal={isModal}>{form.error.name}</Error>}
              </InputWrapper>
              <InputWrapper isModal={isModal}>
                <Label htmlFor="email" isModal={isModal}>Email</Label>
                <Input
                  isModal={isModal}
                  value={form.email}
                  name="email"
                  onKeyDown={(e) => e.key === " " && e.preventDefault()}
                  id="email"
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                />
                {form.error.email && <Error isModal={isModal}>{form.error.email}</Error>}
              </InputWrapper>
              <CheckboxWrapper $span={false} isModal={isModal}>
                <Checkbox
                  type="checkbox"
                  checked={form.terms}
                  onChange={toggleTerm}
                />
                <CheckboxLabel isModal={isModal}>
                  I agree to receive communication from Itramei and accept the
                  privacy policy.
                </CheckboxLabel>
                {form.error.terms && <Error $terms isModal={isModal}>{form.error.terms}</Error>}
              </CheckboxWrapper>
              <SubmitButton type="submit" isModal={isModal}>
                {loading ? "Loading..." : "Join the Waitlist"}
              </SubmitButton>
            </Form>
          )}
          {formType === "launch" && (
            <Form  isModal={isModal} $launchList onSubmit={(e) => handleSubmit(e, "launch-waitlist")}>
              <InputWrapper isModal={isModal}>
                <Label htmlFor="name" isModal={isModal}>First Name</Label>
                <Input
                  isModal={isModal}
                  value={form.name.trim().split(" ")[0]}
                  onKeyDown={(e) => e.key === " " && e.preventDefault()}
                  onChange={handleInputChange}
                  name="name"
                  id="name"
                />
                {form.error.name && <Error isModal={isModal}>{form.error.name}</Error>}
              </InputWrapper>
              <InputWrapper isModal={isModal}>
                <Label htmlFor="surname" isModal={isModal}>Last Name</Label>
                <Input
                  isModal={isModal}
                  value={form.surname}
                  onKeyDown={(e) => e.key === " " && e.preventDefault()}
                  onChange={handleInputChange}
                  name="surname"
                  id="surname"
                />
                {form.error.surname && <Error isModal={isModal}>{form.error.surname}</Error>}
              </InputWrapper>
              <InputWrapper isModal={isModal}>
                <Label htmlFor="email" isModal={isModal}>Email</Label>
                <Input
                  isModal={isModal}
                  value={form.email}
                  name="email"
                  onKeyDown={(e) => e.key === " " && e.preventDefault()}
                  id="email"
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                />
                {form.error.email && <Error isModal={isModal}>{form.error.email}</Error>}
              </InputWrapper>
              <InputWrapper isModal={isModal}>
                <Label htmlFor="phone" isModal={isModal}>Phone Number</Label>
                <Input
                  isModal={isModal}
                  value={form.phone}
                  onChange={handleInputChange}
                  name="phone"
                  id="phone"
                  placeholder="+353 8178 7488"
                />
                {form.error.phone && <Error isModal={isModal}>{form.error.phone}</Error>}
              </InputWrapper>
              <InputWrapper $span isModal={isModal}>
                <Label htmlFor="org" isModal={isModal}>Company Name</Label>
                <Input
                  isModal={isModal}
                  value={form.org}
                  onChange={handleInputChange}
                  name="org"
                  id="org"
                  placeholder=""
                />
                {form.error.org && <Error isModal={isModal}>{form.error.org}</Error>}
              </InputWrapper>
              <InputWrapper $span isModal={isModal}>
                <Label htmlFor="title" isModal={isModal}>Title / Position</Label>
                <Input
                  isModal={isModal}
                  value={form.title}
                  onChange={handleInputChange}
                  name="title"
                  id="title"
                  placeholder=""
                />
                {form.error.title && <Error isModal={isModal}>{form.error.title}</Error>}
              </InputWrapper>
              <CheckboxWrapper $span isModal={isModal}>
                <Checkbox
                  type="checkbox"
                  checked={form.terms}
                  onChange={toggleTerm}
                />
                <CheckboxLabel isModal={isModal}>
                  I agree to receive communication from Itramei and accept the
                  privacy policy.
                </CheckboxLabel>
                {form.error.terms && <Error $terms isModal={isModal}>{form.error.terms}</Error>}
              </CheckboxWrapper>
              <SubmitButton $span isModal={isModal}>
                {loading ? "Loading..." : "Join the Waitlist"}
              </SubmitButton>
               <Disclaimer isModal={isModal}>
                  Registering does not guarantee an invitation. A personalized
                  invite will be sent if selected, as seats are limited. Thank you
                  for your understanding.
                </Disclaimer>
            </Form>
          )}
          {<Privacy  isModal={isModal}/>}
        </FormContainer>
      </div>
    </>
  );
}