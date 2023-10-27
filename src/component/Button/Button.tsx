import type { FC } from 'react';

interface ButtonProps {
  text: string;
  className: string;
}

const Button: FC<ButtonProps> = ({ text, className }) => {
  return (
    <button className={className}>
      <a href='' rel='noreferrer' target='_blank'>
        {text}
      </a>
    </button>
  );
};

export default Button;
