import SignInWithGoogleButton from "../SignInWithGoogleButton";

export default function Nav() {
  return (
    <div className="flex justify-between p-10 items-center">
      <div className="text-xl">Logo</div>
      <SignInWithGoogleButton />
    </div>
  );
}
