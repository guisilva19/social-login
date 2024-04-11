import styled from "styled-components";

export const ScreenWeb = styled.main`
  width: 100vw;
  height: 100vh;
  display: none;
  overflow: hidden;
  justify-content: space-between;
  background: linear-gradient(to bottom right, #000000, #271d42);

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ContainerFormWeb = styled.section`
  width: 400px;
  height: 100vh;
  background-color: #ffffff;
  padding-top: 100px;
  gap: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .input {
    width: 100%;
    height: 52px;
    color: #fff;
  }

  .button {
    width: 150px;
    margin: 20px auto 0 auto;
    background-color: #624aa7;
    color: #ffffff;
    font-weight: bold;
  }

  span {
    color: #475569;

    a {
      font-weight: 600;
      color: #624aa7;
      cursor: pointer;
    }
  }
`;

export const ContainerImageWeb = styled.section`
  position: relative;
  width: 80%;
  height: 100vh;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
  }
`;

export const ImageWeb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
