import React from "react";
import styled from "styled-components";
import Recomend from "../Recommend/recomm";
import Slides from "../Slides/slide";
import Viewers from "../Viewers/view";

const Home = () => {
  return (
    <Container>
      <Slides/>
      <Viewers />
      <Recomend />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100%;
  min-height: calc(100vh - 70px);
  width: 100%;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: url("/Assets/images/home-background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
  }
`;
