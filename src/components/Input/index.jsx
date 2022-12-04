import React from "react";

import { InconContainer, InputContainer, InputText } from "./styles";

function Input({ leftIcon, name, ...rest }) {
  return (
    <InputContainer>
      {
        leftIcon && <InconContainer>
          {leftIcon}
        </InconContainer>
      }
      <InputText {...rest} />
    </InputContainer>
  );
}

export default Input;
