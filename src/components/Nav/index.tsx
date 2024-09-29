import SignInWithGoogleButton from "../SignInWithGoogleButton";
import logo from "@/assets/OfferlyLogo.png";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="flex justify-between p-10 items-center">
      <Image src={logo} alt="Logo" width={80} height={80} />
      <SignInWithGoogleButton />
    </div>
  );
}
