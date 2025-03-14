interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ text, type = "submit" }: ButtonProps) => (
  <button
    type={type}
    className="w-full py-3 px-4 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition duration-200"
  >
    {text}
  </button>
);

export default Button; 