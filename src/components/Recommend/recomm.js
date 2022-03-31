import React from "react";
import styled from "styled-components";
import Data from "../Data.json";
import {Link} from "react-router-dom";


const Recommend = () => {
  return (
    <Container>
      <h3 style={{color: "white"}}>
        <strong>Recomended for you</strong>
      </h3>
      <Wrapper>
      {Data?.map((props) => (
          <Main key={props.id} to={`/detail/${props.id1}`}>
            <img src={props.cardImg} alt="" />
          </Main>
        ))}
      </Wrapper>
    </Container>
  );
};
export default Recommend;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

`;
const Wrapper = styled.div`
  width: 98%;
  margin-top: 20px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Main = styled(Link)`
  height: 200px;
  width: 100%;
  border-radius: 10px;
  border: 3px solid white;


  :hover {
    border: 2px solid white;
    transition: all 400ms;
    transform: scale(1.05);
    cursor: pointer;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
