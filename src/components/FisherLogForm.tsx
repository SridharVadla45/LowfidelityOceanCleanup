import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

export function FisherLogForm() {
  return (
    <WireframeLayout title="Log Collection" showBackButton={true}>
      <div className="flex flex-col h-full space-y-4">
        {/* Upload Image */}
        <div>
          <label className="block mb-2">Upload Image</label>
          <div className="w-full h-40 border-2 border-dashed border-gray-800 bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-gray-800 mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Tap to upload</p>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 flex-1">
          <div>
            <label className="block mb-2">Estimated Weight (kg)</label>
            <input 
              type="text" 
              className="w-full p-3 border-2 border-gray-800 bg-white"
              placeholder="e.g., 15.5"
            />
          </div>

          <div>
            <label className="block mb-2">Boat ID (optional)</label>
            <input 
              type="text" 
              className="w-full p-3 border-2 border-gray-800 bg-white"
              placeholder="e.g., BOAT-2024-001"
            />
          </div>

          <div className="border-2 border-gray-800 p-3 bg-gray-100">
            <p className="text-sm">📍 GPS Location: Captured</p>
            <p className="text-xs text-gray-600 mt-1">Lat: 12.34, Long: 56.78</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pb-4">
          <WireframeButton to="/fisher-log-success" fullWidth>
            Submit
          </WireframeButton>
          <WireframeButton to="/fisherman-dashboard" variant="secondary" fullWidth>
            Cancel
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}