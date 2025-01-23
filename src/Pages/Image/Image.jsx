import React from "react";
import ImagesList from "../../Components/ImageList/ImageList";
import Directory from "../../Components/Directory/Directory";
import "./image.css";
import { Paper, Stack } from "@mui/material";
import { PermMedia } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Image() {
  const gallleryItems = [
    { name: "Community Outreach", link:'Community-Outreach' },
    { name: "Ibadan Hunger Walk" , link:"Ibadan-Hunger-Walk"},
    { name: "Feed the Children", link:'Feed-the-Children' },
    { name: "Pre-Outreach", link:"Pre-Outreach" },
    { name: "Ibadan Edu-Feed ", link:'Ibadan-Edu-Feed '},
    { name: "Volunteers", link:"Volunteers" },
  ];
  return (
    <>
      <Directory title={"Images"} />
      {/* <ImagesList/> */}
      <div className="ImageContainer">
        <div className="ImageWrapper">
          <div className="ImageListItems">
            {gallleryItems.map((itm, index) => (
              <Link to={`/gallery/${itm.link}`} style={{ color: "inherit" }} key={index} className="ImageListItemWrap">
                <Paper
                  elevation={0}
                  sx={{ padding: "20px" }}
                  className="ImageListItem"
                >
                  <Stack direction={"row"} spacing={1} sx={{ alignItems: "center", justifyContent:'center' }}>
                    <PermMedia
                      style={{ fontSize: "1em" }}
                      className="ImageListIcon"
                    />
                    <h4 >{itm.name}</h4>
                  </Stack>
                </Paper>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
