import React, { useState } from 'react';

export default function App() {
  const [isTapeOpen, setIsTapeOpen] = useState(false);
  const [activeBlade, setActiveBlade] = useState<number | null>(null);

  const projects = [
    { id: 'BLADE_01', title: 'Threat Intelligence SIEM', category: 'DETECTION ENGINE', desc: 'Real-time anomaly detection engine with machine learning logs', metrics: '2.4M/s' },
    { id: 'BLADE_02', title: 'Zero Trust NAC Platform', category: 'NETWORK ACCESS', desc: 'Identity-aware network access control for remote team', metrics: '140 NODE' },
    { id: 'BLADE_03', title: 'Autonomous Vuln Scanner', category: 'SURFACE MGMT', desc: 'Continuous attack surface management & risk scoring', metrics: '12K TARGETS' },
    { id: 'BLADE_04', title: 'IR Automation Framework', category: 'ORCHESTRATION', desc: 'Automated incident response playbooks & containment', metrics: '52 RULES' },
    { id: 'BLADE_05', title: 'Supply Chain Security Gate', category: 'CI/CD INTEGRITY', desc: 'Software supply chain integrity verification & policy gate', metrics: '80 REPOS' },
  ];

  return (
    <div className="min-h-screen bg-[#0E1117] text-slate-200 font-sans flex flex-col justify-between p-6 sm:p-12 select-none antialiased">
      
      {/* 1. TOP NAVIGATION */}
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center text-xs font-mono border-b border-slate-800/80 pb-5 text-slate-400">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span>
          <span className="tracking-widest font-semibold text-slate-200">DATACENTER // NODE_01</span>
        </div>
        <button 
          onClick={() => setIsTapeOpen(true)}
          className="hover:text-purple-400 transition-colors cursor-pointer tracking-wider"
        >
          [ OPERATOR TAPE ]
        </button>
      </header>

      {/* 2. MAIN PHYSICAL RACK OBJECT */}
      <main className="my-auto max-w-4xl w-full mx-auto py-10">
        
        <div className="mb-4 flex justify-between items-end font-mono text-xs text-slate-500 px-2">
          <span>FRAME: HEAVY-DUTY RACK 42U</span>
          <span>STATUS: ALL BLADES FUNCTIONAL</span>
        </div>

        {/* Outer Metal Chassis (3D Physical Frame) */}
        <div className="bg-[#151A24] border-2 border-[#263044] rounded-2xl p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative border-t-[#384660]">
          
          {/* Top Exhaust Vent Panel (LED Lights Updated) */}
          <div className="bg-[#0D1117] border border-slate-800 rounded-xl p-3 mb-6 flex justify-between items-center font-mono text-[11px] text-slate-500 shadow-inner">
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
            </div>
            <span className="tracking-wider text-slate-400">SYSTEM EXHAUST VENT // DUAL COOLING ACTIVE</span>
            <span className="text-emerald-400 font-bold">24°C</span>
          </div>

          {/* TAPE-00 : PHYSICAL CARTRIDGE SLOT */}
          <div 
            onClick={() => setIsTapeOpen(!isTapeOpen)}
            className="group relative mb-6 bg-gradient-to-r from-purple-950/80 via-[#1F172B] to-[#151A24] border-2 border-purple-500/50 hover:border-purple-400 rounded-xl p-4 sm:p-5 flex justify-between items-center cursor-pointer transition-all duration-300 shadow-lg shadow-purple-950/30 hover:scale-[1.005]"
          >
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-[8px] text-slate-900 font-bold">+</span>
              <span className="px-2.5 py-1 text-xs font-mono bg-purple-900/90 text-purple-200 rounded border border-purple-500 font-bold tracking-wider">
                TAPE-00
              </span>
              <div>
                <span className="text-base font-semibold text-white group-hover:text-purple-200 transition-colors">
                  OPERATOR PROFILE // YEOM WONYOUNG
                </span>
                <p className="text-xs font-mono text-purple-300/70">SECURITY ENGINEER & SYSTEM ARCHITECT</p>
              </div>
            </div>

            <span className="text-xs font-mono bg-purple-900/40 text-purple-300 border border-purple-700/60 px-3 py-1.5 rounded-lg group-hover:bg-purple-800 group-hover:text-white transition-all">
              {isTapeOpen ? 'EJECT CARTRIDGE ⏏' : 'PULL CARTRIDGE ↘'}
            </span>
          </div>

          {/* SERVER RACK SLOTS */}
          <div className="space-y-3.5 relative">
            {projects.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => setActiveBlade(activeBlade === idx ? null : idx)}
                className={`relative rounded-xl border-2 transition-all duration-200 cursor-pointer overflow-hidden ${
                  activeBlade === idx 
                    ? 'bg-[#1E2636] border-purple-400 shadow-2xl' 
                    : 'bg-[#121722] border-slate-800 hover:border-slate-600 hover:bg-[#171E2C]'
                }`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-slate-600 to-slate-800 border-r border-slate-900"></div>

                <div className="p-4 sm:p-5 pl-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                    <span className="text-xs font-mono text-slate-500 font-bold tracking-wider">{item.id}</span>
                    <span className="text-base font-semibold text-slate-100">{item.title}</span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="hidden md:inline text-slate-400">{item.category}</span>
                    <span className="px-3 py-1 bg-[#0A0D12] border border-slate-700 text-slate-300 rounded-md font-bold">
                      {item.metrics}
                    </span>
                  </div>
                </div>

                {activeBlade === idx && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-300 border-t border-slate-700/50 bg-[#161D2B] leading-relaxed">
                    <p className="font-mono text-xs text-purple-400 mb-1">// BLADE SPECIFICATION</p>
                    {item.desc}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Chassis Power Rail */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-500">
            <span>PWR: MAIN_BUS_48V</span>
            <div className="flex gap-1">
              {[...Array(12)].map((_, i) => (
                <span key={i} className="w-2 h-3 bg-emerald-500/80 rounded-sm"></span>
              ))}
            </div>
            <span>LOAD: 42%</span>
          </div>

        </div>
      </main>

      {/* 3. OPERATOR TAPE MODAL */}
      {isTapeOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex justify-center items-center p-4">
          <div className="bg-[#151A24] border-2 border-purple-500/60 rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setIsTapeOpen(false)}
              className="absolute top-4 right-4 text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300 hover:text-white px-3 py-1 rounded cursor-pointer"
            >
              [ CLOSE ]
            </button>

            <span className="text-xs font-mono text-purple-400 font-bold">// TAPE-00 DATA</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-1">Yeom Wonyoung</h2>
            <p className="text-xs font-mono text-slate-400 mb-5">Security Engineer</p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
              Building defensive security systems at scale. Specializing in threat detection, zero-trust architecture, and DevSecOps automation.
            </p>

            <div className="space-y-2 border-t border-slate-800 pt-4 font-mono text-xs">
              <p className="text-slate-500 mb-2">// CORE COMPETENCIES</p>
              {['Threat Detection & SIEM', 'Zero Trust Architecture', 'Cloud Security (AWS/GCP)', 'Incident Response Automation'].map((skill, i) => (
                <div key={i} className="bg-[#0D1117] text-slate-200 px-3 py-2 rounded border border-slate-800">
                  ▸ {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. FOOTER */}
      <footer className="max-w-6xl w-full mx-auto text-center text-xs font-mono text-slate-600 border-t border-slate-800/80 pt-4">
        HARDWARE-INSPIRED SECURITY PORTFOLIO // 2026
      </footer>
    </div>
  );
}