import React from "react";
import styled from "styled-components";
import CatDog from "./CatDog.png";

const Div = styled.div`
  margin-left: -18vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0px 100px 100px 0px;
  height: 28vh;
  width: 120vh;
  margin-left: -10vh;
  background-color: #d77f44;
`;
const H2 = styled.h2`
  font-size: 4vh;
  margin: 1vh;
`;
const Button = styled.button`
  color: #171518;
  background-color: #faf3eb;
  width: 45vh;
  margin-top: 5vh;
  margin-left: 78vh;
  padding: 2vh;
  border-radius: 50px;
  border: none;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

const BoxPet = styled.div`
  width: 50vh;
  height: 50vh;
  border-radius: 50%;
  background: #85a6a3;
  box-shadow: 5px 5px 47px #789593, -5px -5px 47px #92b7b3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1.75s;
  &:hover {
    transform: scale(1.18);
  }
`;
const Img = styled.img`
  width: 50vh;
  height: 50vh;
  margin-top: 5vh;
  margin-left: 12vh;
`;

export default class App extends React.Component {
  render() {
    return (
      <Div>
        <Container>
          <H2>Adoção responsavel é aqui na PetLove.</H2>
          <p>Adotar é o maior ato de amor que você vai fazer ao seu pet</p>
          <Button>Conheça o novo membro da sua familia</Button>
        </Container>
        <BoxPet>
          <Img src={CatDog} alt="Cachorro e gato" />
        </BoxPet>
      </Div>
    );
  }
}
