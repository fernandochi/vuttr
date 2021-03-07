import { ButtonType } from "../../style";

const Button = ({ text, type, state }) => {
  return (
    <ButtonType which={type} onClick={state}>
      {text}
    </ButtonType>
  );
};

export default Button;
