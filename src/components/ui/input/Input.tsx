import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  register?: () => void;
};

export const Input = ({ label, error, register, ...props }: InputProps) => {
  const inputClassName = `${styles.input} ${
    error ? styles.errorInputBorder : styles.defaultInputBorder
  }`;

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>
        <p>{label}</p>
        <input
          className={inputClassName}
          placeholder={label}
          {...props}
          {...(register?.() || {})}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
      </label>
    </div>
  );
};
