import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { Truck, MapPin, Scale, Clock, Check, X, ArrowRight, User } from 'lucide-react';

const pendingRequests = [
  { id: 1, fisher: 'Fisher_0x4a2', distance: '2.3 km', weight: '12 kg', time: '5 min ago', plasticType: 'Nets & Bottles' },
  { id: 2, fisher: 'Fisher_0x9f1', distance: '4.5 km', weight: '8 kg', time: '12 min ago', plasticType: 'HDPE' },
  { id: 3, fisher: 'Fisher_0x1b5', distance: '3.1 km', weight: '15 kg', time: '18 min ago', plasticType: 'Mixed' },
];

export function ScraperDashboard() {
  return (
    <WireframeLayout title="Scraper Dashboard" showBottomNav={true}>
      <div className="flex flex-col h-full gap-6 scrollbar-hide">
        {/* Stats Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full" />
              Performance
            </h3>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">Today</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-card/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-lg relative overflow-hidden group">
              <div className="absolute -right-2 -top-2 p-3 bg-orange-500/10 rounded-full">
                <Truck className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-xs text-muted-foreground font-medium mb-1">Collections</p>
              <p className="text-2xl font-bold text-white">28</p>
            </div>

            <div className="bg-card/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-lg relative overflow-hidden group">
              <div className="absolute -right-2 -top-2 p-3 bg-emerald-500/10 rounded-full">
                <Scale className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-xs text-muted-foreground font-medium mb-1">Total Scraped</p>
              <p className="text-2xl font-bold text-white">342 kg</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-400/20 to-red-500/20 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg flex items-center justify-between">
            <div>
              <p className="text-xs text-orange-200">Total Earnings</p>
              <p className="text-xl font-bold text-white">84 USDC</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-3">
            <span className="w-1 h-5 bg-cyan-500 rounded-full" />
            Pending Requests <span className="text-sm text-cyan-500 font-normal">({pendingRequests.length})</span>
          </h3>

          <div className="space-y-3 pb-4">
            {pendingRequests.map((request) => (
              <div key={request.id} className="bg-card/40 border border-white/5 p-4 rounded-2xl shadow-sm backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">{request.fisher}</h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {request.distance}</span>
                        <span className="text-white/20">•</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {request.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-semibold text-cyan-400">
                    {request.weight}
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-2 mb-3 text-xs text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                  Type: <span className="text-white">{request.plasticType}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <WireframeButton to="/scraper-accept" fullWidth className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 border-none shadow-lg shadow-emerald-900/20 h-10">
                    <Check className="w-4 h-4 mr-2" /> Accept
                  </WireframeButton>
                  <WireframeButton variant="outline" fullWidth className="border-white/10 hover:bg-white/5 h-10">
                    <X className="w-4 h-4 mr-2" /> Decline
                  </WireframeButton>
                </div>
              </div>
            ))}

            <WireframeButton to="/marketplace" variant="secondary" fullWidth className="mt-4">
              Go to Marketplace
            </WireframeButton>
          </div>
        </div>
      </div>
    </WireframeLayout>
  );
}