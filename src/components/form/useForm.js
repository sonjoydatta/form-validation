import { useState, useEffect } from 'react';

function useForm(callback, validate) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  // Validate errors using useEffect hook
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      callback();
    }
  }, [errors, callback]);

  // Input change handler
  function handleChange(event) {
    const { name, value, required } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ 
      ...errors, 
      [name]: validate({[name]: value}, {[name]: required})[name] 
    });
  }

  // Form submit handler
  function handleSubmit(event) {
    if (event) event.preventDefault();
    const { elements } = event.target;
    let required = {};

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].tagName === 'INPUT') {
        required[elements[i].name] = elements[i].required;
      }
    }
    
    setErrors(validate(values, required));
  }

  // Return values, errors and action handlers
  return {
    values,
    errors,
    handleChange,
    handleSubmit
  }
}

export default useForm;