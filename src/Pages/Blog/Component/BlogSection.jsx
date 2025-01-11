import React, { useState } from "react";
import "./blog.css";
import { Pagination, Stack, TextField } from "@mui/material";
import { BannerSevenData } from "../../../Components/BannerSeven/BannerSevenData";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemPerPage = 9;

  const handlePageChange = (e, value) => {
    setPage(value);
  };
  const filteredData = searchTerm
    ? BannerSevenData.filter((item) =>
        String(item.title).toLowerCase().includes(searchTerm.toLowerCase())
      )
    : BannerSevenData; // If searchTerm is empty, show the full array.

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  //   Calculation of page slicing
  const startIndex = (page - 1) * itemPerPage;
  const stopIndex = startIndex + itemPerPage;
  const currrentData = filteredData.slice(startIndex, stopIndex);
  return (
    <>
      <div className="blogCont">
        <div className="blogWrap">
          <TextField
            id="outlined-search"
            label="Search for Name"
            type="search"
            onChange={handleSearch}
            value={searchTerm}
            sx={{
              width: "350px",
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
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={2}
            // useFlexGap
            // sx={{ flexWrap: "wrap" }}
            sx={{
              flexWrap: "wrap",
              justifyContent:'space-between',
              gap: "20px",
              "& > :not(style) ~ :not(style)": {
                marginLeft: 0, // Override margin-left
              },
            }}
            className="BannerSevenCont"
          >
            {currrentData.map((item, index) => (
                
              <Stack
                direction={"column"}
                spacing={3}
                className="BannerSevenList"
                key={index}
                sx={{
                  flex: {
                    xs: "1 1 100%", // For extra small devices (one per row)
                    sm: "1 1 100%", // For small devices (still one per row)
                    md: "1 1 calc(33.33% - 30px)", // For medium and larger devices (three per row)
                  },
                  maxWidth: {
                    md: "calc(33.33% - 30px)", // Ensures max width matches the calculated flex
                  },
                }}
              >
                <Link to={`/blog/${index}`} style={{ color: "inherit" }}><div className="BannerSevenImage">
                  <img src={item.img} alt="" className="BannerSevenImg" />
                  <div className="BannerSevenImageDesc">
                    <div className="BannerSevenImageTitle">
                      <p style={{ fontSize: "11px", color: "red" }}>
                        4 years ago
                      </p>
                    </div>
                    <div className="BannerSevenImageTitleDesc">
                      <p style={{ fontSize: "11px", color: "white" }}>Blog</p>
                    </div>
                  </div>
                </div></Link>
                <Link to={`/blog/${item.id}`} style={{ color: "inherit" }}><p className="blogP" style={{ fontWeight: 600, fontSize: "16px", }}>
                  {item.title}
                </p></Link>
                <p className="paraOne">{item.para}</p>
                <button class="read-more">
                <Link to={`/blog/${item.id}`} style={{ color: "inherit" }}> Read More <span class="arrow">→</span></Link>
                </button>
              </Stack>
            ))}
          </Stack>
          <div className="paginationCont">
            <Pagination
              count={Math.ceil(filteredData.length / itemPerPage)}
              page={page}
              onChange={handlePageChange}
              showFirstButton
              showLastButton
              color="error"
            />
          </div>
        </div>
      </div>
    </>
  );
}
