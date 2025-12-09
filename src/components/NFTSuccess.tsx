import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { Share2, ArrowRight } from 'lucide-react';

export function NFTSuccess() {
  return (
    <WireframeLayout title="NFT Minted" showBottomNav={true}>
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        {/* Celebration Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-75" />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-150" />
        </div>

        {/* NFT Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 aspect-[3/4] bg-card/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col">
            <div className="flex-1 bg-muted relative">
              <img src="/images/turtle.png" alt="Minted NFT" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 space-y-1">
              <h3 className="font-bold text-lg bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Ocean Turtle #742</h3>
              <p className="text-xs text-muted-foreground">Minted by Fisher_0x4a2</p>
              <div className="pt-2 flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-cyan-400">Legendary</span>
                <span className="text-xs font-bold text-white">125 USDC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-white">Minted Successfully!</h2>
          <p className="text-muted-foreground max-w-[250px] mx-auto text-sm">
            Your collection is now live on the marketplace.
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3 pt-4 px-4 pb-safe">
          <WireframeButton to="/marketplace" fullWidth className="bg-white hover:bg-gray-100 text-black font-bold h-12">
            View in Marketplace
            <ArrowRight className="w-4 h-4 ml-2" />
          </WireframeButton>
          <WireframeButton variant="outline" fullWidth className="border-white/10 hover:bg-white/5">
            <Share2 className="w-4 h-4 mr-2" />
            Share to Socials
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}
