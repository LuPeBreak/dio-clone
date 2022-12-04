import React from "react";

import { Container, NameText, Progress, UserPicture } from "./styles";

function UserInfo({ name, img, percentual }) {
  return (
    <Container>
      <UserPicture src={img} />
      <div>
        <NameText>{name}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
}

export default UserInfo;
