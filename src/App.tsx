import React, { useState, useEffect } from 'react';

interface ProfileData {
  name: string;
  role: string;
  clearance: string;
  bio: string;
  skills: string[];
  certifications: string[];
}

export default function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  
  const [profile, setProfile] = useState<ProfileData>({
    name: 'Yeom Wonyoung',
    role: 'Security Engineer / Infrastructure Defense',
    clearance: 'LEVEL-4 TOP SECRET',
    bio: 'Enterprise scale log processing, threat detection pipeline architecture, and automated incident response framework engineering.',
    skills: ['Python', 'Kubernetes', 'SIEM / Logstash', 'eBPF Threat Detection', 'AWS Security', 'Zero Trust Architecture'],
    certifications: ['CISSP', 'CISA', 'AWS Certified Security - Specialty']
  });

  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    { 
      id: '01', 
      title: `Operation Profile | ${profile.name}`, 
      category: 'Detection Engine', 
      metrics: '2.4M Logs/sec', 
      period: '2025 - PRESENT',
      desc: 'Real-time anomaly detection engine with machine learning log processing. Click to view or edit operator profile credentials.',
      isProfileLink: true
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
    <div className="min-h-screen bg-[#13111C] text-slate-100 font-sans flex flex-col justify-between selection:bg-indigo-500 selection:text-white antialiased relative overflow-hidden">
      
      {/* MOUSE FOLLOW GLOW EFFECT */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(450px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
        }}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-[#13111C]/80 backdrop-blur-md border-b border-purple-900/30 px-6 sm:px-16 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8]"></span>
            <span className="font-bold tracking-tight text-sm text-white">{profile.name}</span>
            <span className="text-slate-500 font-mono text-xs">/</span>
            <span className="text-xs font-mono text-indigo-300 font-medium">Security Engineer</span>
          </div>

          <button 
            onClick={() => setIsProfileModalOpen(true)}
            className="text-xs font-mono px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all duration-200 font-semibold shadow-[0_0_15px_rgba(99,102,241,0.25)] relative z-10"
          >
            [ OPERATOR FILE ]
          </button>
        </div>
      </header>

      {/* HERO & CONTENT */}
      <main className="max-w-6xl w-full mx-auto px-6 sm:px-16 py-16 sm:py-20 my-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-700/40 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            <p className="text-xs font-mono text-indigo-300 tracking-wider uppercase">Architecture & Defense Systems</p>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Securing infrastructure at scale with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 drop-shadow-[0_0_20px_rgba(165,180,252,0.4)]">clarity</span> and <span className="text-indigo-300 drop-shadow-[0_0_20px_rgba(129,140,248,0.3)]">precision</span>.
          </h1>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            A showcase of core security platforms, detection pipelines, and automated response frameworks built for enterprise resilience.
          </p>
        </div>

        {/* PROJECTS ARCHIVE LIST */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-3 border-b border-purple-900/40 px-2">
            <span>PROJECTS // ARCHIVE</span>
            <span>SPECIFICATION & SCOPE</span>
          </div>

          {projects.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => {
                if (item.isProfileLink) {
                  setIsProfileModalOpen(true);
                } else {
                  setActiveProject(activeProject === idx ? null : idx);
                }
              }}
              /* 1번 카드를 인디고(Indigo)로 변경 */
              className={`group p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                item.isProfileLink 
                  ? 'bg-[#17172E] border-indigo-400/90 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.45)] hover:border-indigo-300' 
                  : activeProject === idx 
                    ? 'bg-[#221C35] border-purple-400/80 shadow-[0_10px_35px_rgba(168,85,247,0.25)]' 
                    : 'bg-[#1A1528] border-purple-900/40 hover:border-purple-500/70 hover:bg-[#1E192F] hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]'
              }`}
            >
              {item.isProfileLink ? (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-300 to-indigo-500 shadow-[0_0_12px_#818cf8]"></div>
              ) : activeProject === idx ? (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-fuchsia-400 shadow-[0_0_12px_#c084fc]"></div>
              ) : null}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start md:items-center gap-6">
                  <span className={`text-xs font-mono pt-1 md:pt-0 font-bold ${item.isProfileLink ? 'text-indigo-400' : 'text-purple-300'}`}>
                    {item.id}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors flex items-center gap-3">
                    {item.title}
                    {item.isProfileLink && (
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-400/40 animate-pulse font-semibold">
                        CLICK TO OPEN PROFILE ↗
                      </span>
                    )}
                  </h3>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6">
                  <span className="hidden md:inline text-xs font-mono text-slate-300">{item.category}</span>
                  <span className={`text-xs font-mono px-3 py-1 rounded-md font-semibold ${
                    item.isProfileLink 
                      ? 'text-indigo-200 bg-indigo-950/70 border border-indigo-500/50' 
                      : 'text-fuchsia-200 bg-fuchsia-950/60 border border-fuchsia-700/50'
                  }`}>
                    {item.metrics}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{item.period}</span>
                </div>
              </div>

              {activeProject === idx && !item.isProfileLink && (
                <div className="mt-6 pt-6 border-t border-purple-800/40 text-sm text-slate-200 leading-relaxed">
                  <p className="max-w-3xl font-normal">{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* OPERATOR PROFILE MODAL */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in-up overflow-y-auto">
          <div className="bg-[#18162A] border-2 border-indigo-400/80 rounded-2xl w-full max-w-4xl p-6 sm:p-10 shadow-[0_0_60px_rgba(99,102,241,0.3)] relative overflow-hidden my-auto">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-indigo-900/60 pb-5 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-indigo-400 animate-ping"></span>
                <h2 className="text-xl sm:text-2xl font-bold font-mono text-white tracking-wide flex items-center gap-2">
                  <span className="text-indigo-400">[OPERATOR_FILE]</span> SYSTEM_PROFILE
                </h2>
              </div>
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="text-slate-300 hover:text-white font-mono text-xs sm:text-sm px-4 py-2 rounded-lg bg-indigo-950/50 hover:bg-indigo-900/60 border border-indigo-700/50 transition-all font-semibold"
              >
                [ ESC / CLOSE ]
              </button>
            </div>

            {/* Profile Form */}
            <div className="space-y-6 font-mono text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-wider uppercase">OPERATOR NAME</label>
                  <input 
                    type="text" 
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-white font-sans text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-wider uppercase">SECURITY CLEARANCE</label>
                  <input 
                    type="text" 
                    value={profile.clearance}
                    onChange={(e) => setProfile({ ...profile, clearance: e.target.value })}
                    className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-indigo-300 font-bold text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-wider uppercase">PRIMARY ROLE & SPECIALIZATION</label>
                <input 
                  type="text" 
                  value={profile.role}
                  onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                  className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-white font-sans text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                />
              </div>

              <div>
                <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-wider uppercase">EXECUTIVE BIO / SYSTEM SUMMARY</label>
                <textarea 
                  rows={4}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-slate-100 font-sans text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-wider uppercase">CORE TECH STACK (COMMA SEPARATED)</label>
                <input 
                  type="text" 
                  value={profile.skills.join(', ')}
                  onChange={(e) => setProfile({ ...profile, skills: e.target.value.split(',').map(s => s.trim()) })}
                  className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-white font-sans text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-indigo-900/60 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs font-mono text-slate-400">STATUS: CONFIDENTIAL // CLASSIFIED ACCESS ONLY</span>
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-mono font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)]"
              >
                SAVE & UPDATE PROFILE
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-purple-900/30 px-6 sm:px-16 py-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-400">
          <span>{profile.name.toUpperCase()} — SECURITY PORTFOLIO</span>
          <span className="text-indigo-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            SYSTEM STATUS: ONLINE
          </span>
        </div>
      </footer>
    </div>
  );
}