import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  apiCLient,
  GET_USER_ROUTE,
  LOGIN_ROUTE,
} from "../../../services/api.js";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../../store/authSlice.js";

const Login = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await apiCLient.post(LOGIN_ROUTE, { email, password });
      const userData = await apiCLient.get(GET_USER_ROUTE);
      if (userData?.data?.user) {
        disPatch(authLogin(userData.data.user));
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen dark:bg-zinc-900">
      <Box
        sx={{
          width: 400,
          p: 4,
          borderRadius: 3,
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(to right, #6A11CB, #2575FC)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          Welcome back!!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            fontWeight: 500,
            mb: 4,
          }}
        >
          Explore the World
        </Typography>
        <form style={{ width: "100%" }} noValidate>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiInputLabel-root": { color: "#000" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#6A11CB",
                },
                "&:hover fieldset": {
                  borderColor: "#2575FC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2575FC",
                },
                "& .MuiOutlinedInput-input": {
                  color: "#000",
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            sx={{
              mb: 2,
              "& .MuiInputLabel-root": { color: "#000" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#6A11CB",
                },
                "&:hover fieldset": {
                  borderColor: "#2575FC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2575FC",
                },
                "& .MuiOutlinedInput-input": {
                  color: "#000",
                },
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={() => handleLogin()}
            sx={{
              py: 1.5,
              background: "linear-gradient(to right, #6A11CB, #2575FC)",
              "&:hover": {
                background: "linear-gradient(to right, #2575FC, #6A11CB)",
              },
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ mt: 2, color: "#000", fontWeight: 500 }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            SignUp
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
