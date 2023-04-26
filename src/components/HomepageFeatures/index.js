import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compact',
    Svg: require('@site/static/img/icons/compact.svg').default,
    description: (
      <>
        Le format du Picobot permet de l'emporter facilement.
      </>
    ),
  },
  {
    title: 'Modulable',
    Svg: require('@site/static/img/icons/modulable.svg').default,
    description: (
      <>
        Facile à assembler et à réparer. Les pièces du Picobot sont interchangeables, ce qui assure sa réparabilité.
      </>
    ),
  },
  {
    title: 'Abordable',
    Svg: require('@site/static/img/icons/abordable.svg').default,
    description: (
      <>
        Tous les composants utilisés pour réaliser le Picobot sont accessibles et peu onéreux.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
