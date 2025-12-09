import { WireframeLayout } from './WireframeLayout';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const nftData = [
  { id: 1, title: 'Recycled Turtle #742', collector: 'Fisher_0x4a2', hype: 98, price: '125.0 USDC', image: '/images/turtle.png' },
  { id: 2, title: 'Plastic Whale Mosaic', collector: 'Collector_0x9f', hype: 95, price: '88.5 USDC', image: '/images/whale.png' },
  { id: 3, title: 'Abstract Wave Clean', collector: 'Fisher_0x1b5', hype: 92, price: '45.0 USDC', image: '/images/wave.png' },
  { id: 4, title: 'Ghost Net Sculpture', collector: 'Collector_0x3d', hype: 88, price: '32.5 USDC', image: 'https://images.unsplash.com/photo-1615811361523-6bd03c770c3c?w=400&auto=format' },
  { id: 5, title: 'Bottle Cap Portrait', collector: 'Fisher_0x6e1', hype: 85, price: '22.0 USDC', image: 'https://images.unsplash.com/photo-1537084642907-629340c7e59c?w=400&auto=format' },
  { id: 6, title: 'Microplastic Art', collector: 'Collector_0x2a', hype: 82, price: '18.5 USDC', image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400&auto=format' },
];

export function Marketplace() {
  const [activeTab, setActiveTab] = useState('trending');
  const { user, connectWallet } = useAuth();

  return (
    <WireframeLayout title="Marketplace" showBottomNav={true}>
      <div className="flex flex-col h-full space-y-4">
        {/* Wallet & Stats */}
        <div className="bg-card/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs text-muted-foreground">Total Balance</p>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                $1,240.50
              </h2>
            </div>
            <button
              onClick={connectWallet}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/20 hover:bg-primary/30 text-primary rounded-full text-xs font-medium transition-colors border border-primary/20"
            >
              <Wallet className="w-3.5 h-3.5" />
              {user?.walletAddress ? 'Connected' : 'Connect Wallet'}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 bg-background/50 rounded-xl text-center border border-white/5">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Cleaned</p>
              <p className="text-sm font-semibold text-cyan-400">3.2K kg</p>
            </div>
            <div className="p-2 bg-background/50 rounded-xl text-center border border-white/5">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">NFTs</p>
              <p className="text-sm font-semibold text-purple-400">742</p>
            </div>
            <div className="p-2 bg-background/50 rounded-xl text-center border border-white/5">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Hype</p>
              <p className="text-sm font-semibold text-emerald-400">98%</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex p-1 bg-secondary/50 rounded-xl border border-white/5">
          {['trending', 'latest', 'top'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg text-xs font-medium capitalize transition-all ${activeTab === tab
                ? 'bg-background text-foreground shadow-sm ring-1 ring-white/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-2 gap-3 pb-20">
          {nftData.map((nft) => (
            <Link
              key={nft.id}
              to="/nft-detail"
              className="bg-card rounded-2xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all group shadow-sm"
            >
              {/* NFT Image */}
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded-md flex items-center gap-1 border border-white/10">
                  <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                  <span className="text-[10px] font-bold text-white">{nft.hype}</span>
                </div>
              </div>

              {/* NFT Info */}
              <div className="p-3">
                <p className="font-medium text-sm truncate mb-0.5">{nft.title}</p>
                <p className="text-[10px] text-muted-foreground mb-2 truncate">by {nft.collector}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">{nft.price}</span>
                  <span className="text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                    Verified
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WireframeLayout>
  );
}