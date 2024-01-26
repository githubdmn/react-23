import { FormInput } from '../../../components/ui/input/FormInput';
import publicStyles from '../../../shared/styles/public-styles/publicStyles.module.css';
import { Button } from '../../../components/ui/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../../router/routes';
import {
  RegisterFormData,
  registerFormFields,
  registerSchema,
} from './registartionSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

export const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
    watch,
  } = useForm<RegisterFormData>({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
  });

  const { password, confirmPassword } = watch();

  const handleRegisterFormSubmit = (data: RegisterFormData) => {
    //TODO: update with the backend POST request, send data to BE then redirect to Login
    navigate(routes.auth);
    console.log(data);
  };

  useEffect(() => {
    if (password?.length > 4 && confirmPassword?.length > 4) {
      if (password !== confirmPassword) {
        setError(registerFormFields.password, {
          message: 'Password and confirm password must be the same',
        });
      } else {
        clearErrors(registerFormFields.password);
      }
    }
  }, [password, confirmPassword, clearErrors, setError]);

  return (
    <main>
      <h1>Register to our Todo application</h1>
      <form
        onSubmit={handleSubmit(handleRegisterFormSubmit)}
        className={publicStyles.formWrapper}
      >
        <FormInput
          name={registerFormFields.username}
          register={register}
          label="Username"
          error={errors[registerFormFields.username]}
        />
        <FormInput
          name={registerFormFields.email}
          register={register}
          label="Email"
          error={errors[registerFormFields.email]}
        />
        <FormInput
          name={registerFormFields.password}
          register={register}
          label="Password"
          error={errors[registerFormFields.password]}
          type="password"
        />
        <FormInput
          name={registerFormFields.confirmPassword}
          register={register}
          label="Confirm Password"
          error={errors[registerFormFields.confirmPassword]}
          type="password"
        />
        <Button>Register</Button>
      </form>
      <div className={publicStyles.footerWrapper}>
        <p>Already have an account?</p>
        <Link to={routes.auth}>Log In</Link>
      </div>
    </main>
  );
};
