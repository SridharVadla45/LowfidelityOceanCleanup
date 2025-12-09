import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { Heart, Bookmark, Share2, Award, Clock, MapPin, Scale } from 'lucide-react';

export function NFTDetail() {
  return (
    <WireframeLayout title="NFT Details" showBackButton={true}>
      <div className="flex flex-col h-full space-y-4 overflow-y-auto pb-4 scrollbar-hide">
        {/* Large NFT Preview */}
        <div className="w-full aspect-square rounded-2xl overflow-hidden relative shadow-2xl group">
          <img
            src="/images/turtle.png"
            alt="Recycled Turtle"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white">Rarity: Legendary</span>
          </div>
        </div>

        {/* NFT Title & Price */}
        <div className="flex-shrink-0">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
            Recycled Turtle #742
          </h2>
          <div className="flex items-center gap-3 mt-3">
            <div className="bg-card/50 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
              <span className="text-xs text-muted-foreground block">Current Price</span>
              <span className="font-bold text-lg text-white">125.0 USDC</span>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-2 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-xs text-cyan-400 block">Equivalent</span>
              <span className="font-bold text-lg text-cyan-200">2,500 OCN</span>
            </div>
          </div>
        </div>

        {/* Metadata Section */}
        <div className="bg-card/30 backdrop-blur-md rounded-2xl p-5 border border-white/5 space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <span className="w-1 h-5 bg-purple-500 rounded-full" />
            Provenance
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Clock className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm">Minted</span>
              </div>
              <span className="text-sm font-medium">Nov 15, 2025</span>
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Scale className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm">Weight</span>
              </div>
              <span className="text-sm font-medium">2.5 kg Removed</span>
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-rose-500/10 rounded-lg">
                  <MapPin className="w-4 h-4 text-rose-400" />
                </div>
                <span className="text-sm">Origin</span>
              </div>
              <span className="text-sm font-medium">Pacific Ocean</span>
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                  <Award className="w-4 h-4 text-yellow-400" />
                </div>
                <span className="text-sm">Hype Score</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-yellow-400">98/100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 flex-shrink-0">
          <WireframeButton variant="secondary" className="bg-card/50 hover:bg-card">
            <Heart className="w-4 h-4 mr-2 text-rose-500" />
            Like
          </WireframeButton>
          <WireframeButton variant="secondary" className="bg-card/50 hover:bg-card">
            <Bookmark className="w-4 h-4 mr-2 text-cyan-500" />
            Save
          </WireframeButton>
        </div>

        <WireframeButton fullWidth className="h-12 text-lg shadow-xl shadow-cyan-500/20">
          Buy Now
        </WireframeButton>
      </div>
    </WireframeLayout>
  );
}