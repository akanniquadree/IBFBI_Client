import React from "react";
import "./singleblog.css";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
export default function SingleBlogSection({ blog, data }) {
  return (
    <div className="singleBlogCont">
      <div className="singleBlogWrap">
        <div className="singleBlogLeft">
          <Stack direction={"column"} spacing={4}>
            <div className="singleBlogImage">
              <img src={blog.img} alt={blog.title} />
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
                <Link to={`/blog/${item.id}`} style={{ color: "inherit" }}>
                  <h6 className="blogP">{item.title}</h6>
                </Link>
              </Stack>
            ))}
          </Stack>
        </div>
      </div>
    </div>
  );
}
