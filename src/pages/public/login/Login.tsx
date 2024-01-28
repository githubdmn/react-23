import styles from './login.module.css';
import publicStyles from '../../../shared/styles/public-styles/publicStyles.module.css';
import { Button } from '../../../components/ui/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { LoginFormData, loginFormFields, loginSchema } from './loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormInput } from '../../../components/ui/input/FormInput';
import { useUser } from '../../../store/user/UserContext';
import { useMutation } from 'react-query';
import { apiEndpoints } from '../../../api/apiEndpoints';
import { LoginResponse } from '../../../api/responses/LoginResponse';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  setAccessToken,
  setRefreshToken,
} from '../../../api/tokenHelpers';
import { AxiosHeaders, AxiosResponse } from 'axios';
import { apiClient } from '../../../api/axiosClient';

export const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useUser();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<LoginFormData>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isLoading } = useMutation<
    AxiosResponse<LoginResponse>,
    Error,
    LoginFormData
  >({
    mutationFn: (data) => apiClient.post(apiEndpoints.post.login, data),
    onSuccess: ({ data, headers = new Headers() }) => {
      if (headers instanceof AxiosHeaders) {
        setAccessToken(headers.get(ACCESS_TOKEN_KEY) as string);
        setRefreshToken(headers.get(REFRESH_TOKEN_KEY) as string);
      }

      setUser(data);
      navigate(routes.root, { replace: true });
    },
    onError: () => {
      setError(loginFormFields.email, { message: 'Wrong credentials!' });
      setError(loginFormFields.password, { message: 'Wrong credentials!' });
    },
  });

  const handleLoginFormSubmit = async (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <main>
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
        <Button isLoading={isLoading} isDisabled={!isValid}>
          Log In
        </Button>
      </form>
      <div className={publicStyles.footerWrapper}>
        <p>Don't have an account?</p>
        <Link to={routes.register}>Register</Link>
      </div>
    </main>
  );
};
