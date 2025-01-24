import {
  ImageList,
  useTheme,
  useMediaQuery,
  Pagination,
  Box,
  IconButton,
  Modal,
  Stack,
} from "@mui/material";
import React, { useRef, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  height: "100vh",
  bgcolor: "rgba(0,0,0 ,0.6)",
  boxShadow: 24,
  p: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};

export default function PaginationList({
  data,
  itemPerPage,
  renderItem,
  itemHeight,
  onItemClick,
}) {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const containerRef = useRef(null);

  // Media query breakpoints
  const isSmall = useMediaQuery(theme.breakpoints.down("sm")); // Small screens
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md")); // Medium screens

  // Determine the number of columns based on screen size
  const cols = isSmall ? 1 : isMedium ? 2 : 4;

  const handleOpen = (index) => {
    setCurrentIndex(startIndex + index); // Calculate global index
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  //   Calculation of page slicing
  const startIndex = (page - 1) * itemPerPage;
  const stopIndex = startIndex + itemPerPage;
  const currrentData = data?.slice(startIndex, stopIndex);
  

  const handleScrollUp = (event, page) => {
    // Scroll to the top of the container or page
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    console.log(`You clicked page: ${page}`);
  };

  return (
    <>
      <ImageList
        sx={{ width: "100%" }}
        variant="quilted"
        cols={cols}
        rowHeight={itemPerPage * itemHeight}
        ref={containerRef}
      >
        {currrentData?.map(
          (item, index) => renderItem(item, index, () => handleOpen(index)) // Pass the click handler to renderItem
        )}
      </ImageList>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        margin={'30px 0 30px 0'}

        sx={{
          display: "flex",
          flexWrap: "nowrap", // Prevent wrapping
          overflowX: "auto", // Allow horizontal scrolling if needed
          "& .MuiPagination-ul": {
            display: "flex",
            flexWrap: "nowrap", // Ensure the pagination buttons stay on one line
          },
          "&::-webkit-scrollbar": {
            display: "none", // Optionally hide the scrollbar
          },
        }}
      >
        <Pagination
          count={Math.ceil(data?.length / itemPerPage)}
          page={page}
          onChange={(event, page) => {
            handlePageChange(event, page);
            handleScrollUp();
          }}
          showFirstButton
          showLastButton
          color="error"
          boundaryCount={1} // Adjust based on screen size
          siblingCount={1} // Fewer siblings on smaller screens
        />
      </Stack>
      {/* Modal for Image Preview */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            style={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon htmlColor="white" />
          </IconButton>

          {/* Image */}
          <img
            src={data[currentIndex].img}
            alt={data[currentIndex].title}
            style={{ maxWidth: "100%", maxHeight: "80vh", marginBottom: 16 }}
          />

          {/* Navigation Buttons */}
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <IconButton onClick={handlePrev}>
              <ArrowBackIosNewIcon htmlColor="white" />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowForwardIosIcon htmlColor="white" />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
