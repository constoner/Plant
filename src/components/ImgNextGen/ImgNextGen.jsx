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
        <source type="image/webp" srcSet={`${srcWebpX2} 2x`}></source>
      ) : null}
      {srcWebp ? (
        <source type="image/webp" srcSet={`${srcWebp}`}></source>
      ) : null}
      <img
        className={className}
        src={fallback}
        srcSet={`${fallback}, ${srcJpgX2} 2x`}
        alt={alt}
        {...props}
      />
    </picture>
  );
};

export default ImgNextGen;
