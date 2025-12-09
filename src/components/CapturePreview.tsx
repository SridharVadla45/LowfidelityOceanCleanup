import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { Check, X, MapPin } from 'lucide-react';

export function CapturePreview() {
  return (
    <WireframeLayout title="Preview Dump" showBackButton={true}>
      <div className="flex flex-col h-full space-y-4">
        {/* Photo Container */}
        <div className="flex-1 relative rounded-2xl overflow-hidden bg-muted group">
          <img
            src="https://images.unsplash.com/photo-1618477460930-de1bcd0e46ea?w=800&auto=format"
            alt="Plastic Waste"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-cyan-500/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Pacific Ocean
              </span>
              <span className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md text-xs border border-white/20">
                Lat: 24.5, Long: 122.4
              </span>
            </div>
          </div>
        </div>

        {/* AI Analysis Card */}
        <div className="bg-card/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Check className="w-32 h-32 text-cyan-500" />
          </div>

          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-cyan-500 rounded-full" />
            AI Analysis
          </h3>

          <div className="space-y-3 relative z-10">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-muted-foreground">Est. Weight</span>
              <span className="font-bold text-xl text-cyan-400">4.2 kg</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-muted-foreground">Plastic Type</span>
              <span className="font-medium text-foreground">HDPE & Nets</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Confidence</span>
              <span className="text-emerald-400 font-bold">98% Match</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 pb-safe">
          <WireframeButton to="/capture-start" variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive/10 hover:text-destructive">
            <X className="w-4 h-4 mr-2" />
            Retake
          </WireframeButton>
          <WireframeButton to="/capture-success">
            <Check className="w-4 h-4 mr-2" />
            Submit
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}