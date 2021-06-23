import React from "react";
import { Trans } from "@lingui/react";
import { Button, ButtonTypes } from "@/components/atoms";

export const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Trans id="home" />
      </li>
      <li>
        <Trans id="benefits" />
      </li>
      <li>
        <Button type={ButtonTypes.Secondary}>
          <Trans id="login" />
        </Button>
      </li>
    </ul>
  </nav>
);
