import styles from './registration.module.css';
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
import { useMutation } from 'react-query';
import { AxiosResponse } from 'axios';
import { RegisterResponse } from '../../../api/responses/RegisterResponse';
import { apiEndpoints } from '../../../api/apiEndpoints';
import { apiClient } from '../../../api/axiosClient';

export const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    setError,
    clearErrors,
    watch,
    reset,
  } = useForm<RegisterFormData>({
    mode: 'onChange',
    resolver: zodResolver(registerSchema),
  });

  const { password, confirmPassword } = watch();

  const { mutate, isLoading, isError } = useMutation<
    AxiosResponse<RegisterResponse>,
    Error,
    Omit<RegisterFormData, 'confirmPassword'>
  >({
    mutationFn: (data) => apiClient.post(apiEndpoints.post.register, data),
    onSuccess: () => {
      navigate(routes.auth);
    },
    onError: () => {
      reset({}, { keepValues: true });
    },
  });

  const handleRegisterFormSubmit = ({ email, password }: RegisterFormData) => {
    mutate({ email, password });
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
        <Button isLoading={isLoading} isDisabled={!isValid}>
          Register
        </Button>
        {isError && !isDirty && (
          <div className={styles.errorWrapper}>
            <p>Something went wrong, try again!</p>
          </div>
        )}
      </form>
      <div className={publicStyles.footerWrapper}>
        <p>Already have an account?</p>
        <Link to={routes.auth}>Log In</Link>
      </div>
    </main>
  );
};
