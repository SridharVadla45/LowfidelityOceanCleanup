import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

export function FisherLogSuccess() {
  return (
    <WireframeLayout title="Collection Logged">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {/* Checkmark Icon */}
        <div className="w-32 h-32 border-4 border-gray-800 rounded-full flex items-center justify-center">
          <div className="text-6xl">✓</div>
        </div>

        <div className="text-center space-y-2">
          <h2>Collection Submitted</h2>
          <div className="border-2 border-gray-800 p-3 bg-gray-100 inline-block">
            <p className="text-sm">Status: Pending Verification</p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            A scraper will verify your collection soon
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3">
          <WireframeButton to="/fisherman-dashboard" fullWidth>
            Dashboard
          </WireframeButton>
          <WireframeButton to="/nft-draft" variant="secondary" fullWidth>
            Mint NFT
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}
