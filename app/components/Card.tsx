interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-[#e3e4e1] rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
