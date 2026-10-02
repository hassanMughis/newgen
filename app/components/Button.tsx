interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-200';
  
  const variantStyles = {
    primary: 'bg-[#8cc63f] text-black hover:bg-[#7eb238]',
    secondary: 'bg-white text-black hover:bg-gray-100',
    outline: 'border-2 border-[#8cc63f] text-[#8cc63f] hover:bg-[#8cc63f] hover:text-black'
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
