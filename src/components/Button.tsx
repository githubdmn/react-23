import { ButtonProps } from '@/types';

function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      disabled={props.isDisabled}
      className={`btn btn-${props.version}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
