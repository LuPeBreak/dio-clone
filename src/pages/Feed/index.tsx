import React from "react";

import Header from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo/index";

export default function Feed() {
  return (
    <>
      <Header authenticated={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={80}
            name="Luis Felipe"
            img={"https://avatars.githubusercontent.com/u/21126750?v=4"}
          />
          <UserInfo
            percentual={30}
            name="Luis Felipe"
            img={"https://avatars.githubusercontent.com/u/21126750?v=4"}
          />
          <UserInfo
            percentual={90}
            name="Luis Felipe"
            img={"https://avatars.githubusercontent.com/u/21126750?v=4"}
          />
          <UserInfo
            percentual={40}
            name="Luis Felipe"
            img={"https://avatars.githubusercontent.com/u/21126750?v=4"}
          />
          <UserInfo
            percentual={25}
            name="Luis Felipe"
            img={"https://avatars.githubusercontent.com/u/21126750?v=4"}
          />
        </Column>
      </Container>
    </>
  );
}
