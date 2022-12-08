import styled from "styled-components";

export const Container = styled.div`
  width: 80%;

  margin: 20px auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  &.register {
    align-items: center;
  }

  span {
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: #23dd7a;
    margin-left: 5px;
  }
  button{
    width: 85%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #fff;
`;

export const TitleRegister = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const SubTitleRegister = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  max-width: 320px;
  margin: 20px 0;
`;
