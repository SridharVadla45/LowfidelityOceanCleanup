import { WireframeLayout } from "./WireframeLayout";
import { WireframeButton } from "./WireframeButton";
import { Scale, DollarSign, Wallet, FileText, Anchor, History, ArrowRight } from "lucide-react";

export function FishermanDashboard() {
  return (
    <WireframeLayout title="Fisherman Dashboard" showBottomNav={true}>
      <div className="flex flex-col gap-6 scrollbar-hide">
        {/* Stats Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-1 h-5 bg-cyan-500 rounded-full" />
              Overview
            </h3>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">This Week</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-card/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-between h-32 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Scale className="w-12 h-12 text-cyan-500" />
              </div>
              <div className="p-2 bg-cyan-500/10 w-fit rounded-lg mb-2">
                <Scale className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Plastic</p>
                <p className="text-2xl font-bold text-white">47 kg</p>
              </div>
            </div>

            <div className="bg-card/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-between h-32 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <DollarSign className="w-12 h-12 text-emerald-500" />
              </div>
              <div className="p-2 bg-emerald-500/10 w-fit rounded-lg mb-2">
                <DollarSign className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-1">Earnings</p>
                <p className="text-2xl font-bold text-white">$24.8</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/20 rounded-xl">
                <Wallet className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-blue-200">Total Balance</p>
                <p className="text-xl font-bold text-white">496 OCN</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-300 hover:text-white transition-colors">
              Withdraw
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-1">
            <span className="w-1 h-5 bg-purple-500 rounded-full" />
            Actions
          </h3>
          <WireframeButton to="/fisher-log-form" fullWidth className="bg-card/50 hover:bg-card/80 justify-between group">
            <span className="flex items-center gap-3">
              <div className="p-1.5 bg-cyan-500/10 rounded-lg">
                <FileText className="w-4 h-4 text-cyan-400" />
              </div>
              Log Collection
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </WireframeButton>

          <WireframeButton to="/scraper-list" fullWidth className="bg-card/50 hover:bg-card/80 justify-between group">
            <span className="flex items-center gap-3">
              <div className="p-1.5 bg-emerald-500/10 rounded-lg">
                <Anchor className="w-4 h-4 text-emerald-400" />
              </div>
              Find Scraper
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </WireframeButton>

        </div>

        {/* Recent Activity */}
        <div className="pb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full" />
              Activity
            </h3>
            <button className="text-xs text-muted-foreground hover:text-white flex items-center gap-1">
              <History className="w-3 h-3" />
              History
            </button>
          </div>

          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-card/30 border border-white/5 p-3 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 font-bold text-sm border border-white/5">
                    #{item}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Plastic Logged</p>
                    <p className="text-xs text-muted-foreground">12 kg • Verified</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-400">+50 OCN</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WireframeLayout>
  );
}