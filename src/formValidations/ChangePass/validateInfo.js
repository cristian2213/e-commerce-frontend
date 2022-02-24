function validate(values, isTouched) {
  const { password, confirmPassword } = values;
  const { password: isPassTouched, confirmPassword: isConfirmTouched } =
    isTouched;

  const errors = {};
  const regex =
    /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

  // PASSWORD
  if (!password && isPassTouched) {
    errors.password = 'Password is required';
  } else if (isPassTouched && (password.length < 8 || password.length > 50)) {
    errors.password =
      'Password must have a minimum of 8 characters and a maximum of 50 characters';
  } else if (isPassTouched && !regex.test(password)) {
    errors.password =
      'The password must have lowercase, uppercase, a number and a symbol';
  }

  // CONFIRM PASSWORD
  if (!confirmPassword && isConfirmTouched) {
    errors.confirmPassword = 'Confirm password is required';
  } else if (isConfirmTouched && confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
}

export default validate;
