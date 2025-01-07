import React from "react";
import "./footer.css";
import { Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  AddLocation,
  Email,
  EventAvailable,
  PermPhoneMsg,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="column">
          <Typography variant="h6" className="logo">
            <Link to="/" className="footer-logo">
              <img
                src="/Images/logo.png"
                alt="Logo"
                className="footer-logo-image"
              />
              <span>Ibadan Food Bank</span>
            </Link>
          </Typography>
          <p className="footer-description">
            We are dedicated to making the world a better place. Join us on our
            journey to create lasting impact.
          </p>
          <div className="social">
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedIn />
            </a>
          </div>
        </div>
        <div className="column">
          <h4>Get in touch</h4>
          <div className="contact-info">
            <Stack direction="row" spacing={3} alignItems="center">
              <AddLocation fontSize="large" htmlColor="red" />
              <p style={{marginLeft:"5px"}}>
                Admin Office: 5, Orelere Street, Ikolaba, Agodi, Ibadan, Oyo
                State.
              </p>
            </Stack>
            <Stack direction="row" spacing={3} alignItems="center">
              <PermPhoneMsg fontSize="large" htmlColor="red" />
              <p style={{marginLeft:"5px"}}>+2348138685342, +2348129944203</p>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <Email fontSize="large" htmlColor="red" />
              <div style={{marginLeft:"5px"}}>
                <p>contactus@ibadanfoodbank.org.ng</p>
                <p>ibadanfoodbank@gmail.com</p>
              </div>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <EventAvailable fontSize="large" htmlColor="red" />
              <div style={{marginLeft:"5px"}}>
                <p>Monday - Friday</p>
                <p>9am - 5pm</p>
              </div>
            </Stack>
          </div>
        </div>
        <div className="column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/partnership">Partnership</Link>
            </li>
            <li>
              <Link to="/program">Program</Link>
            </li>
            <li>
              <Link to="/volunteers">Volunteers</Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          &copy; 2024 Ibadan Food Bank. All rights reserved.
        </div>
      </footer>
    </>
  );
}