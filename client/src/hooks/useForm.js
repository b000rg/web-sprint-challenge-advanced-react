// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (formFields, submitCallback) => {
  const defaultFormData = formFields.reduce((acc, field) => {
    acc[field] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState({ ...defaultFormData });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitCallback(formData);
    setFormData({ ...defaultFormData });
  };

  return [formData, handleChange, handleSubmit];
};

export default useForm;
