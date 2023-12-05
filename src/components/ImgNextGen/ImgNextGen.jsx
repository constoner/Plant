import React from "react";

const ImgNextGen = ({
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
        <source type="image/webp" srcset={`${srcWebpX2} 2x`}></source>
      ) : null}
      {srcWebp ? (
        <source type="image/webp" srcset={`${srcWebp}`}></source>
      ) : null}
      <img
        src={fallback}
        srcset={`${fallback}, ${srcJpgX2} 2x`}
        alt={alt}
        {...props}
      />
    </picture>
  );
};

export default ImgNextGen;
