import React, { useState } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  resetState,
  toggleTerms,
} from "../../redux/reducers/waiting_list_form";

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

export default function Forms() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  //This will toggle between itramei and launch
  const [formType, setFormType] = useState("itramei");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const toggleTerm = () => {
    dispatch(toggleTerms);
  };

  const formTitle =
    formType === "itramei"
      ? "Be one of the First to Gain Insight & Access"
      : "Register for an exclusive invitation to the Dublin launch event";

  const handleSubmit = () => {};

  return (
    <FormContainer>
      <ToggleForm formType={formType} setFormType={setFormType} />
      <FormTitle>{formTitle}</FormTitle>
      {formType === "launch" && (
        <SubTitle>
          Limited seats. Register today for an opportunity to get invited!{" "}
        </SubTitle>
      )}
      {formType === "itramei" && (
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="name">First Name</Label>
            <Input
              value={form.name}
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              value={form.email}
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </InputWrapper>
          <CheckboxWrapper>
            <Checkbox type="checkbox" value={form.terms} onClick={toggleTerm} />
            <CheckboxLabel>
              I agree to receive communication from Itramei and accept the
              privacy policy.
            </CheckboxLabel>
          </CheckboxWrapper>
          <SubmitButton type="submit">Sign up for Waitlist</SubmitButton>
        </Form>
      )}
      {formType === "launch" && (
        <Form $launchList>
          <InputWrapper>
            <Label htmlFor="name">First Name</Label>
            <Input
              value={form.name}
              onChange={handleInputChange}
              name="name"
              id="name"
              placeholder="Clark"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Last Name</Label>
            <Input
              value={form.surname}
              onChange={handleInputChange}
              name="surname"
              id="surname"
              placeholder="Kent"
            />
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
          </InputWrapper>
          <InputWrapper $span>
            <Label htmlFor="org">Company Name</Label>
            <Input
              value={form.org}
              onChange={handleInputChange}
              name="org"
              id="org"
              placeholder="Enter your company name"
            />
          </InputWrapper>
          <InputWrapper $span>
            <Label htmlFor="title">Title / Position</Label>
            <Input
              value={form.title}
              onChange={handleInputChange}
              name="title"
              id="title"
              placeholder="Manager at Itramei"
            />
          </InputWrapper>
          <CheckboxWrapper $span>
            <Checkbox type="checkbox" value={form.terms} onClick={toggleTerm} />
            <CheckboxLabel>
              I agree to receive communication from Itramei and accept the
              privacy policy.
            </CheckboxLabel>
          </CheckboxWrapper>
          <SubmitButton $span>Join the Waitlist</SubmitButton>
          <Disclaimer>
            Registering does not guarantee an invitation. A personalized invite
            will be sent if selected, as seats are limited. Thank you for your
            understanding.
          </Disclaimer>
        </Form>
      )}
      <Privacy />
    </FormContainer>
  );
}
