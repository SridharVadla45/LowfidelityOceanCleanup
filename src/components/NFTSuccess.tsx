import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

export function NFTSuccess() {
  return (
    <WireframeLayout title="NFT Minted">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {/* NFT Placeholder */}
        <div className="w-64 h-64 border-4 border-gray-800 bg-gray-50 flex items-center justify-center">
          <p className="text-gray-600">[ NFT Artwork ]</p>
        </div>

        <div className="text-center">
          <h2>NFT Minted Successfully</h2>
          <p className="text-gray-600 mt-2 text-sm">Token ID: #742</p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3">
          <WireframeButton to="/marketplace" fullWidth>
            View in Marketplace
          </WireframeButton>
          <WireframeButton to="/marketplace" variant="secondary" fullWidth>
            Home
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}
