import React, { useContext, useEffect } from "react";
import "./style.css";
import PageData from "../App/Context.jsx";

import Loading from "../Loading/Loading";
import ImgNextGen from "../ImgNextGen/ImgNextGen";

const Gallery = () => {
  const { galleryLoading, galleryData, loadGallery } = useContext(PageData);

  useEffect(() => {
    loadGallery();
  }, []);

  return (
    <div className="aside__gallery-wrapper">
      {galleryLoading ? (
        <ul className="aside__gallery gallery">
          <li className="gallery__item">
            <Loading width="100%" height="100%" />
          </li>
          <li className="gallery__item">
            <Loading width="100%" height="100%" />
          </li>
          <li className="gallery__item">
            <Loading width="100%" height="100%" />
          </li>
          <li className="gallery__item">
            <Loading width="100%" height="100%" />
          </li>
          <li className="gallery__item">
            <Loading width="100%" height="100%" />
          </li>
        </ul>
      ) : galleryData.length ? (
        <ul className="aside__gallery gallery">
          {galleryData.map((item, index) => {
            return (
              <li className="gallery__item" key={index}>
                <div className="gallery__wrapper">
                  <a className="gallery__link" href={item.href}>
                    <ImgNextGen
                      srcJpgX2={item.src2x}
                      fallback={item.src1x}
                      alt="Go to our instagram gallery!"
                      loading="lazy"
                    />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <a className="gallery__spare" href="#!">
          @homeplantbeauty
        </a>
      )}
    </div>
  );
};

export default Gallery;
