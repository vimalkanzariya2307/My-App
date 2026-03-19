// loginValidate.js

const loginValidate = (form) => {

  let newErrors = {};
  let emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordFormat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&\-+=()])(?=\S+$).{6,8}$/;

  // Email

  if (!form.email) {
    newErrors.email = "Email is required";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  } else if (!emailFormat.test(form.email)) {
    newErrors.email = "Invalid email format";
  }
 
  // Password
  if (!form.password) {
    newErrors.password = "Password is required";
  } else if (!passwordFormat.test(form.password)) {
    newErrors.password ="Password must be 6-8 characters, include uppercase, lowercase, number and special character";
  }

  return newErrors;   
};

export default loginValidate;