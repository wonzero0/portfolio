import React, { useState } from 'react';

export default function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(0);

  const projects = [
    { 
      id: '01', 
      title: 'Threat Intelligence SIEM', 
      category: 'Detection Engine', 
      metrics: '2.4M Logs/sec', 
      period: '2025 - PRESENT',
      desc: 'Real-time anomaly detection engine with machine learning log processing. Built for high-throughput enterprise security monitoring.' 
    },
    { 
      id: '02', 
      title: 'Zero Trust NAC Platform', 
      category: 'Network Access Control', 
      metrics: '140 Distributed Nodes', 
      period: '2024 - 2025',
      desc: 'Identity-aware network access control for remote teams. Implemented continuous authentication and posture assessment.' 
    },
    { 
      id: '03', 
      title: 'Autonomous Vuln Scanner', 
      category: 'Attack Surface Mgmt', 
      metrics: '12,000 Targets', 
      period: '2024',
      desc: 'Automated infrastructure scanning pipeline designed for continuous attack surface analysis and risk scoring.' 
    },
    { 
      id: '04', 
      title: 'IR Automation Framework', 
      category: 'Orchestration & SOAR', 
      metrics: '52 Response Playbooks', 
      period: '2023 - 2024',
      desc: 'Automated incident response framework integrating multiple security vendor APIs to reduce Mean Time to Respond (MTTR).' 
    },
  ];

  return (
    /* 배경색을 기존 #0B0914에서 좀 더 쾌적한 #13111C로 변경 */
    <div className="min-h-screen bg-[#13111C] text-slate-100 font-sans flex flex-col justify-between selection:bg-purple-500 selection:text-white antialiased">
      
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-[#13111C]/90 backdrop-blur-md border-b border-purple-900/30 px-6 sm:px-16 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_12px_#e879f9]"></span>
            <span className="font-bold tracking-tight text-sm text-white">Yeom Wonyoung</span>
            <span className="text-slate-500 font-mono text-xs">/</span>
            <span className="text-xs font-mono text-purple-300 font-medium">Security Engineer</span>
          </div>

          <button 
            onClick={() => setIsProfileOpen(true)}
            className="text-xs font-mono px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-200 hover:bg-purple-600 hover:text-white transition-all duration-200 font-semibold cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            [ OPERATOR FILE ]
          </button>
        </div>
      </header>

      {/* HERO & CONTENT */}
      <main className="max-w-6xl w-full mx-auto px-6 sm:px-16 py-16 sm:py-20 my-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-700/40 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span>
            <p className="text-xs font-mono text-fuchsia-300 tracking-wider uppercase">Architecture & Defense Systems</p>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Securing infrastructure at scale with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300 drop-shadow-[0_0_20px_rgba(216,180,254,0.4)]">clarity</span> and <span className="text-purple-300 drop-shadow-[0_0_20px_rgba(196,181,253,0.3)]">precision</span>.
          </h1>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            A showcase of core security platforms, detection pipelines, and automated response frameworks built for enterprise resilience.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-3 border-b border-purple-900/40 px-2">
            <span>PROJECTS // ARCHIVE</span>
            <span>SPECIFICATION & SCOPE</span>
          </div>

          {projects.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => setActiveProject(activeProject === idx ? null : idx)}
              /* 카드 배경색 명도를 한 단계 높여서 입체감 형성 */
              className={`group p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                activeProject === idx 
                  ? 'bg-[#221C35] border-purple-400/80 shadow-[0_10px_30px_rgba(168,85,247,0.2)]' 
                  : 'bg-[#1A1528] border-purple-900/40 hover:border-purple-600/60 hover:bg-[#1E192F]'
              }`}
            >
              {activeProject === idx && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-fuchsia-400 shadow-[0_0_12px_#c084fc]"></div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start md:items-center gap-6">
                  <span className={`text-xs font-mono pt-1 md:pt-0 font-bold ${activeProject === idx ? 'text-purple-300' : 'text-slate-400'}`}>
                    {item.id}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6">
                  <span className="hidden md:inline text-xs font-mono text-slate-300">{item.category}</span>
                  <span className="text-xs font-mono text-fuchsia-200 px-3 py-1 rounded-md bg-fuchsia-950/60 border border-fuchsia-700/50 font-semibold">
                    {item.metrics}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{item.period}</span>
                </div>
              </div>

              {activeProject === idx && (
                <div className="mt-6 pt-6 border-t border-purple-800/40 text-sm text-slate-200 leading-relaxed">
                  <p className="max-w-3xl font-normal">{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-purple-900/30 px-6 sm:px-16 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
          <span>YEOM WONYOUNG — SECURITY PORTFOLIO</span>
          <span className="text-purple-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            SYSTEM STATUS: ONLINE
          </span>
        </div>
      </footer>
    </div>
  );
}