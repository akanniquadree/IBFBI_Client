import React from "react";
import "./singleImage.css";
import { Input, InputAdornment, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import {
  AccountCircle,
  Comment,
  Favorite,
  PermMedia,
  Send,
} from "@mui/icons-material";
import ImagesList from "../../../Components/ImageList/ImageList";
export default function SingleImageSection({ image, data }) {
  return (
    <div className="singleBlogCont">
      <div className="singleBlogWrap">
        <div className="singleBlogLeft">
         <ImagesList itemData={image ? image.images : []}/>
        </div>
        <div className="singleBlogRight" style={{padding:'30px'}}>
          <Stack
            direction={"column"}
            spacing={3}
            sx={{ bgcolor: "white", padding: "30px", borderRadius: "2px" }}
          >
            <h4>
              <span style={{ color: "red" }}>Gallery</span>
            </h4>
            {data
              .filter((item) => item.name !== image.name)
              .map((item, index) => (
                <Stack
                  direction={"row"}
                  spacing={2}
                  key={index}
                >
                  <Link
                    to={`/gallery/${item.link}`}
                    style={{ color: "inherit" }}
                  >
                    <PermMedia
                      style={{ fontSize: "1em" }}
                      className="ImageListIcon"
                    />
                  </Link>
                  <Stack direction={"column"} spacing={1}>
                    <Link to={`/gallery/${item.link}`} style={{ color: "inherit" }}>
                      <h6 className="blogP">{item.name}</h6>
                    </Link>
                  </Stack>
                </Stack>
              ))}
          </Stack>
        </div>
      </div>
    </div>
  );
}
