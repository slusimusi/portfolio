import CodeBlock from "@theme/CodeBlock";
import MethodBlock from "./MethodBlock";
import styles from "./style.module.css";

export default function ApiBlock({ method, link, methodClass }) {
    return (
      <div className={styles.flexContainer}>
        <MethodBlock className={methodClass} method={method}></MethodBlock>
        <CodeBlock language="js">{link}</CodeBlock>
      </div>
    );
  }