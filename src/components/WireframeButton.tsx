import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface WireframeButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
  className?: string; // Add className prop
}

export function WireframeButton({
  children,
  to,
  onClick,
  fullWidth = false,
  variant = 'primary',
  className = ''
}: WireframeButtonProps) {

  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-xl";
  const sizeStyles = "px-4 py-3 text-sm";
  const widthStyles = fullWidth ? "w-full" : "";

  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-900/20 border border-white/10";
      break;
    case 'secondary':
      variantStyles = "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-white/5";
      break;
    case 'outline':
      variantStyles = "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground text-foreground";
      break;
    case 'danger':
      variantStyles = "bg-destructive text-destructive-foreground hover:bg-destructive/90";
      break;
    case 'ghost':
      variantStyles = "hover:bg-accent hover:text-accent-foreground text-muted-foreground hover:text-foreground bg-transparent";
      break;
  }

  const combinedClassName = `${baseStyles} ${sizeStyles} ${widthStyles} ${variantStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
