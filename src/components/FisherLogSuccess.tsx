import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { CheckCircle2, Clock, LayoutDashboard, Wand2 } from 'lucide-react';

export function FisherLogSuccess() {
  return (
    <WireframeLayout title="Collection Logged" showBottomNav={true}>
      <div className="flex flex-col items-center justify-center h-full space-y-8 scrollbar-hide">
        {/* Success Animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" />
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 relative z-10 animate-scale-in">
            <CheckCircle2 className="w-16 h-16 text-white animate-bounce-custom" />
          </div>
        </div>

        <div className="text-center space-y-6 w-full max-w-xs">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Collection Submitted!</h2>
            <p className="text-muted-foreground text-sm">Your log has been recorded on-chain.</p>
          </div>

          <div className="bg-card/40 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-lg">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
              <span className="text-sm text-muted-foreground">Status</span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">
                <Clock className="w-3 h-3" /> Pending Verification
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-left leading-relaxed">
              A nearby Scraper has been notified. Once verified, you will receive your OCN tokens and XP.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3 pt-2">
          <WireframeButton to="/fisherman-dashboard" variant="outline" fullWidth className="h-12 border-white/10 hover:bg-white/5">
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Return to Dashboard
          </WireframeButton>
          <WireframeButton to="/nft-draft" fullWidth className="h-12 bg-gradient-to-r from-purple-600 to-indigo-600 border-none shadow-lg shadow-purple-900/20 hover:scale-[1.02] transition-transform">
            <Wand2 className="w-4 h-4 mr-2" />
            Mint NFT from Log
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}
