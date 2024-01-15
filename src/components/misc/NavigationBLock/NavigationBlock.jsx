import React, { useEffect } from "react";
import "./style.css";

import NavigationBlockContent from "./NavigationBLockContent";

const onTargetIntersect = (items) => {
  let previousAnchor = null;
  let currentAnchor = null;

  return (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (currentAnchor) {
          previousAnchor = currentAnchor;
        }

        currentAnchor = entry.target.id;

        items[previousAnchor]?.classList?.remove("nav-block__link--active");

        setTimeout(() => {
          items[currentAnchor].classList.add("nav-block__link--active");
        }, 300);
      }
    });
};

const NavigationBlock = ({ className, links }) => {
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll("[data-href]")).reduce(
      (obj, item, index) => {
        return {
          ...obj,
          [item.dataset.href]: item,
        };
      },
      {}
    );

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      onTargetIntersect(anchors),
      observerOptions
    );

    Object.values(links).forEach((link) => {
      observer.observe(document.querySelector(`#${link.id}`));
    });

    return () => observer.disconnect();
  }, [links]);

  return <NavigationBlockContent className={className} links={links} />;
};

export default NavigationBlock;
