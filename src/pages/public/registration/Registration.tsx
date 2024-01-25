import { useState } from 'react';
import { Input } from '../../../components/ui/input/Input';
import publicStyles from '../../../shared/styles/public-styles/publicStyles.module.css';
import { Button } from '../../../components/ui/button/Button';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';

export const Registration = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <div>
      <h1>Register to our application</h1>
      <div className={publicStyles.formWrapper}>
        <Input
          label="Username"
          error=""
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <Input
          label="Email"
          error=""
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <Input
          label="Password"
          error=""
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
        />
        <Input
          label="Confirm Password"
          error=""
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
        />
        <Button onClick={() => console.log('test')}>Register</Button>
      </div>
      <div className={publicStyles.footerWrapper}>
        <p>Already have an account?</p>
        <Link to={routes.auth}>Log In</Link>
      </div>
    </div>
  );
};
