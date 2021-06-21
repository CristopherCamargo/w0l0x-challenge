import { IRoute } from "./types";
import { getLazyNamedComponent } from "../lib";

const Home = getLazyNamedComponent(() => import("../components/pages"), "Home");
const List = getLazyNamedComponent(() => import("../components/pages"), "List");

export const routes: IRoute[] = [
  {
    name: "Home Landing page",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "Pokemon list",
    path: "/list",
    exact: true,
    component: List,
  },
];
