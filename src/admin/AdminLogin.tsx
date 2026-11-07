import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowLeft, KeyRound, Sparkles } from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { ASHRAM_INFO } from '../data/ashramData';

export const AdminLogin: React.FC = () => {
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      const res = login(username, password, rememberMe);
      setLoading(false);
      if (!res.success) {
        setError(res.error || 'Invalid credentials');
      }
    }, 400);
  };

  const handleFillDemo = () => {
    setUsername('admin');
    setPassword('ashram@123');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#F3ECE4] to-[#EAE0D5] flex items-center justify-center p-4">
      {/* Background ambient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-md w-full relative z-10 space-y-6">
        
        {/* Back link */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-600 hover:text-amber-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Ashram Website</span>
        </button>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-amber-200/80 space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 p-0.5 shadow-lg flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center p-2">
                <img
                  src="/images/logo.svg"
                  alt="Ashram Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div>
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-amber-600" />
                <span>Authorized Staff Portal</span>
              </span>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mt-2">
                Ashram CMS Admin
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {ASHRAM_INFO.name}
              </p>
            </div>
          </div>

          {/* Quick Demo Helper Pill */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3 flex items-center justify-between text-xs">
            <div className="text-amber-900 space-y-0.5">
              <div className="font-bold flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-amber-600" />
                <span>Default Access Credentials</span>
              </div>
              <p className="text-[11px] text-amber-700 font-mono">
                admin / ashram@123
              </p>
            </div>
            <button
              type="button"
              onClick={handleFillDemo}
              className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-bold shadow-sm transition-transform active:scale-95"
            >
              Autofill
            </button>
          </div>

          {/* Error notice */}
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Username */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  required
                  type="text"
                  placeholder="Enter administrator username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter security password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center space-x-2 cursor-pointer text-slate-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500"
                />
                <span>Remember on this browser</span>
              </label>

              <span className="text-[11px] text-amber-700 font-medium">
                Offline & Local Secure
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-60"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Sign In to Admin Panel</span>
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="text-center pt-2 border-t border-slate-100 text-[11px] text-slate-400">
            <span>© {new Date().getFullYear()} Sahaj Kriyayoga CMS • Local Storage Sync</span>
          </div>

        </div>

      </div>
    </div>
  );
};
