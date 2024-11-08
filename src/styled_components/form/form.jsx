import React, { useState } from "react";
import axiosInstance from '../../services/axiosInstance';
import { updateErrorField } from "../../redux/reducers/waiting_list_form";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  resetState,
  toggleTerms,
} from "../../redux/reducers/waiting_list_form";

//Functions
import { handleValidate } from "./validate";

//Styled Components
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

export default function Forms() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const formType = useSelector((state) => state.form.form);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    console.log("test");
    console.log(form);
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
      : "Register for an exclusive invitation to the Dublin launch event";

      const handleSubmit = async (e, event) => {
        e.preventDefault();        
        // Handle validation of form
        const isValid = handleValidate(dispatch, form,event);
        console.log('isValid');
        console.log(isValid);
        if (!isValid) return;    
        let data = null;
    
        try {
            if (event === "waitinglist") {
                data = {
                  fullName: form.name, 
                  email: form.email,
                  consent: form.terms ? 1 : 0,
                  event:event
                };
            } else {
                data = {
                    firstName: form.name,
                    fullName: `${form.name} ${form.surname}`, 
                    lastName:form.surname,
                    email: form.email,
                    companyName: form.org,
                    position: form.title,
                    event: event,
                    phoneNumber: form.phone,
                    consent: form.terms ? 1 : 0,
                };
            }
            
            const response = await axiosInstance.post('/itramei/api/save', data);
    
            if (response.status === 201) {
                setSubmitted(true);
                setShowModal(true);
                dispatch(resetState());
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data.itramei_status_code === "USER_ALREADY_REGISTERED") {
                  dispatch(updateErrorField({ field: "email", message: "This email has already been used." }));
                } else {
                    console.error('Error response:', error.response.data);
                }
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up request:', error.message);
            }
        }
    };

  return (
    <>
        <div >
        </div>
      {showModal && <SuccessModal onClick={() => setShowModal(false)} />}
      <div>
      <FormContainer>
        <ToggleForm formType={formType} />
        <FormTitle>{formTitle}</FormTitle>
        {formType === "launch" && (
          <SubTitle>
            Limited seats. Register today for an opportunity to get invited!
          </SubTitle>
        )}
        {formType === "itramei" && (
        <Form onSubmit={(e) => handleSubmit(e, "waitinglist")}>
            <InputWrapper>
              <Label htmlFor="name">Full Name</Label>
              <Input
                value={form.name}
                name="name"
                id="name"
                placeholder=""
                onChange={handleInputChange}
              />
              {form.error.name && <Error>{form.error.name}</Error>}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="email">Email</Label>
              <Input
                value={form.email}
                name="email"
                id="email"
                onChange={handleInputChange}
                placeholder="you@company.com"
              />
              {form.error.email && <Error>{form.error.email}</Error>}
            </InputWrapper>
            <CheckboxWrapper>
              <Checkbox
                name="checkbox"
                type="checkbox"
                checked={form.terms}
                onChange={toggleTerm}
              />
              <CheckboxLabel>
                I agree to receive communication from Itramei and accept the
                privacy policy.
              </CheckboxLabel>
              {form.error.terms && <Error $terms>{form.error.terms}</Error>}
            </CheckboxWrapper>
            <SubmitButton type="submit">
              {loading ? "Loading..." : "Join the Waitlist"}
            </SubmitButton>
          </Form>
        )}
        {formType === "launch" && (
          <Form $launchList onSubmit={(e) => handleSubmit(e, "launch-waitlist")}>
            <InputWrapper>
              <Label htmlFor="name">First Name</Label>
              <Input
                value={form.name}
                onChange={handleInputChange}
                name="name"
                id="name"
              />
              {form.error.name && <Error>{form.error.name}</Error>}
            </InputWrapper>
            <InputWrapper>
              <Label>Last Name</Label>
              <Input
                value={form.surname}
                onChange={handleInputChange}
                name="surname"
                id="surname"
              />
              {form.error.surname && <Error>{form.error.surname}</Error>}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="email">Email</Label>
              <Input
                value={form.email}
                onChange={handleInputChange}
                name="email"
                id="email"
                placeholder="you@company.com"
              />
              {form.error.email && <Error>{form.error.email}</Error>}
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                value={form.phone}
                onChange={handleInputChange}
                name="phone"
                id="phone"
                placeholder="+353 8178 7488"
              />
              {form.error.phone && <Error>{form.error.phone}</Error>}
            </InputWrapper>
            <InputWrapper $span>
              <Label htmlFor="org">Company Name</Label>
              <Input
                value={form.org}
                onChange={handleInputChange}
                name="org"
                id="org"
                placeholder=""
              />
              {form.error.org && <Error>{form.error.org}</Error>}
            </InputWrapper>
            <InputWrapper $span>
              <Label htmlFor="title">Title / Position</Label>
              <Input
                value={form.title}
                onChange={handleInputChange}
                name="title"
                id="title"
                placeholder=""
              />
              {form.error.title && <Error>{form.error.title}</Error>}
            </InputWrapper>
            <CheckboxWrapper $span>
              <Checkbox
                type="checkbox"
                checked={form.terms}
                onChange={toggleTerm}
              />
              <CheckboxLabel>
                I agree to receive communication from Itramei and accept the
                privacy policy.
              </CheckboxLabel>
              {form.error.terms && <Error $terms>{form.error.terms}</Error>}
            </CheckboxWrapper>
            <SubmitButton $span>
              {loading ? "Loading..." : "Join the Waitlist"}
            </SubmitButton>
            <Disclaimer>
              Registering does not guarantee an invitation. A personalized
              invite will be sent if selected, as seats are limited. Thank you
              for your understanding.
            </Disclaimer>
          </Form>
        )}
        <Privacy />
      </FormContainer>
      </div>

    </>
  );
}
