import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-2xl w-full space-y-8 text-center">
        {/* Animated Logo / Title */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            VIX <span className="text-white/20">SYSTEM</span>
          </h1>
          <p className="text-white/50 text-sm uppercase tracking-[0.3em] font-medium">
            Next-Gen Debugging Engine
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-[#111111] border border-white/5 p-8 rounded-xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">System Operational</span>
          </div>

          <h2 className="text-xl font-medium mb-4">VIX Backend is Live</h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto">
            This endpoint is the core of the VIX AI Debugger. It is currently processing stack traces and providing real-time environmental diagnostics for the VIX Browser Extension.
          </p>
        </div>

        {/* Footer / Links */}
        <div className="flex items-center justify-center gap-8 pt-8">
          <a 
            href="https://github.com/Sankalan7/vix" 
            className="text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest"
          >
            Documentation
          </a>
          <div className="w-1 h-1 rounded-full bg-white/10"></div>
          <span className="text-xs text-white/20 uppercase tracking-widest font-mono">
            v1.0.0-production
          </span>
        </div>
      </div>
    </main>
  );
}
