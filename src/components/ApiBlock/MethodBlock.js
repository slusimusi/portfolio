import styles from "./style.module.css";

export default function MethodBlock({ method }) {
    const methodLower = method.toLowerCase();
  
    const className = `${styles.methodBlock} ${styles[`methodBlock_${methodLower}`] || ""}`;
  
    return <strong className={className}>{method}</strong>;
  }