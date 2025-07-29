import React, { useState } from "react";

const PricingBook = () => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    plan: "",
    billing: "",
    date: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: send data to API
  };

  return (
   <></>
  );
};

export default PricingBook;
