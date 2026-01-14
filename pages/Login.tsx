
import React, { useState } from 'react';

interface LoginProps {
  onNavigate: (page: string) => void;
}

const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Login Successful! Welcome back.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6 bg-slate-50 animate-in fade-in duration-1000 relative">
      <div className="max-w-6xl w-full flex bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100 relative z-10">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600 text-[9px] font-bold uppercase tracking-widest mb-6">
              [ ACCOUNT ACCESS ]
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 font-futuristic uppercase">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
              {isLogin 
                ? 'Enter your credentials to sign in.' 
                : 'Join our developer network today.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} id="login-form" className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  id="login-fullName"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-5 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-400"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest ml-1">Email Address</label>
              <input
                id="login-email"
                type="email"
                required
                placeholder="email@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-5 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-400"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest ml-1">Password</label>
              <input
                id="login-password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-5 text-slate-900 focus:border-indigo-400 focus:outline-none transition-all text-sm placeholder:text-slate-400"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button
              id="login-submit"
              type="submit"
              className="w-full bg-indigo-600 text-white py-6 rounded-2xl font-bold text-lg uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl active:scale-95 mt-6"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
              >
                {isLogin ? 'Register Now' : 'Login'}
              </button>
            </p>
          </div>
        </div>

        {/* Right Side: Branding */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-indigo-600 p-20 flex-col justify-between border-l border-slate-100 overflow-hidden text-white">
          <div className="relative z-10">
            <div 
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-j text-white text-2xl"></i>
              </div>
              <span className="text-3xl font-bold tracking-tighter uppercase font-futuristic">Junction Rails</span>
            </div>
          </div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-6xl font-bold leading-tight tracking-tight font-futuristic uppercase">
              Secure <br /> <span className="text-indigo-200 italic">Access</span> <br /> To Elite <br /> Talent.
            </h2>
          </div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
