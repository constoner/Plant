import React from "react";

const ImgNextGen = ({
  className = null,
  srcWebpX2 = null,
  srcWebp = null,
  srcJpgX2 = null,
  fallback,
  alt,
  ...props
}) => {
  if (!srcJpgX2) {
    srcJpgX2 = fallback;
  }

  return (
    <picture>
      {srcWebpX2 ? (
        <source
          type="image/webp"
          srcSet={`${process.env.PUBLIC_URL + srcWebpX2} 2x, ${
            process.env.PUBLIC_URL + srcWebp
          }`}
        ></source>
      ) : null}
      <img
        className={className}
        src={process.env.PUBLIC_URL + fallback}
        srcSet={`${process.env.PUBLIC_URL + fallback}, ${
          process.env.PUBLIC_URL + srcJpgX2
        } 2x`}
        alt={alt}
        {...props}
      />
    </picture>
  );
};

export default ImgNextGen;
