import styles from './styles.module.css';

export default function ContentBlock({text, alt, source}) {
  return (
    <div className={styles.flexContainer}>
        <p>{text}</p>
        <img alt={alt} src={require(`@site/static${source}`).default}/>
    </div>
  );
}