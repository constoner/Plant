const getData = (url, loadingCb, cb) => {
  loadingCb(true);
  fetch(process.env.PUBLIC_URL + url, {
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
        loadingCb(false);
        throw error;
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      cb(data);
      loadingCb(false)
    })
    .catch((e) => {
      loadingCb(false);
      console.warn(
        "Data is corrupted. Please, reload the page" + ", " + e.message
      );
    }
    );
}

export { getData };
