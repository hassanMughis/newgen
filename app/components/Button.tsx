interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-[#ADF531] text-black hover:bg-[#9be02b]',
    secondary: 'bg-white text-black hover:bg-gray-100',
    outline: 'border-2 border-[#ADF531] text-[#ADF531] hover:bg-[#ADF531] hover:text-black'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}