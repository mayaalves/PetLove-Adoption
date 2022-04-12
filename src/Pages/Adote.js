import React from "react";
import styled from "styled-components";
import CachorroBranco from "./CachorroBranco.jpg";
import CachorroMarron from "./CachorroMarron.jpg";
import CachorroPreto from "./CachorroPreto.jpg";
import CachorroBicolor from "./CachorroBicolor.jpg";
import CachorroCaramelo from "./CachorroCaramelo.jpg";
import NinhadaCachorro from "./NinhadaCachorro.jpg";
import GatoMalhadoC from "./GatoMalhadoC.jpg";
import GatoCinza from "./GatoCinza.jpg";
import GatoLaranja from "./GatoLaranja.jpg";
import GatoBicolor from "./GatoBicolor.jpg";
import GatoMalhadoE from "./GatoMalhadoE.jpg";
import NinhadaGatos from "./NinhadaGatos.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Div = styled.div`
  border-radius: 150px;
  margin: 8vh;
  outline-offset: -8px;
  position: relative;
  overflow: hidden;
`;
const Img = styled.img`
  width: 35vh;
  height: 35vh;
  border-radius: 150px;
  inset: 0;
  object-fit: cover;
  transition: transform 0.75s;
  &:hover {
    transform: scale(1.15);
  }
`;
const Button = styled.button`
  margin-top: 32vh;
  margin-left: -16vh;
  background-color: #85a6a3;
  z-index: 9;
  width: 14vh;
  height: 6vh;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: transform 0.75s;
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    background-color: #d77f44;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Div>
          <Img src={CachorroBranco} alt="Cachorro branco na grama" />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img src={CachorroMarron} alt="Cachorro marron na grama" />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img src={CachorroPreto} alt="Cachorro preto na grama" />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img src={CachorroBicolor} alt="Cachorro preto e branco na grama" />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img src={CachorroCaramelo} alt="Cachorro caramelo na grama" />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img src={NinhadaCachorro} alt="Ninhada de filhotes de cachorro" />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img src={GatoMalhadoC} alt="Gato malhado claro na grama" />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img src={GatoCinza} alt="Gato cinza na grama" />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img src={GatoLaranja} alt="Gato laranja na grama" />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img
            src={GatoBicolor}
            alt="Filhote de gato preto e branco na grama"
          />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img src={GatoMalhadoE} alt="Gato malhado na grama" />
        </Div>
        <Button>Adote</Button>
        <Div>
          <Img src={NinhadaGatos} alt="Filhotes de gato" />
        </Div>
        <Button>Adote</Button>
      </Container>
    );
  }
}
