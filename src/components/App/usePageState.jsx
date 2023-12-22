import { useState } from "react";
import { getData, filterData } from "../../utils/utils";
import { RESOURCES } from "../../utils/RESOURCES";

const usePageState = () => {
  const [catalogData, setCatalogData] = useState([]);
  const [catalogLoading, setCatalogLoading] = useState(true);
  const [filter, setFilter] = useState("new");
  const [viewState, setViewState] = useState(false);

  const loadCatalog = () => {
    getData(RESOURCES.catalog)
      .then((data) => filterData(data, filter))
      .then((data) => {
        setCatalogData(data);
        setCatalogLoading(false);
      })
      .catch((e) => {
        setCatalogLoading(false);
        console.warn(
          "Data is corrupted. Please, reload the page" + ", " + e.message
        );
      });
  };

  const catalogState = () => {
    return {
      catalogData,
      setCatalogData,
      catalogLoading,
      setCatalogLoading,
      filter,
      setFilter,
      loadCatalog,
      viewState,
      setViewState,
    };
  };

  const [reviewsData, setReviewsData] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const loadReviews = () =>
    getData(RESOURCES.reviews, setReviewsLoading, setReviewsData)
      .then((data) => {
        setReviewsData(data);
        setReviewsLoading(false);
      })
      .catch((e) => {
        setReviewsLoading(false);
        console.warn(
          "Data is corrupted. Please, reload the page" + ", " + e.message
        );
      });

  const reviewsState = () => {
    return {
      reviewsData,
      setReviewsData,
      reviewsLoading,
      setReviewsLoading,
      loadReviews,
    };
  };

  const [galleryData, setGalleryData] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const loadGallery = () =>
    getData(RESOURCES.gallery, setGalleryLoading, setGalleryData)
      .then((data) => {
        setGalleryData(data);
        setGalleryLoading(false);
      })
      .catch((e) => {
        setGalleryLoading(false);
        console.warn(
          "Data is corrupted. Please, reload the page" + ", " + e.message
        );
      });

  const galleryState = () => {
    return {
      galleryData,
      setGalleryData,
      galleryLoading,
      setGalleryLoading,
      loadGallery,
    };
  };

  const [popup, setPopup] = useState({
    isBad: false,
    value: "",
    ivVisible: true,
  });
  const popupState = () => {
    return { popup, setPopup };
  };

  return {
    catalogState,
    reviewsState,
    galleryState,
    popupState,
  };
};

export default usePageState;
