import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="relative w-screen">
      <div className="absolute top-10 w-full">
        <Nav />
      </div>
      <div className="flex justify-center items-center w-screen h-screen">
        <div>
          <h1 className="text-[300px]">Offerly</h1>
          <div className="ml-10">
            <p className="text-xl">
              Your one stop shop for interview managermnet and preperation
            </p>
            <button className="border border-solid mt-10 px-4 py-2 text-xl rounded-md">
              {" "}
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
