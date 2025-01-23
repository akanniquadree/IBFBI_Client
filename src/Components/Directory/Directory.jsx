import React from "react";
import "./directory.css";
import { Link } from "react-router-dom";

export default function Directory({ title, blog, image }) {
  if (title) {
    return (
      <div className="directoryCont">
        <div className="directoryWrap">
          <div className="directoryLoc">
            <Link to="/" className="directoryLink">
              Home
            </Link>
            <span style={{ color: "white", fontSize: "20px" }}>&gt; </span>
            <p style={{ color: "red", fontSize: "20px" }}>{title}</p>
          </div>
          <h4 className="directoryName">{title}</h4>
        </div>
      </div>
    );
  } else if(blog) {
    return (
      <div className="directoryCont">
        <div className="directoryWrap">
          <div className="directoryLoc">
            <Link to="/" className="directoryLink">
              Home
            </Link>
            <span style={{ color: "white", fontSize: "20px" }}>&gt; </span>
            <Link to="/blog" className="directoryLink">
              Blog
            </Link>
            <span style={{ color: "white", fontSize: "20px" }}>&gt; </span>
            <p style={{ color: "red", fontSize: "15px" }}>{blog}</p>
          </div>
          <h4 className="directoryName blogDir">{blog}</h4>
        </div>
      </div>
    );
    
  }else{
    return (
      <div className="directoryCont">
        <div className="directoryWrap">
          <div className="directoryLoc">
            <Link to="/" className="directoryLink">
              Home
            </Link>
            <span style={{ color: "white", fontSize: "20px" }}>&gt; </span>
            <Link to="/gallery" className="directoryLink">
              Gallery
            </Link>
            <span style={{ color: "white", fontSize: "20px" }}>&gt; </span>
            <p style={{ color: "red", fontSize: "15px" }}>{image}</p>
          </div>
          <h4 className="directoryName blogDir">{image}</h4>
        </div>
      </div>
    );
    }
}
