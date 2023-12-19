import { useState } from "react";
import { getData } from "../../utils/loadData";

const usePageState = () => {
  const [catalogData, setCatalogData] = useState([]);
  const [catalogLoading, setCatalogLoading] = useState([]);

  const loadCatalog = () =>
    getData("/data/catalog.json", setCatalogLoading, setCatalogData);

  const [reviewsData, setReviewsData] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState([]);

  const loadReviews = () =>
    getData("/data/reviews.json", setReviewsLoading, setReviewsData);

  const [galleryData, setGalleryData] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState([]);
  const loadGallery = () =>
    getData("/data/gallery.json", setGalleryLoading, setGalleryData);

  return {
    catalogLoading,
    catalogData,
    loadCatalog,
    reviewsLoading,
    reviewsData,
    loadReviews,
    galleryLoading,
    galleryData,
    loadGallery,
  };
};

export default usePageState;
