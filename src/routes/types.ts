export type IRoute = {
  name: string;
  path: string;
  exact: boolean;
  component: React.LazyExoticComponent<() => JSX.Element>;
};