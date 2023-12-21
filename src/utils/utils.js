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

export { getData, filterData, debounce };
