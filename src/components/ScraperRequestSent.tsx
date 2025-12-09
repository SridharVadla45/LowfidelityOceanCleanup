import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { Send, Clock, MapPin, X, ArrowLeft } from 'lucide-react';

export function ScraperRequestSent() {
  return (
    <WireframeLayout title="Request Sent" showBackButton={true}>
      <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
        {/* Animated Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-ping-slow" />
          <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 relative z-10">
            <Send className="w-14 h-14 text-white -ml-1 translate-x-1 -translate-y-1" />
          </div>
        </div>

        <div className="text-center space-y-6 w-full max-w-sm">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Request Sent!</h2>
            <p className="text-muted-foreground">Waiting for Scraper acceptance...</p>
          </div>

          <div className="bg-card/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-sm text-muted-foreground">Status</span>
              <span className="flex items-center gap-1.5 text-yellow-400 text-sm font-medium bg-yellow-500/10 px-2.5 py-1 rounded-full border border-yellow-500/20">
                <Clock className="w-3.5 h-3.5" /> Pending
              </span>
            </div>

            <div className="text-left space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Scraper Partner</p>
                <p className="font-semibold text-lg">Scraper Station A</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Distance</p>
                  <p className="font-medium flex items-center gap-1 text-white">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500" /> 2.3 km
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">Est. Reward</p>
                  <p className="font-medium text-emerald-400">6 USDC</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3 pt-4">
          <WireframeButton variant="outline" fullWidth className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300">
            <X className="w-4 h-4 mr-2" />
            Cancel Request
          </WireframeButton>
          <WireframeButton to="/fisherman-dashboard" variant="secondary" fullWidth>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}