import React, { useState } from "react";
import Layout from "../Component/Layout";
import { Button, Box, Modal, Stack, TextField } from "@mui/material";
import Table from "../Component/Table";
import { Close, Delete, Edit } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  height: "100%",
};

export default function GalleryCat() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { field: "id", headertitle: "ID", width: 30 },
    {
      field: "title",
      headertitle: "Category title",
      width: 300,
    },
    {
      field: "image",
      headertitle: "Number of Images",
      type: "number",
      width: 110,
    },
    {
      field: "createdBy",
      headertitle: "Created By",
      type: "number",
      width: 110,
    },
    {
      field: "action",
      headertitle: "Action",
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
            <Edit htmlColor="green" onClick={handleOpen} />
            <Delete htmlColor="red" />
          </Stack>
        );
      },
    },
  ];

  const rows = [
    { id: 1, title: "Snow", images: "Jon", createdBy: 14 },
    { id: 2, title: "Lannister", images: "Cersei", createdBy: 31 },
    { id: 3, title: "Lannister", images: "Jaime", createdBy: 31 },
    { id: 4, title: "Stark", images: "Arya", createdBy: 11 },
    { id: 5, title: "Targaryen", images: "Daenerys", createdBy: null },
    { id: 6, title: "Melisandre", images: null, createdBy: 150 },
    { id: 7, title: "Clifford", images: "Ferrara", createdBy: 44 },
    { id: 8, title: "Frances", images: "Rossini", createdBy: 36 },
    { id: 9, title: "Roxie", images: "Harvey", createdBy: 65 },
  ];

  return (
    <>
      <Layout>
        <div className="AdminContainer">
          <h4 >Image Names</h4>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ bgcolor: "red", color: "white" }}
          >
            Create
          </Button>
        </div>
        <Table rows={rows} columns={columns} />
      </Layout>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-images"
      >
        <Box sx={style}>
          <Close
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "black",
            }}
          />
          <div
            classtitle="signinItem"
            style={{ padding: 0, backgroundColor: "inherit" }}
          >
            <h4 style={{ color: "red", marginBottom:'20px' }}>
              <span style={{ color: "red" }}>Create Gallery Folder</span>
            </h4>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Title.."
                variant="outlined"
                fullWidth
                sx={{mb:3,
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
            </Box>
            
            <Button variant="contained" sx={{ backgroundColor: "red" }}>
              Create Gallery Folder
            </Button>
          </div>
        </Box>
      </Modal>

     
    </>
  );
}
