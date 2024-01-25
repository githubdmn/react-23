import { useState } from 'react';
import { Input } from '../../../components/ui/input/Input';
import styles from './login.module.css';
import publicStyles from '../../../shared/styles/public-styles/publicStyles.module.css';
import { Button } from '../../../components/ui/button/Button';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';

export const Login = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <>
      <div className={styles.loginHeaderWrapper}>
        <h1>Welcome to Todo application</h1>
        <p>Login to your account</p>
      </div>
      <div className={publicStyles.formWrapper}>
        <Input
          label="Email"
          error=""
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          type="email"
        />
        <Input
          label="Password"
          error=""
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
        />
        <Button onClick={() => console.log('test')}>Log In</Button>
      </div>
      <div className={publicStyles.footerWrapper}>
        <p>Don't have an account?</p>
        <Link to={routes.register}>Register</Link>
      </div>
    </>
  );
};
