import styles from './styles.module.css';

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={`${styles.button} ${
        props.primary
          ? styles.primaryButton
          : props.secondary
          ? styles.secondaryButton
          : ''
      }`}
    >
      {children}
    </button>
  );
}
