import styles from './styles.module.css';

export default function ContentBlock({text, alt, source}) {
  return (
    <div class={styles.flexContainer}>
        <p>{text}</p>
        <img alt={alt} src={source}/>
    </div>
  );
}