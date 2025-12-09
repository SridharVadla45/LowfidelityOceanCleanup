import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { Link } from 'react-router-dom';

const pendingRequests = [
  { id: 1, fisher: 'Fisher_0x4a2', distance: '2.3 km', weight: '12 kg', time: '5 min ago' },
  { id: 2, fisher: 'Fisher_0x9f1', distance: '4.5 km', weight: '8 kg', time: '12 min ago' },
  { id: 3, fisher: 'Fisher_0x1b5', distance: '3.1 km', weight: '15 kg', time: '18 min ago' },
];

export function ScraperDashboard() {
  return (
    <WireframeLayout title="Scraper Dashboard" showBottomNav={true}>
      <div className="flex flex-col h-full space-y-4">
        {/* Stats Section */}
        <div className="border-2 border-gray-800 p-4 bg-gray-50 space-y-3 flex-shrink-0">
          <h3>Your Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-800 p-3 bg-white">
              <p className="text-xs text-gray-600 mb-1">Collections</p>
              <p>28</p>
            </div>
            <div className="border border-gray-800 p-3 bg-white">
              <p className="text-xs text-gray-600 mb-1">Total Scraped</p>
              <p>342 kg</p>
            </div>
          </div>
          <div className="border border-gray-800 p-3 bg-gray-100 text-center">
            <p className="text-xs text-gray-600">Earnings</p>
            <p>84 USDC</p>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="flex-1 overflow-y-auto">
          <h3 className="mb-3">Pending Requests ({pendingRequests.length})</h3>
          <div className="space-y-3">
            {pendingRequests.map((request) => (
              <div key={request.id} className="border-2 border-gray-800 p-4 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="mb-1">{request.fisher}</h4>
                    <p className="text-sm text-gray-600">Distance: {request.distance}</p>
                    <p className="text-sm text-gray-600">Weight: {request.weight}</p>
                  </div>
                  <div className="border border-gray-800 px-2 py-1 text-xs bg-gray-100">
                    {request.time}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <WireframeButton to="/scraper-accept" fullWidth>
                    Accept
                  </WireframeButton>
                  <WireframeButton variant="secondary" fullWidth>
                    Decline
                  </WireframeButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Action */}
        <div className="flex-shrink-0 pb-4">
          <WireframeButton to="/marketplace" variant="secondary" fullWidth>
            View Marketplace
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}