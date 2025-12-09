import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Waves, Mail, Lock, User } from 'lucide-react';
import { toast } from 'sonner';

export function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signup(email, name);
            toast.success('Account created!');
            navigate('/marketplace');
        } catch (error) {
            toast.error('Failed to create account');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full min-h-[667px] flex flex-col items-center justify-center p-6 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-background pointer-events-none" />

            <div className="w-full relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-4 shadow-xl shadow-blue-500/20">
                        <Waves className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-foreground mb-1">Join the Movement</h1>
                    <p className="text-muted-foreground text-sm">Create account to start earning</p>
                </div>

                <div className="bg-card backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground ml-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full h-12 pl-10 rounded-xl bg-background/50 border border-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

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
                                    placeholder="Create password"
                                    className="w-full h-12 pl-10 rounded-xl bg-background/50 border border-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 mt-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-900/20 transition-all active:scale-95"
                        >
                            {loading ? 'Creating...' : 'Create Account'}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Already a member?{' '}
                        <Link to="/login" className="text-primary hover:text-cyan-400 font-medium">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
