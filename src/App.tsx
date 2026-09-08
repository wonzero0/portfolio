import React, { useState, useEffect } from 'react';

interface ProfileData {
  name: string;
  role: string;
  clearance: string;
  bio: string;
  skills: string[];
  certifications: string[];
  github: string;
  email: string;
}

export default function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  
  const [profile, setProfile] = useState<ProfileData>({
    name: 'Yeom Wonyoung',
    role: 'Security Engineer',
    clearance: 'LEVEL-4 AUTHORIZED',
    bio: 'Engineers enterprise-scale log processing, threat detection pipelines, and automated response frameworks built for resilience.',
    skills: ['Python', 'Kubernetes', 'SIEM / Logstash', 'eBPF Detection', 'AWS Security', 'Zero Trust Architecture'],
    certifications: ['정보처리기사', '리눅스마스터 2급'],
    github: 'https://github.com/your-id',
    email: 'wonyoung@example.com'
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
      tag: '프로필',
      title: 'Profile: 염원영', 
      category: '위협 탐지 엔진', 
      metrics: '초당 240만 로그 처리', 
      period: '2025 - 현재',
      buttonText: '프로필 열기 ↗',
      desc: '머신러닝 기반 로그 분석을 지원하는 실시간 이상 탐지 엔진입니다. 클릭하여 엔지니어 프로필 정보 및 상세 역량을 확인하세요.',
      isProfileLink: true
    },
    { 
      id: '02', 
      tag: '캡스톤디자인',
      title: 'AI 기반 퍼스널 노래추천 서비스, Sing Pick!', 
      category: 'Network Access Control', 
      metrics: '140 Distributed Nodes', 
      period: '2024 - 2025',
      desc: 'Identity-aware network access control for remote teams. Implemented continuous authentication and posture assessment.' 
    },
    { 
      id: '03', 
      tag: '전공 프로젝트',
      title: '스마트 면접 도우미', 
      category: 'Attack Surface Mgmt', 
      metrics: '12,000 Targets', 
      period: '2024',
      desc: 'Automated vulnerability scanning pipeline designed for continuous attack surface analysis and threat risk scoring.' 
    },
    { 
      id: '04', 
      tag: '개인 프로젝트',
      title: '스마트홈캠 보안 프로젝트', 
      category: 'Orchestration & SOAR', 
      metrics: '52 Response Playbooks', 
      period: '2023 - 2024',
      desc: 'Automated incident response framework integrating multiple security vendor APIs to reduce mean time to remediate (MTTR).' 
    },
    { 
      id: '05', 
      tag: '팀 프로젝트',
      title: 'Live-Shield : DeepFake Detection Challenge', 
      category: 'Video Security Pipeline', 
      metrics: 'Real-time Verification', 
      period: '2026',
      desc: '동료와 함께 진행한 2인 팀 프로젝트입니다. 실시간 딥페이크 탐지 및 암호화 프레임 검증 파이프라인을 구축하여 모니터링 체계를 설계했습니다.' 
    },
  ];

  const awards = [
    {
      title: '교내 RISE사업단 캡스톤디자인 경진대회 우수상',
      organization: '졸업작품 SingPick!',
      desc: 'AI 기반 퍼스널 노래추천 서비스 구축 및 하드웨어 연동'
    },
    {
      title: '교내 캡스톤디자인 경진대회 우수상',
      organization: 'SLAM 기반 로봇팔 자율주행',
      desc: '자율주행 로봇팔 시스템 구현 및 주행 알고리즘 적용'
    },
    {
      title: '교내 경진대회 우수상',
      organization: '페이크보이스 관련 아이디어 공모전',
      desc: '음성 합성 기술 대응 및 보이스 피싱 예방 아이디어 제안'
    },
    {
      title: 'ICT 경진대회 특별상',
      organization: '학과 선배 주축 팀',
      desc: '하드웨어 조립 및 제출 서류 작성 주도'
    },
    {
      title: '교외 DACON 경진대회 본선 도전',
      organization: '머신러닝/딥러닝 아이디어 구현',
      desc: '페이크보이스 아이디어를 직접 머신러닝·딥러닝 모델로 개발 및 제출'
    }
  ];

  const activities = [
    {
      title: '단과대학 학생회 (3년)',
      role: '사무차장(1년) ➔ 사무국장(1년) ➔ 부회장(1년)',
      desc: '3년간 단과대학 학생회 간부로 활동하며 예산 관리, 행사 기획 및 조직 운영 총괄'
    },
    {
      title: '학과 멘토링 활동 (1년)',
      role: '1학년 전담 선배 멘토',
      desc: '신입생들의 학업 적응 및 전공 탐색을 지원하는 학과 멘토 프로그램 1년 이수'
    }
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
      <header className="sticky top-0 z-30 bg-[#13111C]/80 backdrop-blur-md border-b border-purple-900/30 px-6 sm:px-16 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8]"></span>
            <span className="font-bold tracking-tight text-sm text-white">{profile.name}</span>
            <span className="text-slate-500 text-xs">/</span>
            <span className="text-xs font-medium text-indigo-300">{profile.role}</span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-block text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-800/40 hover:border-indigo-500 transition-all"
            >
              GitHub ↗
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="hidden sm:inline-block text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-800/40 hover:border-indigo-500 transition-all"
            >
              Email ↗
            </a>
            <button 
              onClick={() => setIsProfileModalOpen(true)}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all duration-200 shadow-[0_0_15px_rgba(99,102,241,0.25)] relative z-10 tracking-tight"
            >
              [ OPERATOR FILE ]
            </button>
          </div>
        </div>
      </header>

      {/* HERO & CONTENT */}
      <main className="max-w-6xl w-full mx-auto px-6 sm:px-16 py-12 sm:py-16 my-auto relative z-10 space-y-16">
        
        {/* HERO SECTION */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-700/40 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            <p className="text-xs font-medium text-indigo-300 tracking-tight uppercase">ARCHITECTURE & DEFENSE SYSTEMS</p>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Securing infrastructure at scale <br className="hidden sm:inline" />
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 drop-shadow-[0_0_20px_rgba(165,180,252,0.4)]">clarity</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 drop-shadow-[0_0_20px_rgba(165,180,252,0.4)]">precision</span>.
          </h1>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
            보안 플랫폼, 로그 탐지 파이프라인 및 자동화 대응 프레임워크 구축에 집중하는 보안 엔지니어 포트폴리오입니다.
          </p>
        </div>

        {/* PROJECTS ARCHIVE LIST */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-medium text-slate-400 pb-3 border-b border-purple-900/40 px-2 tracking-tight uppercase">
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
                <div className="flex items-center gap-4 sm:gap-5">
                  <span className={`text-xs font-bold ${item.isProfileLink ? 'text-indigo-400' : 'text-purple-300'}`}>
                    {item.id}
                  </span>
                  
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border tracking-tight ${
                      item.isProfileLink 
                        ? 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40' 
                        : 'bg-purple-950/80 text-purple-300 border-purple-700/50'
                    }`}>
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6">
                  {item.isProfileLink && (
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-200 border border-indigo-400/50 hover:bg-indigo-500/30 transition-all">
                      {item.buttonText}
                    </span>
                  )}
                  <span className="hidden md:inline text-xs font-medium text-slate-300">{item.category}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-md ${
                    item.isProfileLink 
                      ? 'text-indigo-200 bg-indigo-950/70 border border-indigo-500/50' 
                      : 'text-fuchsia-200 bg-fuchsia-950/60 border border-fuchsia-700/50'
                  }`}>
                    {item.metrics}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{item.period}</span>
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

        {/* AWARDS, ACTIVITIES & CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
          
          {/* AWARDS & HONORS */}
          <div className="bg-[#1A1528] border border-purple-900/40 rounded-2xl p-6 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-purple-900/40">
              <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              <h2 className="text-xs font-bold text-indigo-300 tracking-wider uppercase">AWARDS & HONORS // 수상 경력</h2>
            </div>

            <div className="space-y-3">
              {awards.map((award, index) => (
                <div key={index} className="bg-[#13111C]/80 border border-purple-900/30 hover:border-indigo-500/40 rounded-xl p-4 transition-all space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-white tracking-tight">{award.title}</h4>
                  </div>
                  <p className="text-xs font-semibold text-indigo-300">{award.organization}</p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">{award.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIVITIES */}
          <div className="bg-[#1A1528] border border-purple-900/40 rounded-2xl p-6 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-purple-900/40">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <h2 className="text-xs font-bold text-purple-300 tracking-wider uppercase">ACTIVITIES // 교내외 활동</h2>
            </div>

            <div className="space-y-3">
              {activities.map((act, index) => (
                <div key={index} className="bg-[#13111C]/80 border border-purple-900/30 hover:border-purple-500/40 rounded-xl p-4 transition-all space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white tracking-tight">{act.title}</h4>
                  </div>
                  <span className="inline-block text-[11px] font-semibold text-purple-300 bg-purple-950/60 border border-purple-800/40 px-2 py-0.5 rounded-md">
                    {act.role}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="bg-[#1A1528] border border-purple-900/40 rounded-2xl p-6 space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-purple-900/40">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400"></span>
              <h2 className="text-xs font-bold text-fuchsia-300 tracking-wider uppercase">CERTIFICATIONS // 자격증</h2>
            </div>

            <div className="flex flex-col gap-2.5">
              {profile.certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-[#13111C]/80 border border-purple-900/40 hover:border-fuchsia-500/40 rounded-xl p-4 flex items-center justify-between transition-all group"
                >
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                    {cert}
                  </span>
                  <span className="text-[10px] font-semibold text-fuchsia-400 bg-fuchsia-950/50 border border-fuchsia-800/40 px-2 py-0.5 rounded">
                    CERTIFIED
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* OPERATOR PROFILE MODAL */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="bg-[#18162A] border-2 border-indigo-400/80 rounded-2xl w-full max-w-4xl p-6 sm:p-10 shadow-[0_0_60px_rgba(99,102,241,0.3)] relative overflow-hidden my-auto max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-indigo-900/60 pb-5 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-indigo-400 animate-ping"></span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="text-indigo-400">[OPERATOR FILE]</span> DETAILS
                </h2>
              </div>
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="text-slate-300 hover:text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-indigo-950/50 hover:bg-indigo-900/60 border border-indigo-700/50 transition-all"
              >
                [ CLOSE ESC ]
              </button>
            </div>

            {/* Profile Form */}
            <div className="space-y-6 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-tight uppercase">OPERATOR NAME</label>
                  <input 
                    type="text" 
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-white text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-tight uppercase">CLEARANCE LEVEL</label>
                  <input 
                    type="text" 
                    value={profile.clearance}
                    onChange={(e) => setProfile({ ...profile, clearance: e.target.value })}
                    className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-indigo-300 font-bold text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* CONTACT & LINKS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-tight uppercase">GITHUB REPOSITORY URL</label>
                  <input 
                    type="text" 
                    value={profile.github}
                    onChange={(e) => setProfile({ ...profile, github: e.target.value })}
                    placeholder="https://github.com/..."
                    className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-indigo-200 font-mono text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-tight uppercase">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-indigo-200 font-mono text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-tight uppercase">ROLE / PRIMARY FUNCTION</label>
                <input 
                  type="text" 
                  value={profile.role}
                  onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                  className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-white text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                />
              </div>

              <div>
                <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-tight uppercase">SUMMARY & BIO</label>
                <textarea 
                  rows={4}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-slate-100 text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-tight uppercase">TECHNICAL SKILLS (COMMA SEPARATED)</label>
                <input 
                  type="text" 
                  value={profile.skills.join(', ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setProfile({ 
                      ...profile, 
                      skills: e.target.value.split(',').map((s) => s.trim()) 
                    })
                  }
                  className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-white text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                />
              </div>

              <div>
                <label className="block text-indigo-300 font-semibold mb-2 text-xs tracking-tight uppercase">CERTIFICATIONS (COMMA SEPARATED)</label>
                <input 
                  type="text" 
                  value={profile.certifications.join(', ')}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setProfile({ 
                      ...profile, 
                      certifications: e.target.value.split(',').map((s) => s.trim()) 
                    })
                  }
                  className="w-full bg-[#100E1C] border border-indigo-800/60 rounded-xl p-3.5 text-white text-base focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-indigo-900/60 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <a 
                  href={profile.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs text-indigo-300 hover:text-white underline font-mono"
                >
                  [ GITHUB LINK ]
                </a>
                <a 
                  href={`mailto:${profile.email}`} 
                  className="text-xs text-indigo-300 hover:text-white underline font-mono"
                >
                  [ CONTACT EMAIL ]
                </a>
              </div>
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)]"
              >
                SAVE PROFILE DATA
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-purple-900/30 px-6 sm:px-16 py-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-4">
            <span>{profile.name} — SECURITY PORTFOLIO</span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-indigo-300 transition-colors">GitHub</a>
            <a href={`mailto:${profile.email}`} className="hover:text-indigo-300 transition-colors">Email</a>
          </div>
          <span className="text-indigo-300 flex items-center gap-2 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            SYSTEM STATUS: OPERATIONAL
          </span>
        </div>
      </footer>
    </div>
  );
}