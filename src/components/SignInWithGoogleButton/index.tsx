"use client";

import { useGoogleLogin } from "@react-oauth/google";

export default function SignInWithGoogleButton() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      localStorage.setItem("accessToken", tokenResponse.access_token);
      const res = await fetch(
        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const jsonObj = await res.json();
      console.log(jsonObj);
      const fullName = jsonObj.name;
      localStorage.setItem("fullName", fullName);
      window.location.href = "/dashboard";
    },
  });
  return (
    <button
      className="border border-solid text-xl rounded-md px-4 py-2 border-white font-semibold"
      onClick={async () => {
        login();
      }}
    >
      Sign in with Google
    </button>
  );
}
