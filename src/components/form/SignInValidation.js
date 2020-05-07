// Validation rules
export default function validate(values, required) {
  let errors = {};

  // Email address
  if (required.email) {
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is not valid';
    }
  }

  // Password
  if (required.password) {
    if (!values.password) {
      errors.password = 'Current password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
  }

  return errors;
}