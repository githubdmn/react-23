import { PropsWithChildren } from '../../shared/types/ChildrenComponent';

export const TodoItem = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};
