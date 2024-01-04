import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToAnchor = () => {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash === '') window.scrollTo(0, 0)
    else {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
          })
        }
      }, 0)
    }
  }, [pathname, hash, key])
}

const getData = (url) => {
  return fetch(process.env.PUBLIC_URL + url, {
    headers: {
      "Content-Type": "application/json",
      Accep: "application/json"
    }
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
    }).then((response) => {
      return response.json();
    });
};

const filterData = (dataArray, filter) => {

  let restData = null;
  const partialData = dataArray.filter((item) => {
    return item.tags.includes(filter);
  });
  if (partialData.length > 4) {
    restData = partialData.splice(4, partialData.length - 4);
  }
  return { partialData, restData };

};

const debounce = (cb, timing) => {
  return function (...args) {
    let previousCall = this.lastCall
    this.lastCall = Date.now()

    if (previousCall && this.lastCall - previousCall <= timing) {
      clearTimeout(this.lastCallTimer)
    }

    this.lastCallTimer = setTimeout(() => cb(...args), timing)

  }
}

export { useScrollToAnchor, getData, filterData, debounce };
