import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who am I?',
    description: (
      <>
        Hello!<br/>
My name is Olga Taranukha. Also, feel free to call me Helga :) <br/>
I am a technical writer with over 5 years of general experience across FinTech, IT, and FMCG industries.<br/>
      </>
    ),
  },
  {
    title: 'My expertise',
    description: (
      <>
        I work with the different types of technical documentation, such as<br/>
        <ul>
          <li>Guides</li>
          <li>Knowledge base documentation</li>
          <li>Product documentation</li>
          <li>Tutorials</li>
          <li>API documentation</li>
          <li>FAQs</li>
        </ul>
        In addition to this, I am aware of Docs-as-Code concept.
      </>
    ),
  },
  {
    title: 'Tools',
    description: (
      <>
        In my work, I use such tools as
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
        Feel free to write me via <a href="https://www.linkedin.com/in/olgataranukha/">Linkedin</a>, <a href="mailto:o.taranukha.work@gmail.com">Email</a>, or <a href="https://github.com/slusimusi">Github</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
