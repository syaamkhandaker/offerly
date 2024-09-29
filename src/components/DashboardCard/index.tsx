import Link from "next/link";

export default function DashboardCard(prop: {
  i: number;
  name: string;
  email: string;
  src: string;
  event: string;
  company: string;
  role: string;
  date_issue: Date;
  date_due: Date;
}) {
  const calculateDaysLeft = (dueDate: Date) => {
    const currentDate = new Date();
    const timeDifference = dueDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return daysLeft;
  };

  const daysLeft = calculateDaysLeft(prop.date_due);
  const daysLeftText = daysLeft <= 0 ? "Completed" : `${daysLeft}`;

  return (
    <div className="border border-white p-10 rounded-lg flex justify-center items-center flex-col h-[700px] w-[1000px] bg-[#E2E2E2] text-black">
      <div className="text-[80px]">
        {prop.event} for {prop.company}
      </div>
      {daysLeftText === "Completed" ? (
        <div className="text-[50px]">{daysLeftText}</div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="text-[120px]">{daysLeftText}</div>
          <div className="text-2xl">Days Left</div>
        </div>
      )}
      <div className="flex flex-col text-center mt-[60px] gap-8">
        <div className="text-3xl">
          <div>{prop.role}</div>
        </div>
        <div className="text-3xl">
          <div>Date Issued: {prop.date_issue.toDateString()}</div>
        </div>
        <div className="text-3xl">
          <div>Date Due: {prop.date_due.toDateString()}</div>
        </div>
        <Link href={`/dashboard/${prop.i}`}>
          <button className="border border-black px-4 py-2 rounded-lg text-2xl hover:bg-black hover:text-white transition">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
