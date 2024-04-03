import { Button, Input } from '../../components';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpData, signUpFieldNames, signUpSchema } from './signUp.schema';
import { useForm } from 'react-hook-form';
import { ButtonWrapper, SignUpFormWrapper } from './signUp.styles';
import { Heading } from '../../components/heading';
import { useMutation } from 'react-query';
import { axiosInstance } from '../../api/axiosInstance';
import { SignUpResponse } from '../../api/responses/signUpResponse';
import { endpoints } from '../../api/endpoints';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router/routes';
import { setAccessToken, setRefreshToken } from '../../api/tokenHelpers';

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<SignUpData>({
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  const { mutate } = useMutation<SignUpResponse, unknown, SignUpData>({
    mutationFn: (data) =>
      axiosInstance.post(endpoints.signUp, {
        username: data.email,
        password: data.password,
      }),
    onSuccess: ({ data: { accessToken, refreshToken } }) => {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      navigate(routes.root);
    },
  });

  function onSubmitHandler(data: SignUpData) {
    mutate(data);
  }

  return (
    <SignUpFormWrapper>
      <Heading>Sign Up!</Heading>
      <Input
        error={errors[signUpFieldNames.firstName]?.message}
        placeholder={'First name'}
        {...register(signUpFieldNames.firstName)}
      />
      <Input
        error={errors[signUpFieldNames.lastName]?.message}
        placeholder={'Last name'}
        {...register(signUpFieldNames.lastName)}
      />
      <Input
        error={errors[signUpFieldNames.email]?.message}
        placeholder={'Email'}
        {...register(signUpFieldNames.email)}
      />
      <Input
        error={errors[signUpFieldNames.password]?.message}
        placeholder={'Password'}
        type={'password'}
        {...register(signUpFieldNames.password)}
      />
      <ButtonWrapper>
        <Button
          fill
          disabled={!isValid}
          onClick={handleSubmit(onSubmitHandler)}
        >
          Sign Up
        </Button>
      </ButtonWrapper>
    </SignUpFormWrapper>
  );
};
