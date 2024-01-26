import styles from './login.module.css';
import publicStyles from '../../../shared/styles/public-styles/publicStyles.module.css';
import { Button } from '../../../components/ui/button/Button';
import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { LoginFormData, loginFormFields, loginSchema } from './loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormInput } from '../../../components/ui/input/FormInput';

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const handleLoginFormSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.loginHeaderWrapper}>
        <h1>Welcome to Todo application</h1>
        <p>Login to your account</p>
      </div>
      <form
        onSubmit={handleSubmit(handleLoginFormSubmit)}
        className={publicStyles.formWrapper}
      >
        <FormInput
          name={loginFormFields.email}
          register={register}
          label={'Email'}
          error={errors[loginFormFields.email]}
          type={'email'}
        />
        <FormInput
          name={loginFormFields.password}
          register={register}
          label={'Password'}
          error={errors[loginFormFields.password]}
          type={'password'}
        />
        <Button>Log In</Button>
      </form>
      <div className={publicStyles.footerWrapper}>
        <p>Don't have an account?</p>
        <Link to={routes.register}>Register</Link>
      </div>
    </>
  );
};
