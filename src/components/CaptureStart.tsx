import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

export function CaptureStart() {
  return (
    <WireframeLayout title="Collect Plastic" showBottomNav={true}>
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        {/* Camera Placeholder */}
        <div className="w-64 h-64 border-4 border-gray-800 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-gray-800 rounded-full mx-auto mb-2"></div>
            <p className="text-gray-600">Camera</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3">
          <WireframeButton to="/capture-preview" fullWidth>
            Take Photo
          </WireframeButton>
          <WireframeButton to="/capture-preview" variant="secondary" fullWidth>
            Upload from Gallery
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}
