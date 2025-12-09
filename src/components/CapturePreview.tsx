import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

export function CapturePreview() {
  return (
    <WireframeLayout title="Preview Capture" showBackButton={true}>
      <div className="flex flex-col h-full space-y-4">
        {/* Image Placeholder */}
        <div className="w-full h-48 border-2 border-gray-800 flex items-center justify-center bg-gray-50">
          <p className="text-gray-600">[ Captured Image ]</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 flex-1">
          <div>
            <label className="block mb-2">Estimated Weight (kg)</label>
            <input 
              type="text" 
              className="w-full p-3 border-2 border-gray-800 bg-white"
              placeholder="e.g., 2.5"
            />
          </div>

          <div>
            <label className="block mb-2">Notes (optional)</label>
            <textarea 
              className="w-full p-3 border-2 border-gray-800 bg-white h-20"
              placeholder="Add notes..."
            />
          </div>

          <div className="text-gray-600 text-sm">
            ✓ Location Enabled
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pb-4">
          <WireframeButton to="/capture-success" fullWidth>
            Submit Collection
          </WireframeButton>
          <WireframeButton to="/capture-start" variant="secondary" fullWidth>
            Retake Photo
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}