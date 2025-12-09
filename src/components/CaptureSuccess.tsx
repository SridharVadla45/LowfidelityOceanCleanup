import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { PartyPopper, CheckCircle2, ArrowRight } from 'lucide-react';

export function CaptureSuccess() {
  return (
    <WireframeLayout title="Success!" showBottomNav={true}>
      <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
        {/* Celebration Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/30 blur-3xl rounded-full" />
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 relative z-10 animate-bounce-slow">
            <CheckCircle2 className="w-16 h-16 text-white" />
          </div>
          <PartyPopper className="absolute -top-4 -right-4 w-12 h-12 text-yellow-400 animate-pulse" />
        </div>

        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2">
            Awesome Job!
          </h2>
          <p className="text-xl font-medium text-white mb-1">
            4.2 kg Plastic Logged
          </p>
          <p className="text-muted-foreground text-sm max-w-[250px] mx-auto">
            Your contribution has been verified on-chain. You're closer to your next reward!
          </p>
        </div>

        {/* Reward Card */}
        <div className="w-full bg-card/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between">
          <div className="text-left">
            <p className="text-xs text-muted-foreground">Earned</p>
            <p className="text-lg font-bold text-yellow-400">50 OCN</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Impact</p>
            <p className="text-lg font-bold text-cyan-400">+12 XP</p>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full space-y-3 pt-4">
          <WireframeButton to="/nft-draft" fullWidth>
            Mint NFT Reward
            <ArrowRight className="w-4 h-4 ml-2" />
          </WireframeButton>
          <WireframeButton to="/capture-start" variant="secondary" fullWidth>
            Capture More
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}
