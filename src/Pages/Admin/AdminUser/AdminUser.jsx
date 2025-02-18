import React, { useEffect, useState } from "react";
import Layout from "../Component/Layout";
import Table from "../Component/Table";
import "./Admin.css";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Delete, Edit, Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { refreshToken } from "../Component/RefreshToken";
import AutohideSnackbar from "../Component/SnackBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AdminUser() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [view, setView] = useState({ error: "", message: "" });
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    try {
      const handleAdmin = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER}/admin`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("acess-token"),
            },
          }
        );
        if (data) {
          setData(data);
        }
      };
      handleAdmin();
    } catch (error) {}

    return () => {};
  }, []);

  const handleSubmit = async (e) => {
    setView({ ...view, error: "" });
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER}/admin`,
        view,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
          },
        }
      );
    } catch (error) {
      if (error.response.status === 403) {
        console.log("Access Token Expired! Trying to refresh...");
        return refreshToken(handleSubmit); // Attempt refresh
      }
      setView({ ...view, error: error.response.data.error });
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "role",
      headerName: "Admin Type",
      type: "number",
      width: 200,
      renderCell: (params) => {
        if (params.row.role === process.env.REACT_APP_ARC) {
          return "Arch Admin";
        } else if (params.row.role === process.env.REACT_APP_MAS) {
          return "Master Admin";
        } else {
          return "Beginner Admin";
        }
      },
    },
    {
      field: "created_at",
      headerName: "Date",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 90,
      renderCell: (params) => {
        return (
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ height: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Edit htmlColor="green" />
            <Delete htmlColor="red" />
          </Stack>
        );
      },
    },
  ];

  return (
    <>
      <Layout>
        <div className="AdminContainer">
          <h4>Admins</h4>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ bgcolor: "red", color: "white" }}
          >
            Add Admin
          </Button>
        </div>
        <Table rows={data} columns={columns} />
      </Layout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit}
            className="signinItem"
            style={{ padding: 0, backgroundColor: "inherit" }}
          >
            <h4>
              <span style={{ color: "red" }}>Create Admin</span>
            </h4>
            <TextField
              value={value.name}
              onChange={(e) => {
                setValue({ ...value, name: e.target.value });
              }}
              id="outlined-basic"
              label="Name.."
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
              error={view.error && value.name ? false : true}
              helperText={view.error && !value.name ? "Please Fill.." : ""}
            />
            <TextField
              value={value.email}
              onChange={(e) => {
                setValue({ ...value, email: e.target.value });
              }}
              id="outlined-basic"
              label="Email.."
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
              error={view.error && value.email ? false : true}
              helperText={view.error && !value.email ? "Please Fill.." : ""}
            />
            <TextField
            error={view.error && value.password ? false : true}
            helperText={view.error && !value.password ? "Please Fill.." : ""}
              value={value.password}
              onChange={(e) => {
                setValue({ ...value, password: e.target.value });
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
            />
            <FormControl size="small">
              <InputLabel
                id="demo-select-small-label"
                sx={{
                  color: "rgba(49, 56, 80, 0.8)", // Default label color
                  "&.Mui-focused": {
                    color: "rgba(49, 56, 80, 1) !important", // Label color on focus
                  },
                }}
              >
                role
              </InputLabel>
              <Select
              error={view.error && value.role ? false : true}
              helperText={view.error && !value.role ? "Please Fill.." : ""}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(49, 56, 80, 0.8) !important", // Ensure border changes
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(49, 56, 80, 1) !important", // Stronger border on focus
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(49, 56, 80, 0.8)", // Label color
                  },
                  "&.Mui-focused .MuiInputLabel-root": {
                    color: "rgba(49, 56, 80, 1)", // Label color on focus
                  },
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={value.role}
                label="role"
                onChange={(e) => {
                  setValue({ ...value, role: e.target.value });
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={process.env.REACT_APP_ARC}>
                  Arch Admin
                </MenuItem>
                <MenuItem value={process.env.REACT_APP_MAS}>
                  Master Admin
                </MenuItem>
                <MenuItem value={process.env.REACT_APP_BEG}>
                  Beginner Admin
                </MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              sx={{ backgroundColor: "red" }}
              type="submit"
            >
              Create Admin
            </Button>
            <p style={{ color: "red", textAlign: "center", marginTop: "5px" }}>
              {view.error}
            </p>
          </form>
        </Box>
      </Modal>
      <AutohideSnackbar display={display} setDisplay={setDisplay} />
    </>
  );
}
