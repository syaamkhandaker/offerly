"use client";

import { useGoogleLogin } from "@react-oauth/google";

export default function SignInWithGoogleButton() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) =>
      localStorage.setItem("accessToken", tokenResponse.access_token),
  });
  return (
    <button
      className="border border-solid text-xl rounded-md px-4 py-2 border-white font-semibold"
      onClick={async () => {
        login();
        window.location.href = "/dashboard";
      }}
    >
      Sign in with Google
    </button>
  );
}
