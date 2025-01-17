"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import TextInput from "../TextInput";
import CountryCodePhoneInput from "../CountryCodePhoneInput";
import ScholarshipAmountCounter from "./ScholarshipAmountCounter";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});

const FormBox = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    toast.success("Validation Successfully");
    setSubmitting(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg font-bold text-center">
                Join the{" "}
                <span className="text-[#1DC468]">#alteryouthrevolution</span>
              </h1>

              <TextInput name="name" type="text" placeholder="Your Name" />
              <TextInput name="email" type="email" placeholder="Your Email" />

              <CountryCodePhoneInput
                name="phone"
                placeholder="Your phone number"
              />

              <ScholarshipAmountCounter />
              

              <button
                type="submit"
                className="w-full bg-[#1DC468] text-white py-2 rounded-lg mt-4"
              >
                Start Now
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormBox;
