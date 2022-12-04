import React from "react";
import { Controller } from "react-hook-form";

import { InconContainer, InputContainer, InputText, ErrorText } from "./styles";

function Input({ leftIcon, name, control, errorMessage, ...rest }) {
  return (
    <>
      <InputContainer>
        {leftIcon && <InconContainer>{leftIcon}</InconContainer>}
        <Controller
          defaultValue={""}
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
}

export default Input;
