import styled from "styled-components";

export const ScreenMobile = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #000000, #271d42);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContainerFormMobile = styled.section`
  width: 350px;
  height: 500px;
  z-index: 10;
  border-radius: 16px;
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
    width: 100px;
    margin: 20px auto 0 auto;
    background-color: #624aa7;
    color: #ffffff;
    font-weight: bold;
  }
  span {
    color: #ffffff;
    font-size: 15px;

    a {
      font-weight: 600;
      color: #624aa7;
      cursor: pointer;
    }
  }
`;

export const ContainerImageMobile = styled.section`
  position: relative;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const ImageMobile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ImageLogo = styled.img`
  width: 100px;
  height: 100px;
`;
