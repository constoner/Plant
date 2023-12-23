import React, { useState, useEffect, useRef } from "react";
import "./style.css";

import ImgNextGen from "../ImgNextGen/ImgNextGen";
import Button from "../Button/Button";

const About = () => {
  const [value, setValue] = useState("Read More");
  const accordionRef = useRef(null);

  const aboutHeight = {
    close: "150px",
    open: "1000px",
  };

  useEffect(() => {
    aboutHeight.open = `${accordionRef.current.scrollHeight}px`;
  }, [value]);

  const onButtonClick = (elem) => {
    elem.current.toggleAttribute("is-active");
    elem.current.style.maxHeight = elem.current.attributes["is-active"]
      ? aboutHeight.open
      : aboutHeight.close;
    setValue(!elem.current.attributes["is-active"] ? "Read More" : "Read Less");
  };

  return (
    <section className="about" id="about">
      <div className="about__image-container">
        <ImgNextGen
          className="about__image"
          srcJpgX2="/images/decoration/promo-2@2x.jpg"
          fallback="/images/decoration/promo-2@2x.jpg"
          alt="Beautiful bonsai tree in a wide pot with a bright green crown."
          width="446"
          height="440"
          style={{ filter: "grayscale(33%)" }}
        />
      </div>
      <div className="about__content">
        <p className="about__title about__title--add title">About Us</p>
        <h2 className="about__title title">Who We Are</h2>
        <p className="about__text">
          Plant, established in August 2012, has become the one of the huge
          online plant platforms.
        </p>
        <div className="about__accordion" ref={accordionRef}>
          <p>
            We boast an extensive selection of over 1,000 plants to appeal to
            garden enthusiasts from all backgrounds and please even the most
            discerning of buyers. As an authority in horticulture, we are known
            for growing plants used in display gardens at prestigious flower
            shows.
          </p>
          <p>
            We also collaborate with renowned garden designers to create some of
            the most famous gardens around the world. This co-operation allows
            us to continually update and expand our range of plants, ensuring
            that we always include the latest and most popular gardening trends.
          </p>
          <p>
            Adding houseplants to your decor is a classic way to infuse your
            home with a fresh, inviting atmosphere. Choose from our wide variety
            of green plants with eye-catching shapes and foliage that add a
            permanent touch of nature to any room. For those who prefer flowers,
            we offer a range of blooming houseplants. Transform your garden with
            our outdoor plant collection, including everything from bulbs to
            climbing plants. Plant ready-to-grow trees in your outdoor spaces
            for structure and greenery, or make a statement with potted plants
            on your patio table. Look out for bee and butterfly-friendly plants
            and vibrant hanging arrangements for an extra touch of beauty. Our
            plant offerings come with various delivery options for convenience.
            Have orders delivered directly with free nominated-day delivery on
            all plants.
          </p>
        </div>
        <Button
          className="about__button"
          type="button"
          variant="button"
          onClick={() => onButtonClick(accordionRef)}
        >
          {value}
        </Button>
      </div>
    </section>
  );
};

export default About;
