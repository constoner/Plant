import React from "react";
import PageData from "./Context";
import usePageState from "./usePageState";

import App from "./App";

const AppContainer = () => {
  const state = usePageState();
  return (
    <PageData.Provider value={state}>
      <App />
    </PageData.Provider>
  );
};

export default AppContainer;
