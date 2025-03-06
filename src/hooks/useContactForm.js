import { useState, useEffect } from "react";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Håndter input-endringer
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Valideringsfunksjon
  const validate = () => {
    let errors = {};

    if (formData.fullName.trim().length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
    }

    if (formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (formData.body.trim().length < 3) {
      errors.body = "Message must be at least 3 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (isSubmitting) {
      const validationErrors = validate();
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        console.log("Form submitted:", formData);
        setSuccessMessage("Message sent successfully!");

        // Reset skjema etter 2 sekunder
        setTimeout(() => {
          setFormData({ fullName: "", subject: "", email: "", body: "" });
          setSuccessMessage("");
        }, 2000);
      }

      setIsSubmitting(false);
    }
  }, [isSubmitting]);

  // Håndter skjema-innsending
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return {
    formData,
    errors,
    successMessage,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;