import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Stepper({ children }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(1);

  const childrenArrayWithStepProp = childrenArray.map(
    ({ props, ...child }) => ({ ...child, props: { ...props, step, setStep } })
  );

  const currentChild = childrenArrayWithStepProp[step - 1];

  return (
    <div className={styles.container}>
      <div className={styles.stepWrapper}>
        <h1 className={styles.stepTitle}>
          Check process.{' '}
          <span className={styles.titleInformation}>
            {currentChild.props.title}
          </span>
        </h1>
        <div className={styles.followPathContainer}>
          <div className={styles.followPath}>
            <div className={styles.path}>
              <div
                style={{
                  width: `${((step - 1) * 100) / (childrenArray.length - 1)}%`,
                }}
                className={styles.colorPath}
              ></div>
            </div>
            <div className={styles.stepsContainer}>
              {childrenArray.map((child, index) => {
                return (
                  <div
                    key={index}
                    active={step >= index + 1 ? 'true' : 'false'}
                    className={styles.step}
                  >
                    <span className={styles.stepNumber}>{index + 1}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {currentChild}
      </div>
    </div>
  );
}
