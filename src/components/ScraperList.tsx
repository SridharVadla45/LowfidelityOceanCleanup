import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';

const scrapers = [
  { id: 1, name: 'Scraper Station A', distance: '2.3 km', available: true },
  { id: 2, name: 'Scraper Station B', distance: '4.1 km', available: true },
  { id: 3, name: 'Scraper Station C', distance: '5.7 km', available: false },
  { id: 4, name: 'Scraper Station D', distance: '8.2 km', available: true },
  { id: 5, name: 'Scraper Station E', distance: '12.5 km', available: true },
];

export function ScraperList() {
  return (
    <WireframeLayout title="Scraper Partners Nearby" showBackButton={true}>
      <div className="flex flex-col h-full">
        <p className="text-sm text-gray-600 mb-4">
          Find a nearby scraper partner for collection
        </p>

        {/* List Items */}
        <div className="space-y-3 flex-1 overflow-y-auto">
          {scrapers.map((scraper) => (
            <div key={scraper.id} className="border-2 border-gray-800 p-4 bg-white">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="mb-1">{scraper.name}</h3>
                  <p className="text-sm text-gray-600">Distance: {scraper.distance}</p>
                </div>
                <div className={`border border-gray-800 px-2 py-1 text-xs ${scraper.available ? 'bg-gray-100' : 'bg-white'}`}>
                  {scraper.available ? '● Available' : '○ Busy'}
                </div>
              </div>
              {scraper.available && (
                <WireframeButton to="/scraper-request-sent" fullWidth>
                  Request Partner
                </WireframeButton>
              )}
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-4 pb-4">
          <WireframeButton to="/fisherman-dashboard" variant="secondary" fullWidth>
            Back to Dashboard
          </WireframeButton>
        </div>
      </div>
    </WireframeLayout>
  );
}