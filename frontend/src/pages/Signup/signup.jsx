import React, { useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiCLient, SIGNUP_ROUTE } from "../../services/api.js";
// import { useAppStore } from "../store/store.js";
// import { userInfo } from "os";

const Signup = () => {
  const navigate = useNavigate();
  //   const { setUserInfo, userInfo } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserName, setUserName] = useState("");
  const [FullName, setFullName] = useState("");

  const HandleSignUp = async () => {
    try {
      const response = await apiCLient.post(SIGNUP_ROUTE, {
        email,
        password,
        UserName,
        // FullName,
      });
      console.log(response.status);
      //   navigate("/profile");

      if (response.status === 201) {
        const user = response.data.user;
        console.log("data from backend", user);
        // setUserInfo(user);
        // console.log(userInfo);
        console.log("Navigating to profile...");
        navigate("/profile");
        console.log("dekhte hain ");
      }
    } catch (error) {
      console.log("error while signup:", error);
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
          Welcome!!
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
            label="UserName"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
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

          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={() => HandleSignUp()}
            variant="contained"
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
            Sign Up
          </Button>
        </form>

        <Typography
          variant="body2"
          sx={{ mt: 2, color: "#000", fontWeight: 500 }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#6A11CB",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Signup;
