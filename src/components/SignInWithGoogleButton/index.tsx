"use client";

import { useGoogleLogin } from "@react-oauth/google";

export default function SignInWithGoogleButton() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <button
      className="border border-solid text-xl rounded-md px-4 py-2 border-white font-semibold"
      onClick={() => login()}
    >
      Sign in with Google
    </button>
  );
}
