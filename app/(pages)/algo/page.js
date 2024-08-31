import fs, { link } from "fs";
import Link from "next/link";
export default function Algo() {
  const months = fs.readdirSync(`./public/algo`);
  // console.log(months);
  return (
    <>
      <h2>월</h2>
      <ul>
        {months.map((month, index) => (
          <li key={index}>
            <Link href={"algo/" + month + "/"}>{month}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
