import { ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Store, Camera, Anchor, Truck, ArrowLeft, User } from 'lucide-react';

interface WireframeLayoutProps {
  title: string;
  children: ReactNode;
  showBottomNav?: boolean;
  showBackButton?: boolean;
}

export function WireframeLayout({ title, children, showBottomNav = false, showBackButton = false }: WireframeLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/marketplace', icon: Store, label: 'Market' },
    { path: '/capture-start', icon: Camera, label: 'Capture' },
    { path: '/fisherman-dashboard', icon: Anchor, label: 'Fisher' },
    { path: '/scraper-dashboard', icon: Truck, label: 'Scraper' },
  ];

  return (
    <div className="h-full min-h-[667px] flex flex-col bg-background text-foreground relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />

      {/* Top Bar */}
      <div className="bg-background/80 backdrop-blur-md border-b border-white/5 p-4 sticky top-0 z-20 flex items-center justify-center min-h-[60px]">
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <h1 className="font-semibold text-lg">{title}</h1>
        {showBottomNav && (
          <Link to="/profile" className="absolute right-4 p-2 -mr-2 text-muted-foreground hover:text-cyan-400 transition-colors">
            <User className="w-5 h-5" />
          </Link>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 z-10 scrollbar-hide">
        {children}
      </div>

      {/* Bottom Navigation */}
      {showBottomNav && (
        <div className="bg-card/90 backdrop-blur-lg border-t border-white/5 grid grid-cols-4 pb-safe pt-2 px-2 z-20">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`}
              >
                <Icon className={`w-5 h-5 mb-1 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}