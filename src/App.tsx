import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Toaster } from 'sonner';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
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
import { UserProfile } from './components/UserProfile';

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black flex items-center justify-center sm:p-4">
          <div className="w-full max-w-[375px] h-[100dvh] sm:h-[812px] sm:max-h-[85vh] bg-background sm:rounded-[40px] overflow-hidden shadow-2xl relative">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Navigate to="/login" />} />

              <Route path="/marketplace" element={<ProtectedRoute><Marketplace /></ProtectedRoute>} />
              <Route path="/capture-start" element={<ProtectedRoute><CaptureStart /></ProtectedRoute>} />
              <Route path="/capture-preview" element={<ProtectedRoute><CapturePreview /></ProtectedRoute>} />
              <Route path="/capture-success" element={<ProtectedRoute><CaptureSuccess /></ProtectedRoute>} />
              <Route path="/nft-draft" element={<ProtectedRoute><NFTDraft /></ProtectedRoute>} />
              <Route path="/nft-success" element={<ProtectedRoute><NFTSuccess /></ProtectedRoute>} />
              <Route path="/fisherman-dashboard" element={<ProtectedRoute><FishermanDashboard /></ProtectedRoute>} />
              <Route path="/fisher-log-form" element={<ProtectedRoute><FisherLogForm /></ProtectedRoute>} />
              <Route path="/fisher-log-success" element={<ProtectedRoute><FisherLogSuccess /></ProtectedRoute>} />
              <Route path="/scraper-list" element={<ProtectedRoute><ScraperList /></ProtectedRoute>} />
              <Route path="/scraper-request-sent" element={<ProtectedRoute><ScraperRequestSent /></ProtectedRoute>} />
              <Route path="/scraper-dashboard" element={<ProtectedRoute><ScraperDashboard /></ProtectedRoute>} />
              <Route path="/scraper-accept" element={<ProtectedRoute><ScraperAccept /></ProtectedRoute>} />
              <Route path="/nft-detail" element={<ProtectedRoute><NFTDetail /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
            </Routes>
            <Toaster position="top-center" richColors />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}