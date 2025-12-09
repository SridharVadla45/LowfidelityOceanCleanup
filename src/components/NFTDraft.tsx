import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { Wand2, Image as ImageIcon, Sparkles, ArrowRight } from 'lucide-react';

export function NFTDraft() {
  return (
    <WireframeLayout title="Mint Collection" showBackButton={true}>
      <div className="flex flex-col h-full space-y-4 scrollbar-hide">
        {/* Image Comparison */}
        <div className="grid grid-cols-2 gap-3">
          <div className="group relative">
            <div className="absolute -top-2 -left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 z-10">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <ImageIcon className="w-3 h-3" /> Raw
              </span>
            </div>
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-muted relative">
              <img
                src="https://images.unsplash.com/photo-1618477460930-de1bcd0e46ea?w=400&auto=format"
                alt="Original"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 px-2 py-1 rounded-lg shadow-lg shadow-purple-900/40 z-10">
              <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> AI Art
              </span>
            </div>
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-purple-500/30 bg-muted relative shadow-lg shadow-purple-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 mix-blend-overlay pointer-events-none" />
              <img
                src="/images/turtle.png"
                alt="Generated"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Impact Score Badge */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 flex items-center gap-2">
            <span className="text-xs text-emerald-300 font-medium">Impact Score</span>
            <div className="h-4 w-[1px] bg-emerald-500/20" />
            <span className="text-sm font-bold text-emerald-400">85/100</span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 flex-1">
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground ml-1">Title</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl bg-card/40 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-medium"
              defaultValue="Ocean Plastic Collection #742"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground ml-1">Description</label>
            <textarea
              className="w-full p-4 rounded-xl bg-card/40 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all h-28 resize-none text-sm leading-relaxed"
              placeholder="Tell the story of this collection..."
              defaultValue="Recovered 12kg of HDPE plastic from the Pacific coast. Transformed into a symbol of ocean regeneration."
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pb-safe pt-2">
          <WireframeButton to="/nft-detail" fullWidth className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border-none shadow-lg shadow-purple-900/20 h-12">
            <Wand2 className="w-4 h-4 mr-2" />
            Mint Generative NFT
          </WireframeButton>
          <WireframeButton variant="ghost" fullWidth className="text-muted-foreground hover:text-white">
            Customize Attributes
            <ArrowRight className="w-3 h-3 ml-2" />
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}