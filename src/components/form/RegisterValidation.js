export default function validate(values, required) {
  let errors = {};

  // First name
  if (required.firstName) {
    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }
  }

  // Last name
  if (required.lastName) {
    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }
  }

  // Company name
  if (required.company) {
    if (!values.company) {
      errors.company = 'Company name is required';
    }
  }

  // Email address
  if (required.email) {
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is not valid';
    }
  }

  // Phone number
  if (required.phone) {
    if (!values.phone) {
      errors.phone = 'Phone number is required';
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