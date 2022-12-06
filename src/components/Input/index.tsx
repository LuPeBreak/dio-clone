import React from "react";
import { Controller } from "react-hook-form";

import { InconContainer, InputContainer, InputText, ErrorText } from "./styles";
import { IInput } from "./types";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInput) => {
  return (
    <>
      <InputContainer>
        {leftIcon && <InconContainer>{leftIcon}</InconContainer>}
        <Controller
          defaultValue={""}
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <InputText value={value} onChange={onChange} {...rest} />
          )}
        />
      </InputContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
};

export default Input;
