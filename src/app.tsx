import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { LinguiHOC } from "./hocs";
import { AppRoutes } from "./routes";
import { store } from "@/store";

import "./styles/main.scss";

export const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Provider store={store}>
        <LinguiHOC>
          <AppRoutes />
        </LinguiHOC>
      </Provider>
    </Suspense>
  );
};
