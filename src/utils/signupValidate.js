// signupValidate.js

const signupValidate = (form) => {
  let newErrors = {};

  let emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordFormat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&\-+=()])(?=\S+$).{6,8}$/;
  let phoneFormate = /^(?:\+91)?[6-9]\d{9}$/;

  // Name
  if (!form.name.trim()) {
    newErrors.name = "Full name is required";
  } else if (form.name.length < 3) {
    newErrors.name = "Name must be at least 3 characters";
  }

  // Email
  if (!form.email) {
    newErrors.email = "Email is required";
  } else if (!emailFormat.test(form.email)) {
    newErrors.email = "Invalid Email Format";
  }

  // phone
  if (!form.phone) {
    newErrors.phone = "Phone Number is required";
  } else if (!phoneFormate.test(form.phone)) {
    newErrors.phone = "Phone must be 10 digits & valid formate";
  }

  // Password
  if (!form.password) {
    newErrors.password = "Password is required";
  } else if (!passwordFormat.test(form.password)) {
    newErrors.password = "Password must be 6-8 characters, include uppercase, lowercase, number and special character";
  }

  return newErrors;   
};

export default signupValidate;
