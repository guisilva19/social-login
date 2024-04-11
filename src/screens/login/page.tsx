import {
  Container,
} from "./styled";

export default function Login() {
  return (
    <>
      <Container>
        {/* <LoginForm>
          <TitleForm>Login</TitleForm>
          <LoginInputs>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </LoginInputs>
          <LoginButton>Entrar</LoginButton>
          <SocialButtons>
            <GoogleLogin
              width={50}
              theme="outline"
              shape="circle"
              text="signin_with"
              logo_alignment="center"
              ux_mode="popup"
              locale="pt"
              onSuccess={(response) => {
                const infoUser = jwtDecode(response.credential);
                console.log(infoUser);
              }}
            />
          </SocialButtons>
        </LoginForm> */}
      </Container>
    </>
  );
}
