import React, { useState } from "react";
import Layout from "../Component/Layout";
import { Button, Box, Modal, Stack, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
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

export default function AdminGallery() {
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenView = () => setOpenView(true);
  const handleClose = () => setOpen(false);
  const handleCloseView = () => setOpenView(false);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "name",
      headerName: "User",
      width: 300,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            {
              <img
                src="/Images/commitment.jpg"
                alt=""
                style={{
                  width: "50px",
                  height: "45px",
                  marginRight: "10px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
            {
              <img
                src="/Images/commitment.jpg"
                alt=""
                style={{
                  width: "50px",
                  height: "45px",
                  marginRight: "10px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
            {
              <img
                src="/Images/commitment.jpg"
                alt=""
                style={{
                  width: "50px",
                  height: "45px",
                  marginRight: "10px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
            {
              <img
                src="/Images/commitment.jpg"
                alt=""
                style={{
                  width: "50px",
                  height: "45px",
                  marginRight: "10px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
            {
              <img
                src="/Images/commitment.jpg"
                alt=""
                style={{
                  width: "50px",
                  height: "45px",
                  marginRight: "10px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
            {
              <img
                src="/Images/commitment.jpg"
                alt=""
                style={{
                  width: "50px",
                  height: "45px",
                  marginRight: "10px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
            {
              <img
                src="/Images/commitment.jpg"
                alt=""
                style={{
                  width: "50px",
                  height: "45px",
                  marginRight: "10px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
            {
              <img
                src="/Images/commitment.jpg"
                alt=""
                style={{
                  width: "50px",
                  height: "45px",
                  marginRight: "10px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
            {
              <img
                src="/Images/commitment.jpg"
                alt=""
                style={{
                  width: "50px",
                  height: "45px",
                  marginRight: "10px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
            {
              <img
                src="/Images/commitment.jpg"
                alt=""
                style={{
                  width: "50px",
                  height: "45px",
                  marginRight: "10px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            }
          </div>
        );
      },
    },
    {
      field: "galleryCat",
      headerName: "Gallery Folder",
      width: 300,
    },
    {
      field: "createdBy",
      headerName: "Created By",
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
            <Edit htmlColor="green" onClick={handleOpenView} />
            <Delete htmlColor="red" />
          </Stack>
        );
      },
    },
  ];

  const rows = [
    { id: 1, name: "Snow", description: "Jon", createdBy: 14 },
    { id: 2, name: "Lannister", description: "Cersei", createdBy: 31 },
    { id: 3, name: "Lannister", description: "Jaime", createdBy: 31 },
    { id: 4, name: "Stark", description: "Arya", createdBy: 11 },
    { id: 5, name: "Targaryen", description: "Daenerys", createdBy: null },
    { id: 6, name: "Melisandre", description: null, createdBy: 150 },
    { id: 7, name: "Clifford", description: "Ferrara", createdBy: 44 },
    { id: 8, name: "Frances", description: "Rossini", createdBy: 36 },
    { id: 9, name: "Roxie", description: "Harvey", createdBy: 65 },
  ];

  return (
    <>
      <Layout>
        <div className="AdminContainer">
          <h4>Gallery</h4>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ bgcolor: "red", color: "white" }}
          >
            Upload
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
            className="signinItem"
            style={{ padding: 0, backgroundColor: "inherit" }}
          >
            <h4>
              <span style={{ color: "red" }}>Upload Images</span>
            </h4>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
            >
              <input type="file" multiple />
            </Box>
            <FormControl  size="small">
              <InputLabel id="demo-select-small-label">Gallery Folder</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" sx={{ backgroundColor: "red" }}>
              Upload Image(s)
            </Button>
          </div>
        </Box>
      </Modal>

      {/* View Modal */}
      <Modal
        open={openView}
        onClose={handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={[style2, { width: { xs: "100%", md: "50%" } }]}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              top: 3,
              left: 5,
              padding: "5px",
              width: "calc(100% - 10px)",
            }}
          >
            <Edit
              onClick={handleOpen}
              sx={{
                color: "green",

                cursor: "pointer",
              }}
            >
              Edit
            </Edit>
            <Close
              onClick={handleCloseView}
              sx={{
                color: "black",
                cursor: "pointer",
              }}
            />
          </Box>
          <Stack direction={"column"} spacing={4}>
            <div className="progamImage" style={{ width: "100%" }}>
              <img src="/Images/programCom.jpg" alt="program" />
            </div>
            <div className="progamDetail" style={{ width: "100%" }}>
              <h3 className="progamTile">FOCDEP PROGRAM</h3>
              <p className="progamDesc">
                Our Food Comfortability Development Program is a Community
                Outreach where we identify vulnerable households in need and
                distribute our Box of Love containing several food items that
                will last them for few days. Our Food Comfortability Development
                Program is a Community Outreach where we identify vulnerable
                households in need and distribute our Box of Love containing
                several food items that will last them for few days. Our Food
                Comfortability Development Program is a Community Outreach where
                we identify vulnerable households in need and distribute our Box
                of Love containing several food items that will last them for
                few days. Our Food Comfortability Development Program is a
                Community Outreach where we identify vulnerable households in
                need and distribute our Box of Love containing several food
                items that will last them for few days. Our Food Comfortability
                Development Program is a Community Outreach where we identify
                vulnerable households in need and distribute our Box of Love
                containing several food items that will last them for few days.
                Our Food Comfortability Development Program is a Community
                Outreach where we identify vulnerable households in need and
                distribute our Box of Love containing several food items that
                will last them for few days. Our Food Comfortability Development
                Program is a Community Outreach where we identify vulnerable
                households in need and distribute our Box of Love containing
                several food items that will last them for few days. Our Food
                Comfortability Development Program is a Community Outreach where
                we identify vulnerable households in need and distribute our Box
                of Love containing several food items that will last them for
                few days. Our Food Comfortability Development Program is a
                Community Outreach where we identify vulnerable households in
                need and distribute our Box of Love containing several food
                items that will last them for few days. Our Food Comfortability
                Development Program is a Community Outreach where we identify
                vulnerable households in need and distribute our Box of Love
                containing several food items that will last them for few days.
              </p>
            </div>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
