import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

export function ScraperAccept() {
  return (
    <WireframeLayout title="Request Accepted" showBackButton={true}>
      <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
        {/* Success Icon */}
        <div className="w-32 h-32 border-4 border-gray-800 flex items-center justify-center bg-gray-100">
          <div className="text-5xl">✓</div>
        </div>

        <div className="text-center space-y-4 w-full">
          <h2>Request Accepted!</h2>
          
          {/* Collection Details */}
          <div className="border-2 border-gray-800 p-4 bg-gray-50 max-w-xs mx-auto">
            <h3 className="mb-3">Collection Details</h3>
            <div className="space-y-2 text-sm text-left">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-600">Fisher:</span>
                <span>Fisher_0x4a2</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-600">Distance:</span>
                <span>2.3 km</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-600">Est. Weight:</span>
                <span>12 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Reward:</span>
                <span>6 USDC</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border border-gray-800 p-3 bg-white max-w-xs mx-auto">
            <p className="text-sm">Fisher has been notified</p>
            <p className="text-xs text-gray-600 mt-1">
              Coordinate pickup via in-app chat
            </p>
          </div>

          {/* Navigation Placeholder */}
          <div className="border-2 border-gray-800 p-6 bg-gray-50 max-w-xs mx-auto">
            <p className="text-xs text-gray-600">[ Map View ]</p>
            <p className="text-xs text-gray-600 mt-2">Navigate to location</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3">
          <WireframeButton fullWidth>
            Start Navigation
          </WireframeButton>
          <WireframeButton to="/scraper-dashboard" variant="secondary" fullWidth>
            Back to Dashboard
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}
