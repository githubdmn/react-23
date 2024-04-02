import { Heading, Spinner } from '../../components';
import { useGetUser } from '../../hooks/useGetUser/useGetUser';
import { SpinnerWrapper } from '../../shared/styles/spinnerWrapper.styles';

export const Home = () => {
  const { data, isLoading, isError } = useGetUser();

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if (isError) {
    return <Heading>Request failed!</Heading>;
  }

  return (
    <>
      <Heading>{data!.data.message}</Heading>
    </>
  );
};
