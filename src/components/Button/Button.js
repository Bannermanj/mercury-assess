import "./Button.scss";

const Button = ({ buttonTitle, onClick, className = "" }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {buttonTitle}
    </button>
  );
};

export default Button;
