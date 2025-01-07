import React from "react";
import "./imageList.css";
import { Box, IconButton, ImageListItem, Modal } from "@mui/material";
import { itemData } from "../../Pages/Image/ImageData";
import PaginationList from "../Pagination/Pagination";

export default function ImagesList() {
  const itemPerPage = 8;
  const itemHeight = 30;
  const renderItem = (item, index, onClick) => (
    <ImageListItem key={item.img} onClick={onClick}>
      <img
        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=161&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
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
