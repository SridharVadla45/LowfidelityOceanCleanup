import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { Camera, MapPin, Anchor, Scale, UploadCloud } from 'lucide-react';

export function FisherLogForm() {
  return (
    <WireframeLayout title="Log Collection" showBackButton={true}>
      <div className="flex flex-col h-full gap-5 scrollbar-hide">
        {/* Upload Image */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-30 group-hover:opacity-60 transition duration-500 blur"></div>
          <div className="relative bg-card rounded-2xl border border-dashed border-white/20 p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-card/80 transition-colors h-48">
            <div className="bg-cyan-500/10 p-4 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-8 h-8 text-cyan-400" />
            </div>
            <p className="font-medium text-white mb-1">Upload Photo</p>
            <p className="text-xs text-muted-foreground">Tap to take a picture or select from gallery</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 flex-1">
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground ml-1 flex items-center gap-1">
              <Scale className="w-3.5 h-3.5" /> Estimated Weight (kg)
            </label>
            <input
              type="number"
              className="w-full p-4 rounded-xl bg-card/40 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-medium appearance-none"
              placeholder="0.00"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground ml-1 flex items-center gap-1">
              <Anchor className="w-3.5 h-3.5" /> Boat ID (Optional)
            </label>
            <input
              type="text"
              className="w-full p-4 rounded-xl bg-card/40 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all font-medium"
              placeholder="e.g., BOAT-2025-X"
            />
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">GPS Location Captured</p>
              <p className="text-xs text-emerald-400/80">Lat: 12.34 • Long: 56.78</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pb-safe pt-2">
          <WireframeButton to="/fisherman-dashboard" fullWidth className="h-12 text-base">
            <UploadCloud className="w-4 h-4 mr-2" />
            Submit Log
          </WireframeButton>
          <WireframeButton to="/fisherman-dashboard" variant="ghost" fullWidth className="text-muted-foreground hover:text-white">
            Cancel
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}