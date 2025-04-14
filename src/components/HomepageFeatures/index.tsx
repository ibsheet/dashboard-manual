import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgUrl: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    imgUrl: require('@site/static/img/moduleImg.png').default,
    description: (
      <>
        IBSheet, IBChart, IBMap 등 다양한 시각화 도구들을 사용해서 Dashboard 위젯을 만들 수 있습니다.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    imgUrl: require('@site/static/img/easyToUse.png').default,
    description: (
      <>
        손쉽게 대시보드를 만들고, 위젯을 추가/삭제/업데이트를 할 수 있습니다.
      </>
    ),
  },
  {
    title: 'Powered Compatibility',
    imgUrl: require('@site/static/img/compatibility.png').default,
    description: (
      <>
        현재 시장에 유통되는 다양한 브라우저 환경에서도 동작 가능한 강력한 호환성을 가지고 있습니다.
      </>
    ),
  },
];

function Feature({title, imgUrl, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img style={{ width: '40%' }} src={imgUrl}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
