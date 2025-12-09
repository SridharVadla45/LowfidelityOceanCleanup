import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { Truck, MapPin, ArrowRight } from 'lucide-react';

const scrapers = [
  { id: 1, name: 'Scraper Station A', distance: '2.3 km', available: true },
  { id: 2, name: 'Scraper Station B', distance: '4.1 km', available: true },
  { id: 3, name: 'Scraper Station C', distance: '5.7 km', available: false },
  { id: 4, name: 'Scraper Station D', distance: '8.2 km', available: true },
  { id: 5, name: 'Scraper Station E', distance: '12.5 km', available: true },
];

export function ScraperList() {
  return (
    <WireframeLayout title="Scraper Partners" showBackButton={true}>
      <div className="flex flex-col h-full gap-4">
        <p className="text-sm text-muted-foreground bg-secondary/50 p-3 rounded-xl border border-white/5">
          Find a nearby verified scraper to hand over your collection.
        </p>

        {/* List Items */}
        <div className="space-y-3 flex-1 overflow-y-auto scrollbar-hide pb-4">
          {scrapers.map((scraper) => (
            <div
              key={scraper.id}
              className={`p-4 rounded-2xl border transition-all duration-300 ${scraper.available
                  ? 'bg-card/40 border-white/10 hover:bg-card/60 backdrop-blur-md'
                  : 'bg-muted/20 border-white/5 opacity-60'
                }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${scraper.available ? 'bg-cyan-500/10' : 'bg-gray-500/10'}`}>
                    <Truck className={`w-5 h-5 ${scraper.available ? 'text-cyan-400' : 'text-gray-400'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{scraper.name}</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {scraper.distance} away
                    </p>
                  </div>
                </div>

                <div className={`px-2 py-1 rounded-md text-xs font-medium border ${scraper.available
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    : 'bg-red-500/10 text-red-400 border-red-500/20'
                  }`}>
                  {scraper.available ? 'Available' : 'Busy'}
                </div>
              </div>

              {scraper.available && (
                <WireframeButton to="/scraper-request-sent" fullWidth className="h-10 text-sm bg-white/5 hover:bg-cyan-500 hover:border-cyan-400 transition-all group">
                  Select Partner
                  <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                </WireframeButton>
              )}
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="shrink-0 pb-safe">
          <WireframeButton to="/fisherman-dashboard" variant="secondary" fullWidth>
            Back to Dashboard
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}