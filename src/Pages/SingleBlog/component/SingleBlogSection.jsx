import React from "react";
import "./singleblog.css";
import { Input, InputAdornment, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { AccountCircle, Comment, Favorite, Send } from "@mui/icons-material";
export default function SingleBlogSection({ blog, data }) {
  return (
    <div className="singleBlogCont">
      <div className="singleBlogWrap">
        <div className="singleBlogLeft">
          <Stack direction={"column"} spacing={4}>
            <div className="singleBlogImage">
              <img src={blog.img} alt={blog.title} />
              <span style={{ display: "flex", alignItems: "center", fontSize:'12px' }}>
                    <Comment size="tiny" sx={{fontSize:'12px', marginRight:'3px'}} /> 2 comments
                  </span>
            </div>
            <h3>{blog.title}</h3>
            <p style={{ color: "#433E39", textAlign: "justify" }}>
              {blog.para}
            </p>
            <p style={{ color: "#433E39", textAlign: "justify" }}>
              {blog.paraTwo}
            </p>
            <p style={{ color: "#433E39", textAlign: "justify" }}>
              {blog.paraThree}
            </p>
            <p style={{ color: "#433E39", textAlign: "justify" }}>
              {blog.paraFour}
            </p>
            <p style={{ color: "#433E39", textAlign: "justify" }}>
              {blog.paraFive}
            </p>
            <p style={{ color: "#433E39", textAlign: "justify" }}>
              {blog.paraSix}
            </p>
            <p style={{ color: "#433E39", textAlign: "justify" }}>
              {blog.paraSeven}
            </p>
          </Stack>
        </div>
        <div className="singleBlogRight">
          <Stack
            direction={"column"}
            spacing={3}
            sx={{ bgcolor: "white", padding: "10px", borderRadius: "2px" }}
          >
            <h4>
              RECENT <span style={{ color: "red" }}>POSTS</span>
            </h4>
            {data.map((item, index) => (
              <Stack
                direction={"row"}
                spacing={2}
                key={index}
                sx={{ justifyContent: "center" }}
              >
                <Link to={`/blog/${item.id}`} style={{ color: "inherit" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="singleBlogRightRecentImage"
                  />
                </Link>
                <Stack direction={"column"} spacing={1}>
                  <span style={{ display: "flex", alignItems: "center", fontSize:'12px' }}>
                    <Comment size="tiny" sx={{fontSize:'12px', marginRight:'3px'}} /> 2 comments
                  </span>
                  <Link to={`/blog/${item.id}`} style={{ color: "inherit" }}>
                    <h6 className="blogP">{item.title}</h6>
                  </Link>
                </Stack>
              </Stack>
            ))}
          </Stack>
          {/* Comment Section */}
          <Stack
            direction={"column"}
            spacing={3}
            sx={{ bgcolor: "white", padding: "10px", borderRadius: "2px" }}
          >
            <h4>Comments</h4>
            <Stack direction={"row"} spacing={2}>
              <img
                className="BlogCommentAvatar"
                src="/Images/leadvolunteer-avatar.png"
                alt="user"
              />
              <Stack direction={"column"}>
                <h6>Popoola Olalekan Samuel</h6>
                <p style={{ color: "rgb(160 155 155)", fontSize: "13px" }}>
                  lekanpop2@gmail.com
                </p>
                <p style={{ textAlign: "justify", fontSize: "16px" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae veritatis itaque dignissimos necessitatibus id dicta
                  illo dolor rerum quia animi qui sunt ipsum, cumque explicabo.
                  Consequuntur voluptate quasi iure amet.
                </p>
              </Stack>
            </Stack>
            <TextField
              id="outlined-error"
              label="Enter Message"
              multiline
              // rows={1} // Set the number of rows
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Send />
                  </InputAdornment>
                ),
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
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}
