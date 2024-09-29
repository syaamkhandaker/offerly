"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SignedInNav from "@/components/signedinnav";

export default function DashBoardPage() {
  const BackButton = () => {
    const pathname = usePathname();
    const backUrl = pathname.slice(0, pathname.lastIndexOf("/"));
    return backUrl;
  };

  const resources = [
    {
      name: "Container With Most Water",
      link: "https://leetcode.com/problems/container-with-most-water/description/",
    },
    {
      name: "Remove Nth Node From End Of List",
      link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/",
    },
    {
      name: "Palindrome Partitioning",
      link: "https://leetcode.com/problems/palindrome-partitioning/description/",
    },
    {
      name: "Burst Balloons",
      link: "https://leetcode.com/problems/palindrome-partitioning/description/",
    },
  ];

  const backURL = BackButton();

  const calculateDaysLeft = (dueDate: Date) => {
    const currentDate = new Date();
    const timeDifference = dueDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  //const daysLeft = calculateDaysLeft(prop.date_due);
  //const daysLeftText = daysLeft <= 0 ? "Completed" : `${daysLeft}`;

  return (
    <div>
      <div className="absolute top-10 w-full">
        <SignedInNav name={"Syaam"} />
      </div>
      <div className="flex flex-col h-screen w-screen mt-24 p-10">
        <Link href={backURL}>
          <button>{"<-"} Back</button>
        </Link>
        <div className="flex flex-col items-center w-full">
          <div className="text-[80px]">
            {"OA"} for {"Citadel"}
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="text-[120px]">{"29"}</div>
            <div className="text-2xl">Days Left</div>
          </div>
          <div className="flex flex-col text-center mt-[60px] gap-8">
            <div className="text-3xl">
              <div>{"SWE"}</div>
            </div>
            <div className="text-3xl">
              <div>Date Issued: {"Some issue date"}</div>
            </div>
            <div className="text-3xl">
              <div>Date Due: {"Some due date"}</div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-4 gap-6 mt-12">
            <div className="text-center text-3xl">Suggested Resources: </div>
            <div className="list-disc list-inside text-xl w-full flex flex-col text-center gap-6">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="border border-white rounded-lg py-2 px-4 hover:bg-gray-200 hover:text-black transition">
                    {resource.name}
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-[70px] border border-white h-48 flex justify-center items-center">
              Some Text Editor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
