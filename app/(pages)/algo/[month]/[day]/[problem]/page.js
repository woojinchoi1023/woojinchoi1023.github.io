import fs from "fs";
import styles from "./style.module.scss";

export async function generateStaticParams() {
  const months = fs.readdirSync(`./public/algo`);
  const params = [];
  months.forEach((month) => {
    const days = fs.readdirSync(`./public/algo/${month}`);
    days.forEach((day) => {
      const problems = fs.readdirSync(`./public/algo/${month}/${day}`);
      problems.forEach((problem) => {
        params.push({
          month,
          // day: encodeURIComponent(day),
          // problem: encodeURIComponent(problem.slice(0, -3)),
          day,
          problem: problem.slice(0, -3),
        });
      });
    });
  });
  return params;
}

export default function Problem(props) {
  const { month } = props.params;
  const day = decodeURI(props.params.day);
  const problem = decodeURI(props.params.problem);
  const code = fs.readFileSync(
    `./public/algo/${month}/${day}/${problem}.py`,
    "utf8"
  );
  return (
    <>
      <h2>{problem}</h2>
      <pre className={styles.customPre}>
        <code>{code}</code>
      </pre>
    </>
  );
}
