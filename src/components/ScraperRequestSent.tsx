import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

export function ScraperRequestSent() {
  return (
    <WireframeLayout title="Request Sent" showBackButton={true}>
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {/* Icon */}
        <div className="w-32 h-32 border-4 border-gray-800 flex items-center justify-center bg-gray-50">
          <div className="text-5xl">📤</div>
        </div>

        <div className="text-center space-y-4">
          <h2>Request Sent</h2>
          <div className="border-2 border-gray-800 p-4 bg-gray-50 max-w-xs mx-auto">
            <p>Waiting for Scraper Acceptance</p>
            <p className="text-sm text-gray-600 mt-2">
              You will be notified when the scraper responds
            </p>
          </div>

          {/* Scraper Details */}
          <div className="border-2 border-gray-800 p-3 bg-white text-sm max-w-xs mx-auto">
            <p>Scraper Station A</p>
            <p className="text-xs text-gray-600">Distance: 2.3 km</p>
            <p className="text-xs text-gray-600 mt-2">Est. collection reward: 6 USDC</p>
          </div>

          {/* Status */}
          <div className="border border-gray-800 p-3 bg-gray-100 text-sm max-w-xs mx-auto">
            <p className="text-xs text-gray-600">Status: Pending</p>
            <p className="text-xs text-gray-600">Sent: 2 min ago</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3">
          <WireframeButton variant="secondary" fullWidth>
            Cancel Request
          </WireframeButton>
          <WireframeButton to="/fisherman-dashboard" fullWidth>
            Back to Dashboard
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}