import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CaptureStart } from './components/CaptureStart';
import { CapturePreview } from './components/CapturePreview';
import { CaptureSuccess } from './components/CaptureSuccess';
import { NFTDraft } from './components/NFTDraft';
import { NFTSuccess } from './components/NFTSuccess';
import { FishermanDashboard } from './components/FishermanDashboard';
import { FisherLogForm } from './components/FisherLogForm';
import { FisherLogSuccess } from './components/FisherLogSuccess';
import { ScraperList } from './components/ScraperList';
import { ScraperRequestSent } from './components/ScraperRequestSent';
import { ScraperDashboard } from './components/ScraperDashboard';
import { ScraperAccept } from './components/ScraperAccept';
import { Marketplace } from './components/Marketplace';
import { NFTDetail } from './components/NFTDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-[375px] min-h-[667px] border-4 border-gray-800 rounded-[40px] overflow-hidden bg-white shadow-2xl">
          <Routes>
            <Route path="/" element={<Marketplace />} />
            <Route path="/capture-start" element={<CaptureStart />} />
            <Route path="/capture-preview" element={<CapturePreview />} />
            <Route path="/capture-success" element={<CaptureSuccess />} />
            <Route path="/nft-draft" element={<NFTDraft />} />
            <Route path="/nft-success" element={<NFTSuccess />} />
            <Route path="/fisherman-dashboard" element={<FishermanDashboard />} />
            <Route path="/fisher-log-form" element={<FisherLogForm />} />
            <Route path="/fisher-log-success" element={<FisherLogSuccess />} />
            <Route path="/scraper-list" element={<ScraperList />} />
            <Route path="/scraper-request-sent" element={<ScraperRequestSent />} />
            <Route path="/scraper-dashboard" element={<ScraperDashboard />} />
            <Route path="/scraper-accept" element={<ScraperAccept />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/nft-detail" element={<NFTDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}