import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Home from "./Pages/Home";
import Adote from "./Pages/Adote";
import Infos from "./Pages/Infos";
import Doe from "./Pages/Doe";
import Footer from "./Pages/Footer";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #171518;
  font-family: Arial, Helvetica, sans-serif;
}
body{
  background-color: #faf3eb;
}
::-webkit-scrollbar{
  width: 18px;
}
::-webkit-scrollbar-track{
  background: #faf3eb;
  border-radius: 50px;
  border: solid 4px #f6c770;
}
::-webkit-scrollbar-thumb{
  background: #f6c770;
  border-radius: 50px;
  border: dotted 4px #85a6a3;
}
`;
const List = styled.ul`
  background-color: #f6c770;
  background-image: linear-gradient(270deg, #f6c770 8%, #faf3eb 61%);
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const ItemList = styled.li`
  list-style: none;
  padding: 4vh;
  margin-right: 6vh;
`;
const Cursor = styled(Link)`
  color: #000000;
  text-decoration: none;
  transition: all 0.5s;
  &:hover {
    font-weight: bold;
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <GlobalStyle />
          <nav>
            <List>
              <ItemList>
                <Cursor to="/">Home</Cursor>
              </ItemList>
              <ItemList>
                <Cursor to="/Adote">Adote</Cursor>
              </ItemList>
              <ItemList>
                <Cursor to="/Infos">Seja Voluntário</Cursor>
              </ItemList>
              <ItemList>
                <Cursor to="/Doe">Doe</Cursor>
              </ItemList>
            </List>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Adote" element={<Adote />} />
            <Route path="/Infos" element={<Infos />} />
            <Route path="/Doe" element={<Doe />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}
