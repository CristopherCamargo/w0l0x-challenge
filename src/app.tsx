import React, { Suspense } from "react";
import { LinguiHOC } from "./hocs";
import { AppRoutes } from "./routes";

import "./styles/main.scss";

export const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <LinguiHOC>
        <AppRoutes />
      </LinguiHOC>
    </Suspense>
  );
};
