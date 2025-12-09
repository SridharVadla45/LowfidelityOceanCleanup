import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface WireframeLayoutProps {
  title: string;
  children: ReactNode;
  showBottomNav?: boolean;
  showBackButton?: boolean;
}

export function WireframeLayout({ title, children, showBottomNav = false, showBackButton = false }: WireframeLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="h-full min-h-[667px] flex flex-col bg-white">
      {/* Top Bar */}
      <div className="border-b-2 border-gray-800 p-4 bg-gray-100 relative">
        {showBackButton && (
          <button 
            onClick={() => navigate(-1)} 
            className="absolute left-4 top-1/2 -translate-y-1/2 border-2 border-gray-800 px-3 py-1 bg-white hover:bg-gray-50"
          >
            ← Back
          </button>
        )}
        <h1 className="text-center">{title}</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {children}
      </div>

      {/* Bottom Navigation */}
      {showBottomNav && (
        <div className="border-t-2 border-gray-800 grid grid-cols-4 bg-gray-100">
          <Link to="/marketplace" className="p-4 text-center border-r border-gray-800 hover:bg-gray-50">
            <div className="text-xs">🏪</div>
            <div className="text-xs">Market</div>
          </Link>
          <Link to="/capture-start" className="p-4 text-center border-r border-gray-800 hover:bg-gray-50">
            <div className="text-xs">📸</div>
            <div className="text-xs">Capture</div>
          </Link>
          <Link to="/fisherman-dashboard" className="p-4 text-center border-r border-gray-800 hover:bg-gray-50">
            <div className="text-xs">⚓</div>
            <div className="text-xs">Fisher</div>
          </Link>
          <Link to="/scraper-dashboard" className="p-4 text-center hover:bg-gray-50">
            <div className="text-xs">🚛</div>
            <div className="text-xs">Scraper</div>
          </Link>
        </div>
      )}
    </div>
  );
}