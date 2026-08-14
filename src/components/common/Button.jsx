function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const baseStyle =
    "rounded-xl px-7 py-4 font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700",

    outline:
      "border border-violet-600 text-violet-600 hover:bg-violet-50",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;