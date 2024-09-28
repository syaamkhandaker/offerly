import { Nav, SignInWithGoogleButton } from "@/components";

export default function Home() {
  return (
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
  );
}
