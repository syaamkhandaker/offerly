// import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

export default function SignInWithGoogleButton() {
  //   const login = useGoogleLogin({
  //     onSuccess: (tokenResponse) => {
  //       console.log(tokenResponse);
  //       // Send the token to the server for verification and user session creation
  //     },
  //     onError: () => {
  //       console.log("Login Failed");
  //     },
  //   });
  return (
    <button className="border border-solid text-xl rounded-md px-4 py-2 border-white font-semibold">
      Sign in with Google
    </button>
  );
}
