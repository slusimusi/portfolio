import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who am I?',
    description: (
      <>
Hi, I'm Olga Taranukha. <br/>
Technical Writer with a background in Frontend Development and Business Analysis.<br/>
I don't just write docs. I understand how code works and what users need. With 5+ years in FinTech, IT, and FMCG, I specialize in creating clear, structured documentation for complex systems.
      </>
    ),
  },
  {
    title: 'My expertise',
    description: (
      <>
        <ul>
          <li>Docs-as-Code approach</li>
          <li>Simplified Technical English (STE)</li>
          <li>Guides</li>
          <li>Knowledge base documentation</li>
          <li>Product documentation</li>
          <li>Tutorials</li>
          <li>API documentation</li>
          <li>FAQs</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Stack',
    description: (
      <>
        <ul>
          <li>Markdown</li>
          <li>Docusaurus</li>
          <li>Swagger</li>
          <li>Confluence</li>
          <li>VS Code</li>
          <li>Postman</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Contacts',
    description: (
      <>
        Feel free to write me via <a href="https://www.linkedin.com/in/olgataranukha/">Linkedin</a>, <a href="mailto:o.taranukha.work@gmail.com">Email</a>, or <a href="https://t.me/OlgaTaranukha">Telegram</a>.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--left padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
