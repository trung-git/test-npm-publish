import React from 'react';

interface ButtonPros {
  label: string;
}

const Button = (props: ButtonPros) => {
  return <button>{props.label}</button>;
};

export default Button;
