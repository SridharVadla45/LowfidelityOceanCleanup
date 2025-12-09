import { Link } from 'react-router-dom';

interface WireframeButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function WireframeButton({ to, onClick, children, variant = 'primary', fullWidth = false }: WireframeButtonProps) {
  const baseClasses = `px-6 py-3 border-2 border-gray-800 ${fullWidth ? 'w-full' : ''} text-center transition-colors hover:bg-gray-100`;
  const variantClasses = variant === 'primary' ? 'bg-gray-200' : 'bg-white';
  const className = `${baseClasses} ${variantClasses}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
