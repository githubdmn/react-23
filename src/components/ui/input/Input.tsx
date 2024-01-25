import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error: string;
};

export const Input = ({ label, error, ...props }: InputProps) => {
  const inputClassName = `${styles.input} ${
    error ? styles.errorInputBorder : styles.defaultInputBorder
  }`;

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>
        <p>{label}</p>
        <input className={inputClassName} placeholder={label} {...props} />
        {error && <p className={styles.errorMessage}>{error}</p>}
      </label>
    </div>
  );
};
