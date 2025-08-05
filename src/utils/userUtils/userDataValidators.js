import userService from "../../services/user/user.service.js";

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[^\s]{4,}$/;
const genders = ["male", "female", "other"];
const dobStart = 1930;

export const validateName = (name, pos = "First") => {
  if ((!name && name.length < 1) || name > 10 || !nameRegex.test(name)) {
    return {
      valid: false,
      message: `${pos} name must be between 1 and 10 characters long and contain only letters.`,
    };
  }
  return { valid: true };
};

export const validateEmail = async (email, isNew = false) => {
  try {
    if (!email || !emailRegex.test(email)) {
      return {
        valid: false,
        message: "Please enter a valid email address",
      };
    }

    if (isNew) {
      const existingUser = await userService.getUserByEmail(email)
      if (existingUser) {
        return {
          valid: false,
          message:
            "This email is already registered. Please use a different email.",
        };
      }
    }

    return { valid: true };
  } catch (error) {
    return {
      valid: false,
      message: "An unexpected error occurred while validating the email.",
    };
  }
};

export const validateGender = (gender) => {
  if (!gender || !gender.trim()) {
    return {
      valid: false,
      message: "Gender is required",
    };
  } else if (!genders.includes(gender)) {
    return {
      valid: false,
      message: "Invalid gender provided",
    };
  }
  return { valid: true };
};

export const validateDob = (dob) => {
  if (!dob) {
    return { valid: false, message: "Date of birth is required." };
  }

  const date = new Date(dob);
  const year = date.getFullYear();

  if (isNaN(date.getTime())) {
    return { valid: false, message: "Invalid date format." };
  }

  const currentYear = new Date().getFullYear();
  if (year < dobStart || year > currentYear) {
    return {
      valid: false,
      message: `Year of birth must be between ${dobStart} and ${currentYear}.`,
    };
  }

  return { valid: true };
};

export const validateOccupation = (occupation) => {
  if (!occupation || typeof occupation !== "string") {
    return { valid: false, message: "Occupation is required." };
  }

  const trimmed = occupation.trim();

  if (trimmed.length < 3 || trimmed.length > 50) {
    return {
      valid: false,
      message: "Occupation must be between 3 and 50 characters.",
    };
  }

  return { valid: true };
};

export const validatePassword = (password) => {
  if (!password || !passwordRegex.test(password)) {
    return {
      valid: false,
      message:
        "Password must be at least 4 characters long and include at least one letter and one number.",
    };
  }
  return { valid: true };
};
