import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
