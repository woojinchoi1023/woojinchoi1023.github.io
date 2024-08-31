import fs from "fs";
import Link from "next/link";
export default function Day(props) {
  const month = props.params.month;
  const day = decodeURI(props.params.day);
  const problems = fs
    .readdirSync(`./public/algo/${month}/${day}/`)
    .map((problem) => problem.slice(0, -3));
  return (
    <>
      <h2>일</h2>
      <ul>
        {problems.map((problem, index) => (
          <li key={index}>
            <Link href={`/algo/${month}/${day}/${problem}`}>{problem}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
