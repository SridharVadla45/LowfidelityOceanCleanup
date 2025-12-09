import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

export function CaptureSuccess() {
  return (
    <WireframeLayout title="Success">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {/* Checkmark Icon */}
        <div className="w-32 h-32 border-4 border-gray-800 rounded-full flex items-center justify-center">
          <div className="text-6xl">✓</div>
        </div>

        <div className="text-center">
          <h2>Plastic Collected Successfully</h2>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3">
          <WireframeButton to="/nft-draft" fullWidth>
            Mint NFT
          </WireframeButton>
          <WireframeButton to="/marketplace" variant="secondary" fullWidth>
            Go to Home
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}
