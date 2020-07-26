import React from "react";
import {SideNavigation} from "../shared/sidenav/SideNavigation";
import {Container} from "@material-ui/core";

export const Home = () => {
  return (
    <>
      <SideNavigation />
      <Container>
        <Container item xs={3}>
          Hello
        </Container>
        <Container item xs={3}>
          Hello
        </Container>
        <Container item xs={3}>
          Hello
        </Container>
      </Container>
    </>
  );
};
