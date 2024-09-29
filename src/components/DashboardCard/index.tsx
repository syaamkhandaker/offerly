export default function DashboardCard(prop: {
  i: number;
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
  return (
    <div className="border border-white p-10 rounded-lg flex justify-center items-center flex-col h-[700px] w-full">
      <div>Index: {prop.i}</div>
      <div>Source: {prop.src}</div>
      <div>Event: {prop.event}</div>
      <div>Company: {prop.company}</div>
      <div>Role: {prop.role}</div>
      <div>Date Issued: {prop.date_issue.toDateString()}</div>
      <div>Date Due: {prop.date_due.toDateString()}</div>
      <div>Days Left: {daysLeft}</div>
    </div>
  );
}
