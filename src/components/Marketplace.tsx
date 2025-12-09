import { WireframeLayout } from './WireframeLayout';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const nftData = [
  { id: 1, title: 'Ocean Plastic #742', collector: 'Fisher_0x4a2', impact: 85, price: '12.5 USDC' },
  { id: 2, title: 'Ocean Plastic #741', collector: 'Collector_0x9f', impact: 92, price: '18.0 USDC' },
  { id: 3, title: 'Ocean Plastic #740', collector: 'Fisher_0x1b5', impact: 78, price: '9.8 USDC' },
  { id: 4, title: 'Ocean Plastic #739', collector: 'Collector_0x3d', impact: 88, price: '15.2 USDC' },
  { id: 5, title: 'Ocean Plastic #738', collector: 'Fisher_0x6e1', impact: 95, price: '22.0 USDC' },
  { id: 6, title: 'Ocean Plastic #737', collector: 'Collector_0x2a', impact: 81, price: '11.5 USDC' },
];

export function Marketplace() {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <WireframeLayout title="Marketplace" showBottomNav={true}>
      <div className="flex flex-col h-full">
        {/* Ocean Problem Banner */}
        <div className="border-2 border-gray-800 bg-gray-50 p-4 mb-4">
          <h3 className="mb-2">Ocean Plastic Crisis</h3>
          <p className="text-sm text-gray-600 mb-3">
            8M+ tons of plastic enter our oceans yearly. Join OceanClean to combat this crisis through verified cleanup & NFT rewards.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="border border-gray-800 p-2 bg-white text-center">
              <p className="text-xs text-gray-600">Cleaned</p>
              <p className="text-sm">3.2K kg</p>
            </div>
            <div className="border border-gray-800 p-2 bg-white text-center">
              <p className="text-xs text-gray-600">NFTs</p>
              <p className="text-sm">742</p>
            </div>
            <div className="border border-gray-800 p-2 bg-white text-center">
              <p className="text-xs text-gray-600">Helpers</p>
              <p className="text-sm">156</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 border-2 border-gray-800 mb-4">
          <button
            onClick={() => setActiveTab('trending')}
            className={`p-3 border-r border-gray-800 ${activeTab === 'trending' ? 'bg-gray-200' : 'bg-white'}`}
          >
            Trending
          </button>
          <button
            onClick={() => setActiveTab('latest')}
            className={`p-3 border-r border-gray-800 ${activeTab === 'latest' ? 'bg-gray-200' : 'bg-white'}`}
          >
            Latest
          </button>
          <button
            onClick={() => setActiveTab('top')}
            className={`p-3 ${activeTab === 'top' ? 'bg-gray-200' : 'bg-white'}`}
          >
            Top
          </button>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-2 gap-3 overflow-y-auto pb-4">
          {nftData.map((nft) => (
            <Link
              key={nft.id}
              to="/nft-detail"
              className="border-2 border-gray-800 bg-white hover:bg-gray-50"
            >
              {/* NFT Image Placeholder */}
              <div className="aspect-square border-b-2 border-gray-800 bg-gray-50 flex items-center justify-center">
                <p className="text-xs text-gray-600">[ NFT ]</p>
              </div>
              
              {/* NFT Info */}
              <div className="p-2">
                <p className="text-sm mb-1">{nft.title}</p>
                <p className="text-xs text-gray-600 mb-2">{nft.collector}</p>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs">{nft.price}</span>
                  <div className="border border-gray-800 px-2 py-1 text-xs bg-gray-100">
                    Impact: {nft.impact}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WireframeLayout>
  );
}