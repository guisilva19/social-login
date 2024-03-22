import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 40px 0px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  margin: 0 20px;
  gap: 20px;
`;

export const TitleForm = styled.h1`
  font-size: 32px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Input = styled.input`
  width: 70%;
  padding: 15px 20px;
  font-size: 16px;
  border-radius: 16px;
  border: none;
  background-color: #f0f0f0;
  outline: none;
  color: #000;
`;

export const LoginInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const LoginButton = styled.button`
  width: 30%;
  padding: 12px;
  background-color: #4e54c8;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  &:hover {
    background-color: #8f94fb;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
