import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

import Button from "../Button";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  UserPicture,
} from "./styles";

import { IHeader } from "./types";

const Header: React.FC<IHeader> = ({ authenticated }: IHeader) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <img
            src={logo}
            alt="Logo da Dio"
            onClick={() => {
              navigate("/");
            }}
          />
          {authenticated ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {authenticated ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/21126750?v=4" />
          ) : (
            <>
              <MenuRight to={"/"}>Home</MenuRight>
              <Button
                title={"Entrar"}
                onClick={() => {
                  navigate("/login");
                }}
              />
              <Button title={"Cadastrar"} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
