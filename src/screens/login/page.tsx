import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "../../config/enviroments";


export default function Login() {
  return (
    <>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div>
        <h1>Login</h1>
        <button>Login with google</button>
      </div>
      </GoogleOAuthProvider>
    </>
  );
}
