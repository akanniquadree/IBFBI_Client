import React, { useState } from "react";
import Layout from "../Component/Layout";
import Table from "../Component/Table";
import "./Admin.css";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { Delete, Edit, Visibility, VisibilityOff } from "@mui/icons-material";

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
    width: 110,
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

const rows = [
  { id: 1, name: "Snow", email: "Jon", role: 14 },
  { id: 2, name: "Lannister", email: "Cersei", role: 31 },
  { id: 3, name: "Lannister", email: "Jaime", role: 31 },
  { id: 4, name: "Stark", email: "Arya", role: 11 },
  { id: 5, name: "Targaryen", email: "Daenerys", role: null },
  { id: 6, name: "Melisandre", email: null, role: 150 },
  { id: 7, name: "Clifford", email: "Ferrara", role: 44 },
  { id: 8, name: "Frances", email: "Rossini", role: 36 },
  { id: 9, name: "Roxie", email: "Harvey", role: 65 },
];

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
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Table rows={rows} columns={columns} />
      </Layout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="signinItem" style={{padding:0,backgroundColor:'inherit'}}>
            <h4>
               <span style={{ color: "red" }}>Create Admin</span>
            </h4>
            <TextField
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
            />
            <TextField
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
            />
            <TextField
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
            <Button variant="contained" sx={{ backgroundColor: "red" }}>
              Create Admin
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
