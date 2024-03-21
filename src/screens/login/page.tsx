import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  return (
    <>
      <div>
        <h1>Login</h1>
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
      </div>
    </>
  );
}
