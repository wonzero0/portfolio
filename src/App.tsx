import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Folder, ArrowLeft } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface ListItem {
  date: string;
  title: string;
  desc?: string;
  badge?: string;
}

interface DirectoryItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  type: 'project' | 'awards' | 'activities' | 'certifications';
  itemsList?: ListItem[];
  problem?: string;
  solution?: string;
  techStack?: string[];
  impact?: string;
}

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<DirectoryItem | null>(null);
  const isScrolling = useRef<boolean>(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (selectedItem) return;
      if (isScrolling.current) return;

      if (e.deltaY > 30) {
        if (currentPage === 0) {
          isScrolling.current = true;
          setCurrentPage(1);
          setTimeout(() => { isScrolling.current = false; }, 700);
        }
      } else if (e.deltaY < -30) {
        if (currentPage === 1) {
          isScrolling.current = true;
          setCurrentPage(0);
          setTimeout(() => { isScrolling.current = false; }, 700);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, selectedItem]);

  const items: DirectoryItem[] = [
    {
      id: 'singpick',
      type: 'project',
      category: 'Capstone Design',
      title: 'Sing Pick! : AI 기반 퍼스널 노래 추천 노래방 부스',
      subtitle: '사용자 음색·음역대 분석 기반 맞춤형 곡 매칭 및 실시간 피드백 스마트 시스템',
      summary: '"당신에게 가장 잘 어울리는 가수와 곡을 찾아드립니다." 2개 라즈베리파이 4 노드 분산 환경 기반의 AI 음성 분석 및 통합 제어 노래방 부스 시스템입니다.',
      problem: '선곡에 어려움을 겪는 사용자를 위한 객관적인 음역대·음색 분석 도구의 부재 및 기존 시스템의 모놀리식 구조로 인한 실시간 가창 분석 프로세스 과부하 문제.',
      solution: '통합 백엔드(FastAPI) 및 라즈베리파이 기반 하드웨어 제어 유닛(RPi OS, 아두이노 LED 신호 연동)과 독립된 AI 음성 분석 엔진(PyTorch, Resemblyzer, Librosa) 노드를 분리 구축하여 HTTP 비동기 통신 아키텍처 구현. 사용자 데이터 대칭키 암호화(AES-256) 및 보안 인증(JWT, Bcrypt) 적용.',
      techStack: ['FastAPI', 'Uvicorn', 'PyTorch', 'Resemblyzer', 'Librosa', 'Scikit-learn', 'MySQL', 'SQLAlchemy', 'AES-256', 'Bcrypt', 'JWT', 'Raspberry Pi', 'Arduino', 'TypeScript', 'React'],
      impact: 'PM / Backend / Security 총괄 리딩 (FastAPI 통합 API 서버 구축, DB 인프라 및 AES-256/JWT 보안 구현, 아두이노 조명 제어 연동 / 교내 RISE사업단 캡스톤디자인 경진대회 우수상 수상)'
    },
    {
      id: 'smarthome',
      type: 'project',
      category: 'Security',
      title: '스마트홈 영상 탈취 모의해킹 및 보안 전송 시스템',
      subtitle: 'Docker 기반 가상 환경 스마트홈 모의해킹(Red Team) 및 RTSPS/IDS 보안 파이프라인(Blue Team) 구축',
      summary: 'Docker 기반 가상 스마트홈 환경에서 월패드·홈캠 해킹 시나리오를 재현하고, RTSP over TLS(RTSPS) 암호화 및 Python 기반 침입 탐지 시스템(IDS)을 적용하여 영상 데이터를 보호하는 보안 프로젝트입니다.',
      problem: 'RTSP 스트림의 평문 전송 취약점(Port 8554 URI/인증정보 노출), 패킷 스니핑 risk, 초기 비밀번호 및 비인가 접근 제어 미비로 인한 사생활 영상 탈취 위협.',
      solution: '1) Red Team: Python Socket/Scapy 기반 1~254 IP 대역 자동 포트 스캐너 및 OpenCV 연동 RTSP 무단 영상 탈취/자동 캡처 모듈 구축.\n2) Blue Team: OpenSSL 사설 인증서 기반 RTSP over TLS(RTSPS Port 8322) 암호화 전송 구현, ID/PW ACL 접근 제어 설정, Docker 로그 파이프라인 연동 실시간 Python IDS(비인가 접근, Auth Failure 경고) 구축.',
      techStack: ['Docker', 'Docker Compose', 'MediaMTX', 'RTSP/RTSPS', 'FFmpeg', 'OpenSSL', 'Python', 'OpenCV', 'Socket', 'Scapy', 'Wireshark', 'Nmap'],
      impact: '단독 수행 100% | Red Team 모의해킹 시나리오 자동화 성공 및 RTSPS TLS 핸드셰이크 패킷 암호화 검증. Wireshark MITM 공격 방어 검증 완료. 경량화 검증(CPU ~1.52%, RAM ~9.79MB 사용으로 IoT Edge 기기 운용 가능성 증명)'
    },
    {
      id: 'smart-interview',
      type: 'project',
      category: 'IoT Platform',
      title: 'IoT 플랫폼: 스마트 면접 도우미',
      subtitle: '실시간 피드백 및 모션/음성 센싱 면접 플랫폼',
      summary: '면접자의 태도, 음성 톤, 응답 패턴을 실시간 센서 및 카메라인식 기반으로 측정하고 분석하는 IoT 플랫폼입니다.',
      problem: '실시간 영상/음성 스트리밍 파이프라인의 모니터링 지연 및 리소스 과점유.',
      solution: '파이프라인 프레임 샘플링 제어 및 비동기 스레딩 기법 적용으로 모니터링 부하 경감.',
      techStack: ['OpenCV', 'Python', 'IoT Sensors', 'FastAPI', 'WebSocket'],
      impact: '분석 처리 지연시간 < 20ms 이내 보장'
    },
    {
      id: 'momentrip',
      type: 'project',
      category: 'Vibe Coding App',
      title: '모먼트립 (Momentrip)',
      subtitle: '공모전 바이브코딩 여행 추천 앱',
      summary: '바이브코딩(Vibe Coding) 방법론을 도입하여 초단기 애자일 프로토타이핑 방식으로 개발한 미션 기반 여행 모바일 앱입니다.',
      problem: '한정된 공모전 개발 기간 내 복잡한 UI/UX 및 기획 로직을 빠르게 프론트엔드/백엔드로 교차 구현해야 함.',
      solution: 'AI 기반 Vibe Coding 툴체인 및 프롬프트 주도 컴포넌트 설계를 통한 개발 속도 극대화.',
      techStack: ['React Native', 'TypeScript', 'Tailwind CSS', 'Vibe Coding AI'],
      impact: '프로토타입 개발 기간 70% 단축 및 공모전 출품 완료'
    },
    {
      id: 'awards',
      type: 'awards',
      category: 'Achievements',
      title: '수상 경력',
      subtitle: '교내외 경진대회 및 공모전 수상 성과',
      summary: '캡스톤디자인, ICT 경진대회, 페이크보이스 공모전 등 다양한 분야에서의 수상 내역입니다.',
      itemsList: [
        { date: '2026.08', title: '교내 RISE사업단 캡스톤디자인 경진대회', desc: 'Sing Pick! (AI 음성 분석 및 임베디드 분산 시스템)', badge: '우수상' },
        { date: '2026.08', title: '교내 캡스톤디자인 경진대회', desc: 'SLAM 기반 로봇팔 활용 자율주행 시스템', badge: '우수상' },
        { date: '2026.06', title: '교내 페이크보이스 아이디어 공모전', desc: '음성 합성 탐지 및 검증 메커니즘 제안', badge: '우수상' },
        { date: '2025.11', title: 'ICT 경진대회', desc: '하드웨어 조립 및 제출 서류 작성 주도 (팀 프로젝트)', badge: '특별상' }
      ]
    },
    {
      id: 'activities',
      type: 'activities',
      category: 'Experience',
      title: '교내외 활동',
      subtitle: '연구실, 학생회, 멘토링 및 공모전 도전 경험',
      summary: '리더십 구축, 학술 연구 및 다양한 프로젝트 수행을 통한 교내외 활동 기록입니다.',
      itemsList: [
        { date: '2023.03 - 2025.12', title: '단과대학 학생회 (3년 연속 활동)', desc: '단과대학 사무차장(1년) → 사무국장(1년) → 부회장(1년) 역임' },
        { date: '2024.03 - 2024.12', title: '학과 1학년 SRC 멘토링', desc: '선배-새내기 연결 멘토링 프로그램 1년 간 멘토로 활동' },
        { date: '2026.07', title: '교외 DACON 경진대회', desc: '아이디어 직접 머신러닝/딥러닝 파이프라인 모델로 구현 및 모델링 도전' }
      ]
    },
    {
      id: 'certifications',
      type: 'certifications',
      category: 'Credentials',
      title: '자격증',
      subtitle: '정보기술 및 보안 분야 취득 자격 현황',
      summary: 'SW 개발 및 정보처리, 데이터 분석 기술 역량을 증명하는 자격 증명입니다.',
      itemsList: [
        { date: '2026.10', title: '정보처리기사', desc: '한국산업인력공단' },
        { date: '2026.10', title: '리눅스마스터 2급', desc: 'KAIT' }
      ]
    }
  ];

  return (
    <div className="h-screen w-screen bg-black p-2 sm:p-4 selection:bg-[#6B111D] selection:text-white font-sans antialiased overflow-hidden">
      
      {/* MAC OS WINDOW FRAME */}
      <div className="relative h-full w-full bg-zinc-200/90 rounded-2xl border border-zinc-800/80 shadow-2xl overflow-hidden flex flex-col">
        
        {/* HEADER */}
        <header className="absolute top-0 left-0 w-full z-40 bg-zinc-200/80 backdrop-blur-md border-b border-zinc-300/80 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <button 
              onClick={() => setCurrentPage(0)}
              className="ml-3 font-extrabold text-zinc-900 tracking-tight text-sm font-mono hover:text-[#580A14] transition-colors"
            >
              Yeom Wonyoung
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-zinc-700 font-mono">
            <button 
              onClick={() => setCurrentPage(1)} 
              className={`hover:text-[#580A14] transition-colors ${currentPage === 1 ? 'text-[#580A14] font-bold' : ''}`}
            >
              PROJECTS
            </button>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#580A14] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
            <button className="px-4 py-1.5 rounded-full border border-zinc-800/80 bg-transparent text-zinc-900 font-bold hover:bg-zinc-900 hover:text-zinc-100 transition shadow-sm">
              CONTACT
            </button>
          </div>
        </header>

        {/* FULL PAGE CONTAINER */}
        <div 
          className="w-full h-full pt-16 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${currentPage * 100}%)` }}
        >
          
          {/* 1PAGE: HERO SECTION */}
          <section className="w-full h-full flex flex-col justify-center items-center px-4 relative">
            <div className="relative w-full max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-6">
              <h1 className="text-[14vw] sm:text-[11.5rem] font-bold tracking-tight leading-none text-[#580A14] capitalize select-none drop-shadow-sm">
                Portfolio
              </h1>
              <p className="text-base sm:text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-2">
                변화하는 시대에 발맞춰, 새로운 도전을 좋아하는 염원영입니다.
              </p>
            </div>

            <button 
              onClick={() => setCurrentPage(1)}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600 hover:text-[#580A14] text-xs font-mono transition-colors animate-bounce cursor-pointer"
            >
              <span>SCROLL OR CLICK TO EXPLORE</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#580A14]" />
            </button>
          </section>

          {/* 2PAGE: PROJECT DIRECTORY */}
          <section className="w-full h-full bg-zinc-200/95 text-zinc-900 border-t border-zinc-300/80 px-6 sm:px-12 py-8 flex flex-col justify-between overflow-y-auto">
            <div className="max-w-6xl mx-auto w-full space-y-8 my-auto">
              
              <div className="flex flex-col gap-2 border-b border-zinc-300/80 pb-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[#580A14] tracking-widest font-bold">
                  <span>02</span>
                  <span className="w-8 h-px bg-[#580A14]"></span>
                  <span>PROJECT DIRECTORY</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#580A14] tracking-tight">
                  Projects & Work
                </h2>
                
                <p className="text-xs text-zinc-600 font-mono">
                  * 폴더를 클릭하면 해당 항목의 상세 내용 페이지가 열립니다.
                </p>
              </div>

              {/* 7개 폴더 카드의 그리드 레이아웃 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="group flex flex-col items-center justify-between p-6 rounded-2xl bg-zinc-100/80 border border-zinc-300/80 hover:border-[#580A14] hover:bg-white hover:shadow-xl transition-all duration-300 text-center min-h-[220px]"
                  >
                    <div className="my-auto relative">
                      <Folder className="w-20 h-20 text-sky-500 fill-sky-500/20 group-hover:scale-110 group-hover:text-sky-600 transition-transform duration-300" />
                    </div>
                    
                    <div className="w-full space-y-1 pt-3 border-t border-zinc-200">
                      <span className="text-[10px] font-mono text-[#580A14] block font-bold tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-xs font-bold text-zinc-900 group-hover:text-[#580A14] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>

            </div>

            <footer className="max-w-6xl mx-auto w-full pt-6 border-t border-zinc-300/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-zinc-600">
              <div>© 2026 YEOM WONYOUNG. ALL RIGHTS RESERVED.</div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-1.5 rounded-full border border-zinc-800/80 bg-transparent text-zinc-900 font-bold hover:bg-zinc-900 hover:text-zinc-100 transition shadow-sm"
                >
                  GITHUB
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="px-4 py-1.5 rounded-full border border-zinc-800/80 bg-transparent text-zinc-900 font-bold hover:bg-zinc-900 hover:text-zinc-100 transition shadow-sm"
                >
                  EMAIL
                </a>
              </div>
            </footer>
          </section>

        </div>
      </div>

      {/* 프로젝트 / 이력 상세 모달 */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-zinc-900/60 backdrop-blur-md text-zinc-900 overflow-y-auto animate-in fade-in duration-200 p-4 sm:p-8 flex items-center justify-center">
          <div className="max-w-5xl w-full mx-auto bg-zinc-200 border border-zinc-300/80 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl relative my-auto">
            
            {/* 모달 상단 헤더 */}
            <div className="flex justify-between items-center border-b border-zinc-300 pb-5">
              <button 
                onClick={() => setSelectedItem(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-[#580A14] text-xs font-mono font-bold text-zinc-100 transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK TO DIRECTORY</span>
              </button>

              <span className="font-mono text-xs sm:text-sm text-[#580A14] font-bold tracking-wider uppercase">
                {selectedItem.category}
              </span>
            </div>

            {/* 항목 제목 및 개요 */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#580A14] tracking-tight">
                {selectedItem.title}
              </h1>
              <p className="text-base sm:text-lg text-zinc-800 font-bold">
                {selectedItem.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal whitespace-pre-line">
                {selectedItem.summary}
              </p>
            </div>

            {/* 기술 스택 (프로젝트 모달 전용) */}
            {selectedItem.techStack && (
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">TECH STACK</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-md bg-white border border-zinc-300 text-xs font-mono font-bold text-zinc-800 shadow-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 프로젝트 상세 (Problem / Solution / Impact) */}
            {selectedItem.type === 'project' && selectedItem.problem && (
              <div className="grid gap-5">
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-300/80 shadow-sm space-y-2">
                  <span className="text-xs font-mono font-bold text-[#580A14] tracking-wider block">01. PROBLEM DEFINITION</span>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900">문제점 및 한계</h3>
                  <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal whitespace-pre-line">
                    {selectedItem.problem}
                  </p>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-300/80 shadow-sm space-y-2">
                  <span className="text-xs font-mono font-bold text-[#580A14] tracking-wider block">02. TECHNICAL APPROACH</span>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900">해결 방안 및 접근법</h3>
                  <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal whitespace-pre-line">
                    {selectedItem.solution}
                  </p>
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900 text-zinc-100 space-y-2 shadow-md">
                  <span className="text-xs font-mono font-bold text-rose-400 tracking-wider block">03. RESULT & METRIC</span>
                  <h3 className="text-base sm:text-lg font-bold text-white">담당 역할 및 성과</h3>
                  <p className="text-sm sm:text-base font-bold text-rose-200 leading-relaxed whitespace-pre-line">
                    {selectedItem.impact}
                  </p>
                </div>
              </div>
            )}

            {/* 수상경력 / 활동 / 자격증 전용 목록 카드 */}
            {selectedItem.itemsList && (
              <div className="grid gap-4">
                {selectedItem.itemsList.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-zinc-300/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-zinc-900">{item.title}</h3>
                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded-md bg-[#580A14] text-white font-mono text-xs font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.desc && <p className="text-sm text-zinc-600 font-normal">{item.desc}</p>}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 font-mono text-xs font-bold text-zinc-700 self-start sm:self-center shrink-0">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* 하단 닫기 버튼 */}
            <div className="pt-2 flex justify-end">
              <button 
                onClick={() => setSelectedItem(null)}
                className="px-7 py-3 rounded-full bg-[#580A14] hover:bg-zinc-900 text-xs sm:text-sm font-bold text-zinc-100 transition shadow-lg cursor-pointer"
              >
                닫기
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}