import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

function Card() {
  return (
    <CardContainer>
      <ImageBackground src="https://imagekit.io/blog/content/images/2020/12/image-resizing-html.jpg" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/21126750?v=4" />
          <div>
            <h4>Luis Felipe</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito no curso de html e css no bootcamp dio do Global
            avanade...<strong>Saiba Mais</strong>{" "}
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}

export default Card;
