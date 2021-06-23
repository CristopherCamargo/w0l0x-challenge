import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { LinguiHOC, Layout } from "./hocs";
import { AppRoutes } from "./routes";
import { store } from "@/store";

import "@/styles/theme.scss";
import "@/styles/main.scss";
import "@/styles/atoms.scss";
import "@/styles/molecules.scss";

export const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Provider store={store}>
        <LinguiHOC>
          <Layout>
            <AppRoutes />
          </Layout>
        </LinguiHOC>
      </Provider>
    </Suspense>
  );
};
