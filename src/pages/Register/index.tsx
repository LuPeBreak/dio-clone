import React from "react";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IFormData } from "./types";
import { api } from "../../services/api";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

import {
  Column,
  Container,
  SubTitleRegister,
  Title,
  TitleRegister,
  Wrapper,
} from "./styles";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo Obrigatorio"),
    email: yup.string().email("Email invalido").required("Campo Obrigatorio"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo Obrigatorio"),
  })
  .required();

const Register: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema), mode: "onChange" });

  const onRegister = async (formData: IFormData) => {
    try {
      const user = {
        name: formData.name,
        email: formData.email,
        senha: formData.password,
      };
      await api.post(`users`, user);
      navigate("/feed");
    } catch (error) {
      alert("Houve um erro tente novamente");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column className="register">
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubTitleRegister>
              Crie sua conta e make the change._
            </SubTitleRegister>
            <form onSubmit={handleSubmit(onRegister)}>
              <Input
                errorMessage={errors?.name?.message}
                name="name"
                control={control}
                placeholder="Nome Completo"
                type="text"
                leftIcon={<MdPerson />}
              />
              <Input
                errorMessage={errors?.email?.message}
                name="email"
                control={control}
                placeholder="E-mail"
                type="email"
                leftIcon={<MdEmail />}
              />
              <Input
                errorMessage={errors?.password?.message}
                name="password"
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title={"Registrar"} variant="secondary" type="submit" />
            </form>
            <SubTitleRegister>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </SubTitleRegister>
            <div>
              <span>Já tenho conta.</span>
              <Link to={"/login"} className="loginText">
                <span>Fazer login.</span>
              </Link>
            </div>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Register;
