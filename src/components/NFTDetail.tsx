import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

export function NFTDetail() {
  return (
    <WireframeLayout title="NFT Details" showBackButton={true}>
      <div className="flex flex-col h-full space-y-4 overflow-y-auto pb-4">
        {/* Large NFT Preview */}
        <div className="w-full aspect-square border-4 border-gray-800 bg-gray-50 flex items-center justify-center flex-shrink-0">
          <p className="text-gray-600">[ NFT Artwork ]</p>
        </div>

        {/* NFT Title & Price */}
        <div className="flex-shrink-0">
          <h2 className="mb-2">Ocean Plastic Collection #742</h2>
          <div className="flex items-center gap-3">
            <div className="border-2 border-gray-800 px-4 py-2 bg-gray-100">
              <span>12.5 USDC</span>
            </div>
            <div className="border border-gray-800 px-3 py-2 bg-white">
              <span className="text-sm text-gray-600">≈ 250 OCN Coins</span>
            </div>
          </div>
        </div>

        {/* Metadata Section */}
        <div className="border-2 border-gray-800 p-4 bg-gray-50 space-y-3 flex-shrink-0">
          <h3 className="mb-3">Metadata</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-600">Collected by:</span>
              <span className="truncate ml-2">Fisher_0x4a2</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-600">Location:</span>
              <span className="truncate ml-2">Pacific Ocean</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-600">Weight:</span>
              <span>2.5 kg</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-600">Date:</span>
              <span>Nov 15, 2025</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Impact Score:</span>
              <span className="border border-gray-800 px-2 py-1 text-xs bg-white">85/100</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 flex-shrink-0">
          <WireframeButton variant="secondary" fullWidth>
            ♡ Like
          </WireframeButton>
          <WireframeButton variant="secondary" fullWidth>
            🔖 Save
          </WireframeButton>
        </div>

        <WireframeButton fullWidth>
          Buy for 12.5 USDC
        </WireframeButton>

        <WireframeButton to="/marketplace" variant="secondary" fullWidth>
          Back to Marketplace
        </WireframeButton>
      </div>
    </WireframeLayout>
  );
}