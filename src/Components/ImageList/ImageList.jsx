import React from "react";
import "./imageList.css";
import { Box, IconButton, ImageListItem, Modal } from "@mui/material";
// import { itemData } from "../../Pages/Image/ImageData";
import PaginationList from "../Pagination/Pagination";

export default function ImagesList({itemData}) {
  const itemPerPage = 8;
  const itemHeight = 30;
  const renderItem = (item, index, onClick) => (
    <ImageListItem key={index} onClick={onClick}>
      <img
        // srcSet={item.img}
        src={item.img}
        alt={item.title}
        // loading="lazy"
        className="imageListitem"
      />
    </ImageListItem>
  );
  return (
    <>
      <div className="imagesListCont">
        <div className="imagesListwrap">
          <PaginationList
            data={itemData}
            itemPerPage={itemPerPage}
            itemHeight={itemHeight}
            renderItem={renderItem}
          />
        </div>
      </div>
    </>
  );
}
