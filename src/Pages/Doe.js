import React from "react";
import styled from "styled-components";
import Doação from "./Doação.png";

const Div = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 50vh;
  height: 50vh;
`;

export default class Doe extends React.Component {
  render() {
    return (
      <Div>
        <Img src={Doação} alt="" />
      </Div>
    );
  }
}
