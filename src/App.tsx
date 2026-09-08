import React, { useState, useEffect } from 'react';

interface SkillCategory {
  category: string;
  items: string[];
}

interface ProfileData {
  name: string;
  role: string;
  clearance: string;
  bio: string;
  skillCategories: SkillCategory[];
  certifications: string[];
  github: string;
  email: string;
}

export default function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  
  const [profile] = useState<ProfileData>({
    name: 'Yeom Wonyoung',
    role: 'Security Engineer',
    clearance: 'LEVEL-4 AUTHORIZED',
    bio: 'Engineers enterprise-scale log processing, threat detection pipelines, and automated response frameworks built for resilience.',
    skillCategories: [
      {
        category: 'Languages',
        items: ['C', 'C++', 'Python']
      },
      {
        category: 'AI / Machine Learning',
        items: ['Machine Learning', 'Deep Learning']
      },
      {
        category: 'OS & Environment',
        items: ['Linux', 'Docker', 'VMware', 'VirtualBox']
      },
      {
        category: 'Embedded Systems & Hardware',
        items: ['Arduino', 'Raspberry Pi']
      },
      {
        category: 'Tools & Security',
        items: ['Git', 'GitHub', 'Nmap']
      }
    ],
    certifications: ['정보처리기사', '리눅스마스터 2급'],
    github: 'https://github.com/wonzero0',
    email: 'ywy5303@naver.com'
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-slate-900 selection:text-white antialiased relative overflow-hidden">
      
      {/* DEEP GREEN/NAVY MILD GLOW */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(16, 185, 129, 0.08), transparent 80%)`
        }}
      />

      {/* FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 sm:px-16 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            <span className="font-bold tracking-tight text-sm text-slate-900">{profile.name}</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-semibold text-slate-500">{profile.role}</span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-block text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all shadow-sm"
            >
              GitHub ↗
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="hidden sm:inline-block text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all shadow-sm"
            >
              Email ↗
            </a>
            <button 
              onClick={() => setIsProfileModalOpen(true)}
              className="text-xs font-bold px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-all duration-200 shadow-md tracking-tight"
            >
              [ OPERATOR FILE ]
            </button>
          </div>
        </div>
      </header>

      {/* HERO & CONTENT */}
      <main className="max-w-6xl w-full mx-auto px-6 sm:px-16 pt-24 sm:pt-32 pb-12 sm:pb-16 my-auto relative z-10 space-y-16">
        
        {/* HERO SECTION */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <p className="text-[11px] font-bold text-emerald-800 tracking-wider uppercase">ARCHITECTURE & DEFENSE SYSTEMS</p>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
            Securing infrastructure at scale <br className="hidden sm:inline" />
            with <span className="text-slate-900 underline decoration-emerald-500 decoration-4 underline-offset-4">clarity</span> and <span className="text-slate-900 underline decoration-emerald-500 decoration-4 underline-offset-4">precision</span>.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
            포트폴리오
          </p>
        </div>

        {/* PROJECTS ARCHIVE LIST */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-extrabold text-slate-500 pb-3 border-b border-slate-200 px-2 tracking-wider uppercase">
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
              className={`group p-6 sm:p-7 rounded-xl border-2 transition-all duration-200 relative overflow-hidden cursor-pointer ${
                item.isProfileLink 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg hover:bg-slate-800' 
                  : activeProject === idx 
                    ? 'bg-white border-slate-900 shadow-md' 
                    : 'bg-white border-slate-200 hover:border-emerald-600 hover:shadow-sm'
              }`}
            >
              {item.isProfileLink ? (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500"></div>
              ) : activeProject === idx ? (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-900"></div>
              ) : null}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-5">
                  <span className={`text-xs font-mono font-bold ${item.isProfileLink ? 'text-slate-400' : 'text-slate-400'}`}>
                    {item.id}
                  </span>
                  
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border tracking-tight ${
                      item.isProfileLink 
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400' 
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}>
                      {item.tag}
                    </span>
                    <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                      item.isProfileLink ? 'text-white group-hover:text-emerald-400' : 'text-slate-900 group-hover:text-emerald-700'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6">
                  {item.isProfileLink && (
                    <span className="text-xs font-bold px-3 py-1.5 rounded bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-sm">
                      {item.buttonText}
                    </span>
                  )}
                  <span className={`hidden md:inline text-xs font-semibold ${item.isProfileLink ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.category}
                  </span>
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                    item.isProfileLink 
                      ? 'text-slate-300 bg-slate-800 border-slate-700' 
                      : 'text-slate-700 bg-slate-100 border-slate-200'
                  }`}>
                    {item.metrics}
                  </span>
                  <span className={`text-xs font-mono font-semibold ${item.isProfileLink ? 'text-slate-400' : 'text-slate-400'}`}>
                    {item.period}
                  </span>
                </div>
              </div>

              {activeProject === idx && !item.isProfileLink && (
                <div className="mt-5 pt-5 border-t border-slate-200 text-sm text-slate-700 leading-relaxed">
                  <p className="max-w-3xl font-medium">{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AWARDS, ACTIVITIES & CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          
          {/* AWARDS & HONORS */}
          <div className="bg-white border-2 border-slate-300 rounded-xl p-6 space-y-5 shadow-sm hover:border-slate-400 transition-all">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <h2 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase">AWARDS & HONORS // 수상 경력</h2>
            </div>

            <div className="space-y-3">
              {awards.map((award, index) => (
                <div key={index} className="bg-slate-50 border-2 border-slate-200 hover:border-slate-900 rounded-lg p-4 transition-all space-y-1.5 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">{award.title}</h4>
                  <p className="text-xs font-extrabold text-emerald-700">{award.organization}</p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed pt-0.5">{award.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIVITIES */}
          <div className="bg-white border-2 border-slate-300 rounded-xl p-6 space-y-5 shadow-sm hover:border-slate-400 transition-all">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
              <h2 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase">ACTIVITIES // 교내외 활동</h2>
            </div>

            <div className="space-y-3">
              {activities.map((act, index) => (
                <div key={index} className="bg-slate-50 border-2 border-slate-200 hover:border-slate-900 rounded-lg p-4 transition-all space-y-2 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">{act.title}</h4>
                  <span className="inline-block text-[11px] font-bold text-slate-900 bg-slate-200 border border-slate-300 px-2.5 py-0.5 rounded">
                    {act.role}
                  </span>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed pt-0.5">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="bg-white border-2 border-slate-300 rounded-xl p-6 space-y-5 shadow-sm hover:border-slate-400 transition-all">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <h2 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase">CERTIFICATIONS // 자격증</h2>
            </div>

            <div className="flex flex-col gap-3">
              {profile.certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 border-2 border-slate-200 hover:border-emerald-600 rounded-lg p-4 flex items-center justify-between transition-all shadow-xs"
                >
                  <span className="text-sm font-bold text-slate-900">
                    {cert}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded">
                    VERIFIED
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* OPERATOR PROFILE MODAL */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl relative overflow-hidden my-auto max-h-[90vh] flex flex-col border border-slate-200">
            
            {/* Modal Header */}
            <div className="bg-slate-900 px-6 py-5 text-white flex justify-between items-center shrink-0 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
                <div>
                  <h2 className="text-base font-extrabold tracking-tight text-white flex items-center gap-2">
                    OPERATOR PROFILE
                  </h2>
                  <p className="text-[11px] text-slate-400 font-mono">ID: {profile.name.toUpperCase().replace(/\s+/g, '_')}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-700 transition-all cursor-pointer"
              >
                닫기 ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-7 overflow-y-auto text-slate-800">
              
              {/* Name & Role Header Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider mb-1">OPERATOR NAME</div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">{profile.name}</div>
                  <div className="text-sm font-bold text-emerald-700 mt-0.5">{profile.role}</div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold px-3 py-1.5 rounded-lg shadow-2xs">
                  {profile.clearance}
                </div>
              </div>

              {/* Bio Section */}
              <div>
                <h3 className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-emerald-500 rounded-xs inline-block"></span>
                  SUMMARY & BIO
                </h3>
                <div className="bg-white border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-700 leading-relaxed shadow-xs">
                  {profile.bio}
                </div>
              </div>

              {/* Technical Skills Badges (Categorized Tech Stacks) */}
              <div>
                <h3 className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-emerald-500 rounded-xs inline-block"></span>
                  TECHNICAL SKILLS <span className="text-emerald-400">//</span> TECH STACKS
                </h3>
                <div className="space-y-4 bg-slate-50/80 border border-slate-200 rounded-xl p-5">
                  {profile.skillCategories.map((group, groupIdx) => (
                    <div key={groupIdx} className="space-y-2">
                      <div className="text-[11px] font-bold text-emerald-800 tracking-wide uppercase flex items-center gap-1.5">
                        <span className="text-emerald-500 font-mono">›</span>
                        {group.category}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill, skillIdx) => (
                          <span 
                            key={skillIdx}
                            className="bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 border border-slate-300 hover:border-emerald-400 font-bold text-xs px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-emerald-500 rounded-xs inline-block"></span>
                  CERTIFICATIONS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profile.certifications.map((cert, index) => (
                    <div key={index} className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-3.5 flex justify-between items-center shadow-2xs">
                      <span className="text-xs font-bold text-slate-900">{cert}</span>
                      <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">VERIFIED</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Links */}
              <div>
                <h3 className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-emerald-500 rounded-xs inline-block"></span>
                  CONTACT & LINKS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a 
                    href={profile.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-between bg-slate-50 hover:bg-emerald-50/40 border border-slate-200 hover:border-emerald-300 p-3.5 rounded-xl transition-all group"
                  >
                    <div>
                      <div className="text-[10px] font-mono font-bold text-emerald-600">GITHUB REPOSITORY</div>
                      <div className="text-xs font-bold text-slate-900 truncate max-w-[200px]">{profile.github}</div>
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-700 transition-colors">↗</span>
                  </a>

                  <a 
                    href={`mailto:${profile.email}`} 
                    className="flex items-center justify-between bg-slate-50 hover:bg-emerald-50/40 border border-slate-200 hover:border-emerald-300 p-3.5 rounded-xl transition-all group"
                  >
                    <div>
                      <div className="text-[10px] font-mono font-bold text-emerald-600">EMAIL ADDRESS</div>
                      <div className="text-xs font-bold text-slate-900">{profile.email}</div>
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-700 transition-colors">↗</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end shrink-0">
              <button 
                onClick={() => setIsProfileModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-md cursor-pointer"
              >
                닫기
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-6 sm:px-16 py-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-semibold">
          <div className="flex items-center gap-4">
            <span className="text-slate-900 font-bold">{profile.name} — SECURITY PORTFOLIO</span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href={`mailto:${profile.email}`} className="hover:text-slate-900 transition-colors">Email</a>
          </div>
          <span className="text-slate-700 flex items-center gap-2 font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            SYSTEM STATUS: OPERATIONAL
          </span>
        </div>
      </footer>
    </div>
  );
}