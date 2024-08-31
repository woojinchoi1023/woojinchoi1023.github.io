import fs from "fs";
// import styles from "./style.module.scss";
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
      <pre>
        <code>{code}</code>
      </pre>
    </>
  );
}
