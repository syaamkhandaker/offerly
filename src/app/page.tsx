import { Nav, SignInWithGoogleButton } from "@/components";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Home() {
  return (
    <GoogleOAuthProvider clientId="494862578435-qc80r15jvnue6e0g2lovol0iao5mo9ei.apps.googleusercontent.com">
      <div className="w-screen h-screen">
        <Nav />
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-[300px]">Offerly</h1>
            <div className="ml-10">
              <p className="text-xl">
                Your one stop shop for interview management and preparation
              </p>
              <div className="mt-10">
                <SignInWithGoogleButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
