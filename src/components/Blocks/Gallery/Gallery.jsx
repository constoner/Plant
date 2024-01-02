import React, { useContext, useEffect } from "react";
import "./style.css";
import PageData from "../../App/Context";

import { GallerySpare } from "./GalleryContent";
import { GalleryContent } from "./GalleryContent";

const Gallery = () => {
  const { galleryState } = useContext(PageData);
  const { loadGallery, galleryLoading, galleryData } = galleryState();

  useEffect(() => {
    loadGallery();
  }, []);

  return (
    <div className="aside__gallery-wrapper">
      {galleryLoading ? (
        <GallerySpare />
      ) : (
        <GalleryContent galleryImages={galleryData} />
      )}
    </div>
  );
};

export default Gallery;
