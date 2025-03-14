interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, type = "button", disabled, className, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-full bg-blue-500 text-white rounded-full py-2 font-bold hover:bg-blue-600 transition-colors ${className}`}
    >
      {text}
    </button>
  );
};

export default Button; 