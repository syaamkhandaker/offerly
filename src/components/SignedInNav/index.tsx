export default function SignedInNav(prop: { name: string }) {
  const handleSignOut = () => {
    localStorage.removeItem("fullName");
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  };
  return (
    <div className="flex justify-between w-full px-10 items-center">
      <div className="text-xl">Hi, {prop.name}!</div>
      <div className="flex items-center gap-10">
        <button>Refresh</button>
        <button
          className="border border-solid px-4 py-2 text-xl rounded-md hover:bg-gray-200 hover:text-black transition"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
