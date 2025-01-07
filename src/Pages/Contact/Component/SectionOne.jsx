import React from "react";
import "./sectionOne.css";
import { Box, Button, Stack, TextField } from "@mui/material";
import { AddLocation, Email, EventAvailable, PermPhoneMsg, VolunteerActivism } from "@mui/icons-material";

export default function SectionOne() {
  return (
    <>
      <div className="contactSectionOneCont">
        <div className="contactSectionOneWrap">
          <div className="contactSectionOneImg">
            <img src="/Images/contact.jpg" alt="contact" />
            <div className="contactSectionOneDisplay1"></div>
            <div className="contactSectionOneDisplay2">
              <Stack
                direction={{ md: "row", sm: "column" }}
                spacing={3}
                justifyContent={"center"}
                alignItems={{sm:'flex-start',md:"center"}}
              >
                <AddLocation fontSize="large" htmlColor="red" />
                <Stack direction={"column"} spacing={0.5}>
                  <h5 style={{ color: "red" }}>Mailing Address</h5>
                  <p style={{ color: "#7b7e86" }}>
                    Admin and Operations Office: 5, Orelere Street, Ikolaba,
                    Agodi, Ibadan, Oyo State.
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction={{ md: "row", sm: "column" }}
                spacing={3}
                alignItems={{sm:'flex-start',md:"center"}}
              >
                <PermPhoneMsg fontSize="large" htmlColor="red" />
                <Stack direction={"column"} spacing={0.5}>
                  <h5 style={{ color: "red" }}>Quick Contact</h5>
                  <p style={{ color: "#7b7e86" }}>
                    2348138685342 +2348129944203
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction={{ md: "row", sm: "column" }}
                spacing={3}
                alignItems={{sm:'flex-start',md:"center"}}
              >
                <Email fontSize="large" htmlColor="red" />
                <Stack direction={"column"} spacing={0.5}>
                  <h5 style={{ color: "red" }}>Support Email</h5>
                  <p style={{ color: "#7b7e86", textTransform: "lowercase" }}>
                    CONTACTUS@IBADANFOODBANK.ORG.NG
                  </p>
                  <p style={{ color: "#7b7e86", textTransform: "lowercase" }}>
                    IBADANFOODBANK@GMAIL.COM
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction={{ md: "row", sm: "column" }}
                spacing={3}
                alignItems={{sm:'flex-start',md:"center"}}
              >
                <EventAvailable fontSize="large" htmlColor="red" />
                <Stack direction={"column"} spacing={0.5}>
                  <h5 style={{ color: "red" }}>Working Days</h5>
                  <p style={{ color: "#7b7e86", textTransform: "lowercase" }}>
                    Monday - Friday
                  </p>
                  <p style={{ color: "#7b7e86", textTransform: "lowercase" }}>
                    9am - 5pm
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction={{ md: "row", sm: "column" }}
                spacing={3}
                alignItems={{sm:'flex-start',md:"center"}}
              >
                <VolunteerActivism fontSize="large" htmlColor="red" />
                <Stack direction={"column"} spacing={0.5}>
                  <h5 style={{ color: "red" }}>DONATIONS DROP OFF</h5>
                  <p style={{ color: "#7b7e86", textTransform: "lowercase" }}>
                    Monday - Saturday
                  </p>
                  <p style={{ color: "#7b7e86", textTransform: "lowercase" }}>
                    10am - 5pm
                  </p>
                </Stack>
              </Stack>
            </div>
          </div>
          <div className="contactSectionOneForm">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%", mb: 1 },
                display: "flex",
                gap: "10px",
              }}
              noValidate
              autoComplete="on"
            >
              <div style={{ marginBottom: "10px" }}>
                <TextField
                  id="outlined-error"
                  label="Name"
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
                  id="outlined-error-helper-text"
                  label="Email"
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
              </div>
              <div style={{ marginBottom: "10px" }}>
                <TextField
                  id="outlined-error"
                  label="Phone Number"
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
                  id="outlined-error-helper-text"
                  label="Subject"
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
              </div>
            </Box>
            <TextField
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(49, 56, 80, 0.8)", // Change the outline color on focus
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "rgba(49, 56, 80, 0.8)", // Change the label color on focus
                },
              }}
              id="filled-multiline-static"
              fullWidth
              label="Message"
              multiline
              rows={17}
              variant="outlined"
            />
            <div className="contactSectionOneFormBut">
              <Button variant="contained" sx={{ backgroundColor: "red" }}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
