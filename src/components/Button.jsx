function Button({ variant = 'primary', children, type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={`button button--${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

