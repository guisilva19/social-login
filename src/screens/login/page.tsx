import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  return (
    <>
      <div>
        <h1>Login</h1>
        <GoogleLogin
          onSuccess={(response) => {
            const infoUser = jwtDecode(response.credential);
            console.log(infoUser);
          }}
        />
      </div>
    </>
  );
}
