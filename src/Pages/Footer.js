import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  background-color: #f6c770;
  background-image: linear-gradient(270deg, #faf3eb 8%, #f6c770 61%);
`;
const H1 = styled.h1`
  font-size: 2vh;
  margin-left: 5vh;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <Div>
        <H1>Página desenvolvida para o curso de Front-end do Vai na Web</H1>
      </Div>
    );
  }
}
