import React, { useContext, useState } from "react";
import "./signin.css";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { AuthContext } from "../Context/UserContext";

export default function SignIn() {
  const [parameter, setParameter] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { user, error, loading, dispatch } = useContext(AuthContext);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    dispatch({ type: "LOGIN_START" });
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER}/admin-login`,
        parameter,{withCredentials:true}
      );
      if (data) {
        localStorage.setItem("access-token", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.admin));
        dispatch({ type: "LOGIN_SUCCESS", payload: data.admin });
        window.location.replace("/admin")
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.error });
    }
  };

  return (
    <>
      <div className="signinContainer">
        <div className="signinWrapper">
          <form onSubmit={handleSubmit} className="signinItem">
            <h4>
              Admin <span style={{ color: "red" }}>Login</span>
            </h4>
            <TextField
              id="outlined-basic"
              label="Email.."
              value={parameter.email}
              onChange={(e) => {
                setParameter({ ...parameter, email: e.target.value });
              }}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(49, 56, 80, 0.8)", // Change the outline color on focus
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "rgba(49, 56, 80, 0.8)", // Change the label color on focus
                },
              }}
              error={error ? true : false}
              helperText={error ? "Incorrect entry." : ""}
            />
            <TextField
              value={parameter.password}
              onChange={(e) => {
                setParameter({ ...parameter, password: e.target.value });
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(49, 56, 80, 0.8)", // Change the outline color on focus
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "rgba(49, 56, 80, 0.8)", // Change the label color on focus
                },
              }}
              id="outlined-password-input"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={error ? true : false}
              helperText={error ? "Incorrect entry." : ""}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{ backgroundColor: "red" }}
            >
              {loading ? (
                <CircularProgress size="23px" style={{ color: "white" }} />
              ) : (
                " Log In"
              )}
            </Button>
            <p style={{ color: "red", textAlign: "center", marginTop: "5px" }}>
              {error}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
