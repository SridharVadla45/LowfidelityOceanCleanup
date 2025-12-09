import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { CheckCircle2, Navigation, MapPin, User, Package } from 'lucide-react';

export function ScraperAccept() {
  return (
    <WireframeLayout title="Request Accepted" showBackButton={true}>
      <div className="flex flex-col items-center justify-center h-full space-y-6 scrollbar-hide">
        {/* Success Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
          <div className="w-28 h-28 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 relative z-10 animate-bounce-slow">
            <CheckCircle2 className="w-14 h-14 text-white" />
          </div>
        </div>

        <div className="text-center w-full">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2">
            Request Accepted!
          </h2>
          <p className="text-muted-foreground text-sm">Fisher is ready for pickup</p>

          {/* Collection Details */}
          <div className="mt-6 bg-card/40 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-left space-y-4 shadow-lg">
            <div className="flex items-center gap-3 border-b border-white/5 pb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Fisher_0x4a2</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-500" /> 2.3 km away
                </p>
              </div>
              <div className="ml-auto bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs font-medium border border-green-500/20">
                Verified
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  <Package className="w-3 h-3" /> Est. Weight
                </p>
                <p className="font-bold text-white text-lg">12 kg</p>
              </div>
              <div className="bg-black/20 p-3 rounded-xl border border-white/5">
                <p className="text-xs text-muted-foreground mb-1">Reward</p>
                <p className="font-bold text-emerald-400 text-lg">6 USDC</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-4 h-32 rounded-2xl bg-muted relative overflow-hidden group border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
              <div className="text-center">
                <Navigation className="w-8 h-8 text-cyan-400 mx-auto mb-1" />
                <p className="text-xs font-medium text-white">Tap to Navigate</p>
              </div>
            </div>
            {/* Fake Map Background Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3 pt-2">
          <WireframeButton fullWidth className="bg-cyan-600 hover:bg-cyan-500 border-none shadow-lg shadow-cyan-900/20">
            <Navigation className="w-4 h-4 mr-2" />
            Start Navigation
          </WireframeButton>
          <WireframeButton to="/scraper-dashboard" variant="secondary" fullWidth>
            Back to Dashboard
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}
