import React, { useState, useEffect } from "react";
import "./style.css";

import Loading from "../Loading/Loading";
import ImgNextGen from "../ImgNextGen/ImgNextGen";

const Aside = () => {
  const [galleryData, setGalleryData] = useState([]);

  const getData = () => {
    fetch(process.env.PUBLIC_URL + "/data/gallery.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          let error = new Error(
            "Server is not responding. Please, reload the page"
          );
          error.response = response;
          throw error;
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => setGalleryData(data))
      .catch((e) =>
        console.warn(
          "Data is corrupted. Please, reload the page" + ", " + e.message
        )
      );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <aside className="aside">
      <h2 className="aside__title title">Follow Us on Instagram</h2>
      <p className="aside__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
        accu msan sit amet nunc cursus. Nec tristique at in erat lectus
      </p>
      <div className="aside__gallery-wrapper">
        {galleryData.length ? (
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
                      />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <Loading width="100%" height="241px" />
        )}
      </div>
    </aside>
  );
};

export default Aside;
