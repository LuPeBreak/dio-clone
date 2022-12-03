import React from "react";

import Header from "../../components/Header";

import banner from "../../assets/banner.png";

import { Container, TextContent, Title, TitleHighlight } from "./styles";
import Button from "../../components/Button/index";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={() => {}}
          />
        </div>
        <div>
          <img src={banner} alt="Imagem Principal" />
        </div>
      </Container>
    </>
  );
}
