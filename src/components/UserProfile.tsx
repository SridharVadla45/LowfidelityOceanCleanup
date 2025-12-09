import { WireframeLayout } from './WireframeLayout';
import { WireframeButton } from './WireframeButton';
import { User, Settings, LogOut, Wallet, Dna, History, CreditCard, ShieldCheck, ChevronRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function UserProfile() {
    const { user, logout } = useAuth();

    const menuItems = [
        { icon: <History className="w-5 h-5 text-blue-400" />, label: 'Activity History', sub: 'View all your collections' },
        { icon: <Dna className="w-5 h-5 text-purple-400" />, label: 'My NFTs', sub: 'Manage your digital assets' },
        { icon: <CreditCard className="w-5 h-5 text-emerald-400" />, label: 'Payment Methods', sub: 'Linked wallets & banks' },
        { icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />, label: 'Security', sub: '2FA & Password' },
    ];

    return (
        <WireframeLayout title="Profile" showBottomNav={true}>
            <div className="flex flex-col h-full space-y-6 scrollbar-hide">
                {/* Profile Header */}
                <div className="flex flex-col items-center pt-4">
                    <div className="relative mb-3">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur opacity-75"></div>
                        <div className="w-24 h-24 bg-card rounded-full border-2 border-white/10 flex items-center justify-center relative overflow-hidden">
                            {user?.avatar ? (
                                <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <User className="w-10 h-10 text-muted-foreground" />
                            )}
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-white">{user?.username || 'Fisher_0x4a2'}</h2>
                    <p className="text-sm text-cyan-400 font-medium">Level 5 Recycler</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-card/40 border border-white/5 rounded-2xl p-4 flex flex-col items-center">
                        <span className="text-xs text-muted-foreground mb-1">Total Earned</span>
                        <span className="text-lg font-bold text-white">1,240 OCN</span>
                    </div>
                    <div className="bg-card/40 border border-white/5 rounded-2xl p-4 flex flex-col items-center">
                        <span className="text-xs text-muted-foreground mb-1">Impact</span>
                        <span className="text-lg font-bold text-white">3,200 kg</span>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-2">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1 mb-2">Account</h3>
                    {menuItems.map((item, index) => (
                        <button key={index} className="w-full bg-card/30 hover:bg-card/50 border border-white/5 rounded-xl p-4 flex items-center transition-colors group">
                            <div className="bg-white/5 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div className="text-left flex-1">
                                <p className="text-sm font-medium text-white">{item.label}</p>
                                <p className="text-xs text-muted-foreground">{item.sub}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
                        </button>
                    ))}
                </div>

                {/* Settings & Logout */}
                <div className="space-y-3 pt-2 pb-safe">
                    <div className="flex gap-3">
                        <WireframeButton variant="secondary" fullWidth className="h-12 border-dashed border-white/10 bg-transparent hover:bg-white/5">
                            <Settings className="w-4 h-4 mr-2" /> Settings
                        </WireframeButton>
                        <WireframeButton variant="danger" fullWidth className="h-12 bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20" onClick={logout}>
                            <LogOut className="w-4 h-4 mr-2" /> Logout
                        </WireframeButton>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Wallet className="w-5 h-5 text-blue-400" />
                            <div className="text-left">
                                <p className="text-xs font-medium text-blue-200">Wallet Connected</p>
                                <p className="text-[10px] text-blue-400/70 font-mono">0x4a2...89b1</p>
                            </div>
                        </div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    </div>
                </div>
            </div>
        </WireframeLayout>
    );
}
