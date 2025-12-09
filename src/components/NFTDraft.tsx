import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

export function NFTDraft() {
  return (
    <WireframeLayout title="NFT Draft" showBackButton={true}>
      <div className="flex flex-col h-full space-y-4">
        {/* Image Comparison */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs mb-2">Original Photo</p>
            <div className="w-full h-32 border-2 border-gray-800 bg-gray-50 flex items-center justify-center">
              <p className="text-xs text-gray-600">[ Photo ]</p>
            </div>
          </div>
          <div>
            <p className="text-xs mb-2">Generated NFT</p>
            <div className="w-full h-32 border-2 border-gray-800 bg-gray-50 flex items-center justify-center">
              <p className="text-xs text-gray-600">[ NFT Art ]</p>
            </div>
          </div>
        </div>

        {/* Impact Score Badge */}
        <div className="border-2 border-gray-800 p-2 bg-gray-100 inline-block w-fit">
          Impact Score: 85/100
        </div>

        {/* Form Fields */}
        <div className="space-y-4 flex-1">
          <div>
            <label className="block mb-2">Title</label>
            <input 
              type="text" 
              className="w-full p-3 border-2 border-gray-800 bg-white"
              value="Ocean Plastic Collection #742"
              readOnly
            />
          </div>

          <div>
            <label className="block mb-2">Description</label>
            <textarea 
              className="w-full p-3 border-2 border-gray-800 bg-white h-24"
              placeholder="Describe your collection..."
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pb-4">
          <WireframeButton to="/nft-success" fullWidth>
            Mint NFT
          </WireframeButton>
          <WireframeButton variant="secondary" fullWidth>
            Edit Details
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}