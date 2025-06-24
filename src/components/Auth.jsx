import React, { useState } from "react";
import { Box, Container, TextField, Button, Typography, Alert, Stack, IconButton, InputAdornment } from "@mui/material";
import { FaUser } from "react-icons/fa";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Auth = ({ onAuth }) => {
  const [authMode, setAuthMode] = useState("login");
  const [authForm, setAuthForm] = useState({ name: "", password: "" });
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleAuthChange = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!authForm.name || !authForm.password) {
      setAuthError("Please fill all fields");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[authForm.name]) {
      setAuthError("User already exists");
      return;
    }
    users[authForm.name] = { ...authForm };
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(authForm));
    onAuth(authForm);
    setAuthError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const saved = users[authForm.name.trim()];
    if (
      saved &&
      saved.name === authForm.name.trim() &&
      saved.password === authForm.password
    ) {
      localStorage.setItem("user", JSON.stringify(saved));
      onAuth(saved);
      setAuthError("");
    } else {
      setAuthError("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          width: "100%",
          p: 4,
          borderRadius: 3,
          boxShadow: 4,
          bgcolor: "background.paper",
        }}
      >
        <form onSubmit={authMode === "login" ? handleLogin : handleRegister}>
          <Stack spacing={3}>
            <Typography variant="h5" align="center" fontWeight={600}>
              {authMode === "login" ? "Login" : "Register"}
            </Typography>
            {authError && <Alert severity="error">{authError}</Alert>}
            <TextField
              label="Name"
              name="name"
              value={authForm.name}
              onChange={handleAuthChange}
              fullWidth
              InputProps={{
                startAdornment: <FaUser style={{ marginRight: 8 }} />,
              }}
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={authForm.password}
              onChange={handleAuthChange}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword((show) => !show)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              {authMode === "login" ? "Login" : "Register"}
            </Button>
            <Button
              type="button"
              variant="text"
              color="secondary"
              fullWidth
              onClick={() =>
                setAuthMode(authMode === "login" ? "register" : "login")
              }
            >
              {authMode === "login"
                ? "No account? Register"
                : "Have an account? Login"}
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Auth;