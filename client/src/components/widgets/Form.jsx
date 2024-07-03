import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  Collapse,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import Dropzone from "react-dropzone";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required").min(2).max(12),
  lastName: yup.string().required("required").min(2).max(12),
  email: yup.string().email("invalid email").required("required").max(50),
  password: yup.string().required("required").min(5),
  location: yup.string(),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required").max(50),
  password: yup.string().required("required").min(5),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const register = async (values, { resetForm }) => {
  const verified = await verifyOtp();
  if (!verified) {
    setError("Invalid Otp!");
    setOtpClick(false);
    setOtpVerify(false);
    values.otp = "";
    setClicked(false);
    return;
  }

  values.email = values.email.toLowerCase();
  let formData = {
    ...values,
  };
  formData.profilePhoto = image;

  const savedUserResponse = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );

  const savedUser = await savedUserResponse.json();
  resetForm();
  setClicked(false);
  if (savedUser.error) {
    setError("User with this email already exists!");
    setOtpClick(false);
    return;
  }
  if (savedUser) {
    setPageType("login");
  }
};

const login = async (values, onSubmitProps) => {
  values.email = values.email.toLowerCase();
  onSubmitProps.resetForm();
  const loggedInResponse = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }
  );
  const loggedIn = await loggedInResponse.json();
  setClicked(false);
  if (loggedIn.msg) {
    setError("Invalid Credentials!");
    return;
  }
  if (loggedIn) {
    dispatch(setLogin({ user: loggedIn.user, token: loggedIn.token }));
    navigate("/home");
  }
};

const handleFormSubmit = async (values, onSubmitProps) => {
  setClicked(true);
  if (isLogin) await login(values, onSubmitProps);
  if (isRegister) await register(values, onSubmitProps);
};

const sendOtp = async (values, onSubmitProps) => {
  if (image) await uploadImage();
  setClicked(true);
  setOtpClick(true);
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/auth/register/otp`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: otpRef.current.values.email,
        name: `${otpRef.current.values.firstName} ${otpRef.current.values.lastName}`,
      }),
    }
  );
  const otp = await response.json();
  if (otp.error) {
    setClicked(false);
    setOtpClick(false);
    return;
  }
  if (otp) {
    setValidOtp(otp);
    setClicked(false);
  }
};

const verifyOtp = async (values, onSubmitProps) => {
  if (String(otpRef.current.values.otp) === String(validOtp)) return true;
  return false;
};

const loginModalStyle = {
  borderRadius: "20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  padding: "32px 24px",
};

const Form = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const blue = theme.palette.secondary.main;
  const main = theme.palette.primary.main;
  const primaryDark = theme.palette.primary.dark;
  const primaryLight = theme.palette.primary.light;
  const hover = theme.palette.primary.hover;
  const neutral = theme.palette.primary.neutral;

  return (
    <Box sx={{ ...loginModalStyle, bgcolor: neutral }}>
      <Formik onSubmit={handleFormSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Box p="30px" justifyContent="center" alignItems="center">
              <Typography color="white" fontSize="20px" fontWeight="bold">
                Log In
              </Typography>

              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                size="small"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                fullWidth
                type="password"
                margin="normal"
                variant="outlined"
                size="small"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Button
                type="submit"
                fullWidth
                label="Password"
                variant="contained"
                sx={{
                  my: 2,
                }}
              >
                Log In
              </Button>
              <Typography
                // onClick={() => {
                //   setPageType(isLogin ? "register" : "login");
                //   resetForm();
                // }}
                sx={{
                  textDecoration: "underline",
                  color: blue,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                {isLogin
                  ? "Don't have an account? Sign Up here."
                  : "Already have an account? Login here."}
              </Typography>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
});

export default Form;
