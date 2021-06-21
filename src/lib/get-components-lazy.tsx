import { lazy } from "react";

export const getLazyNamedComponent = (
  resolver: any,
  name: string = "default"
) => {
  return lazy(async () => {
    const resolved = await resolver();
    return { default: resolved[name] };
  });
};
