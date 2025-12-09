import { WireframeLayout } from "./WireframeLayout";
import { WireframeButton } from "./WireframeButton";

export function FishermanDashboard() {
  return (
    <WireframeLayout
      title="Fisherman Dashboard"
      showBottomNav={true}
    >
      <div className="flex flex-col gap-6">
        {/* Stats Section */}
        <div className="border-2 border-gray-800 p-4 bg-gray-50 space-y-3">
          <h3>Your Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-800 p-3 bg-white">
              <p className="text-xs text-gray-600 mb-1">
                Weekly Plastic
              </p>
              <p>47 kg</p>
            </div>
            <div className="border border-gray-800 p-3 bg-white">
              <p className="text-xs text-gray-600 mb-1">
                Earnings
              </p>
              <p>24.8 USDC</p>
            </div>
          </div>
          <div className="border border-gray-800 p-3 bg-gray-100 text-center">
            <p className="text-xs text-gray-600">
              OCN Coin Balance
            </p>
            <p>496 OCN</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-6 w-full">
          <div>
            <WireframeButton to="/fisher-log-form" fullWidth>
              Log Plastic Collection
            </WireframeButton>
          </div>
          <div>
            <WireframeButton to="/scraper-list" fullWidth>
              Find Scraper Partner
            </WireframeButton>
          </div>
          <div>
            <WireframeButton
              to="/marketplace"
              variant="secondary"
              fullWidth
            >
              My NFT Uploads
            </WireframeButton>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="border-2 border-gray-800 p-4 bg-gray-50">
          <h3 className="mb-3">Recent Activity</h3>
          <div className="space-y-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="border border-gray-800 p-2 bg-white text-sm"
              >
                Collection #{item} - 12 kg - Verified
              </div>
            ))}
          </div>
        </div>
      </div>
    </WireframeLayout>
  );
}