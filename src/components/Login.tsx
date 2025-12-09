import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Waves, Mail, Lock } from 'lucide-react';
import { toast } from 'sonner';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email);
            toast.success('Welcome back!');
            navigate('/marketplace');
        } catch (error) {
            toast.error('Failed to login');
        } finally {
            setLoading(false);
        }
    };

    const handleQuickStart = async () => {
        setLoading(true);
        try {
            await login('demo@oceanclean.com');
            toast.success('Welcome to Demo Mode!');
            navigate('/marketplace');
        } catch (error) {
            toast.error('Failed to start demo');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full min-h-[667px] flex flex-col items-center justify-center p-6 bg-background relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-background pointer-events-none" />

            <div className="w-full relative z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-xl shadow-cyan-500/20">
                        <Waves className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                        OceanClean
                    </h1>
                    <p className="text-muted-foreground">Log in to verify your impact</p>
                </div>

                <div className="bg-card backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full h-12 pl-10 rounded-xl bg-background/50 border border-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full h-12 pl-10 rounded-xl bg-background/50 border border-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-900/20 transition-all active:scale-95"
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-6">
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-card text-muted-foreground">or</span>
                        </div>
                        <button
                            onClick={handleQuickStart}
                            type="button"
                            className="w-full h-12 mt-4 border border-input hover:bg-white/5 text-foreground font-medium rounded-xl transition-all"
                        >
                            Fast Demo Login
                        </button>
                    </div>

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        No account?{' '}
                        <Link to="/signup" className="text-primary hover:text-cyan-400 font-medium">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
