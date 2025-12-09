import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    username?: string;
    avatar?: string;
    walletAddress?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string) => Promise<void>;
    signup: (email: string, name: string) => Promise<void>;
    logout: () => void;
    connectWallet: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUser({
            id: '1',
            name: 'Demo User',
            email,
            username: 'Fisher_0x4a2',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&auto=format'
        });
    };

    const signup = async (email: string, name: string) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUser({ id: '1', name, email });
    };

    const logout = () => {
        setUser(null);
    };

    const connectWallet = async () => {
        if (!user) return;
        // Simulate wallet connection
        await new Promise(resolve => setTimeout(resolve, 800));
        setUser({ ...user, walletAddress: '0x71C...9A23' });
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            login,
            signup,
            logout,
            connectWallet
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
