import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Header from "../../components/Header";
import Button from "../../components/Button/index";
import Input from "../../components/Input/index";

import { api } from "../../services/api";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({
    email: yup.string().email("Email invalido").required("Campo Obrigatorio"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo Obrigatorio"),
  })
  .required();

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (formaData) => {
    try {
      const { data } = await api.get(
        `users?email=${formaData.email}&senha=${formaData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha invalidos");
      }
    } catch (error) {
      alert("Houve um erro tente novamente");
    }
  };

  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/feed");
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

        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                errorMessage={errors?.email?.message}
                name="email"
                control={control}
                placeholder="E-mail"
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
              <Button title={"Entrar"} variant="secondary" type="submit" />
            </form>

            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
