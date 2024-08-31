import fs from "fs";
import Link from "next/link";

export async function generateStaticParams() {
  return [];
}

export default function Month({ params }) {
  // const month = props.params.month;
  const { month } = params;
  const days = fs.readdirSync(`./public/algo/${month}`);
  return (
    <>
      <h2>일</h2>
      <ul>
        {days.map((day, index) => (
          <li key={index}>
            <Link href={`/algo/${month}/${day}`}>{day}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
