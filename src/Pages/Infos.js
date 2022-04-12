import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 130vh;
  display: flex;
  margin-top: 8vh;
  justify-content: center;
`;
const BoxGeral = styled.div`
  display: flex;
  padding: 9vh;
  flex-direction: column;
  width: 60vh;
  height: 122vh;
  background-color: #d77f44;
  border-radius: 89% 53% 87% 31% / 34% 24% 59% 51%;
`;
const Label = styled.label`
  font-weight: bold;
`;
const Input = styled.input`
  width: 40vh;
  height: 4vh;
  margin-top: 1vh;
  margin-bottom: 2vh;
  border-radius: 25px;
  border: none;
`;
const Checkbox = styled.input`
  width: 2vh;
  height: 2vh;
  margin: 1vh;
`;
const Legend = styled.legend`
  margin-top: 3vh;
  font-weight: bold;
`;
const Textarea = styled.textarea`
  width: 42vh;
  height: 20vh;
  margin-top: 1vh;
  margin-left: -2vh;
  border-radius: 15px;
  border: none;
`;
const Button = styled.button`
  width: 25vh;
  height: 8vh;
  margin-top: 2vh;
  padding: 2vh;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  transition: all 0.75s;
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    background-color: #85a6a3;
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Div>
        <BoxGeral>
          <h1>Seja Voluntário</h1>
          <Label>Nome</Label>
          <Input type="text" />
          <Label>Idade</Label>
          <Input type="number" />
          <Label>E-mail</Label>
          <Input type="email" />
          <Label>Disponibilidade</Label>
          <div>
            <Label>Segunda</Label>
            <Checkbox type="checkbox" value="segunda" />
          </div>
          <div>
            <Label>Terça</Label>
            <Checkbox type="checkbox" value="terça" />
          </div>
          <div>
            <Label>Quarta</Label>
            <Checkbox type="checkbox" value="quarta" />
          </div>
          <div>
            <Label>Quinta</Label>
            <Checkbox type="checkbox" value="quinta" />
          </div>
          <div>
            <Label>Sexta</Label>
            <Checkbox type="checkbox" value="sexta" />
          </div>
          <div>
            <Label>Sabado</Label>
            <Checkbox type="checkbox" value="sabado" />
          </div>
          <div>
            <Label>Domingo</Label>
            <Checkbox type="checkbox" value="domingo" />
          </div>
          <Legend>Por que deseja ser voluntário</Legend>
          <Textarea></Textarea>
          <Button>Quero ser voluntário</Button>
        </BoxGeral>
      </Div>
    );
  }
}
