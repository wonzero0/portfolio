import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Folder, ArrowLeft } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface Project {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string;
}

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState<number>(0); // 0: Hero, 1: Projects
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isScrolling = useRef<boolean>(false);

  // 스크롤 휠 이벤트 감지 -> Full Page Snap 전환
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // 모달창이 열려있을 때는 페이지 전체 스크롤을 막지 않음
      if (selectedProject) return;

      if (isScrolling.current) return;

      if (e.deltaY > 30) {
        // 아래로 스크롤 시 2번째 페이지로 이동
        if (currentPage === 0) {
          isScrolling.current = true;
          setCurrentPage(1);
          setTimeout(() => { isScrolling.current = false; }, 700);
        }
      } else if (e.deltaY < -30) {
        // 위로 스크롤 시 1번째 페이지로 이동
        if (currentPage === 1) {
          isScrolling.current = true;
          setCurrentPage(0);
          setTimeout(() => { isScrolling.current = false; }, 700);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, selectedProject]);

  const projects: Project[] = [
    {
      id: 'singpick',
      category: 'Capstone Design',
      title: '캡스톤디자인: SingPick',
      subtitle: 'AI 음성 분석 및 이종 하드웨어 연동 시스템',
      summary: 'Dual Raspberry Pi와 Arduino 공간 LED 제어를 결합하고 FastAPI 비동기 백엔드로 구축한 AI 음성 분석 플랫폼입니다.',
      problem: '멀티 라즈베리 파이 및 센서 간 실시간 비동기 데이터 송수신 시 발생하는 네트워크 병목 및 프레임 지연.',
      solution: 'FastAPI 비동기 통신 구조 구현 및 데이터 스키마 경량화를 통해 디바이스 간 지연시간(Latency) 최소화.',
      techStack: ['FastAPI', 'Raspberry Pi', 'Arduino', 'WebSockets', 'Python'],
      impact: '통신 응답 속도 40% 향상 (캡스톤디자인 우수상 수상)'
    },
    {
      id: 'smarthome',
      category: 'Embedded & Security',
      title: '스마트홈 프로젝트',
      subtitle: '임베디드 기반 공간 제어 및 보안 플랫폼',
      summary: '센서 네트워크 데이터 기반 스마트홈 기기 제어 및 실시간 보안 이벤트 모니터링 시스템입니다.',
      problem: '다수의 IoT 센서 노드 동시 접속 시 패킷 분실 및 트래픽 폭주 문제.',
      solution: '경량 MQTT 프로토콜 도입 및 데이터 패킷 검증 암호화 알고리즘 적용.',
      techStack: ['C/C++', 'MQTT', 'Raspberry Pi', 'Linux', 'Security Protocols'],
      impact: '데이터 패킷 전달 안정성 99.8% 달성'
    },
    {
      id: 'smart-interview',
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
      category: 'Vibe Coding App',
      title: '모먼트립 (Momentrip)',
      subtitle: '공모전 바이브코딩 여행 추천 앱',
      summary: '바이브코딩(Vibe Coding) 방법론을 도입하여 초단기 애자일 프로토타이핑 방식으로 개발한 미션 기반 여행 모바일 앱입니다.',
      problem: '한정된 공모전 개발 기간 내 복잡한 UI/UX 및 기획 로직을 빠르게 프론트엔드/백엔드로 교차 구현해야 함.',
      solution: 'AI 기반 Vibe Coding 툴체인 및 프롬프트 주도 컴포넌트 설계를 통한 개발 속도 극대화.',
      techStack: ['React Native', 'TypeScript', 'Tailwind CSS', 'Vibe Coding AI'],
      impact: '프로토타입 개발 기간 70% 단축 및 공모전 출품 완료'
    }
  ];

  return (
    <div className="h-screen w-screen bg-black p-2 sm:p-4 selection:bg-[#6B111D] selection:text-white font-sans antialiased overflow-hidden">
      
      {/* MAC OS WINDOW FRAME */}
      <div className="relative h-full w-full bg-zinc-200/90 rounded-2xl border border-zinc-800/80 shadow-2xl overflow-hidden flex flex-col">
        
        {/* HEADER (고정) */}
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

          <div className="flex items-center gap-6 text-xs font-semibold tracking-wider text-zinc-700 font-mono">
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
            <button className="px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-100 font-medium hover:bg-[#580A14] transition shadow-sm">
              CONTACT
            </button>
          </div>
        </header>

        {/* FULL PAGE CONTAINER (전체 페이지 슬라이드 애니메이션) */}
        <div 
          className="w-full h-full pt-16 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${currentPage * 100}%)` }}
        >
          
          {/* ==================== 1PAGE: HERO SECTION ==================== */}
          <section className="w-full h-full flex flex-col justify-center items-center px-4 relative">
            <div className="relative w-full max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-6">
              
              <h1 className="text-[14vw] sm:text-[11.5rem] font-serif font-black tracking-tight leading-none text-[#580A14] capitalize select-none drop-shadow-sm">
                Portfolio
              </h1>

              <p className="text-base sm:text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-2">
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

          {/* ==================== 2PAGE: PROJECT DIRECTORY ==================== */}
          <section className="w-full h-full bg-zinc-200/95 text-zinc-900 border-t border-zinc-300/80 px-6 sm:px-12 py-8 flex flex-col justify-between overflow-y-auto">
            
            <div className="max-w-6xl mx-auto w-full space-y-8 my-auto">
              
              {/* 2PAGE HEADER */}
              <div className="flex flex-col gap-2 border-b border-zinc-300/80 pb-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[#580A14] tracking-widest font-bold">
                  <span>02</span>
                  <span className="w-8 h-px bg-[#580A14]"></span>
                  <span>PROJECT DIRECTORY</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#580A14] tracking-tight">
                  Projects & Work
                </h2>
                
                <p className="text-xs text-zinc-600 font-mono">
                  * 폴더를 클릭하면 해당 프로젝트의 전용 상세 페이지가 열립니다.
                </p>
              </div>

              {/* 폴더 카드가 한눈에 들어오는 4열 그리드 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProject(proj)}
                    className="group flex flex-col items-center justify-between p-6 rounded-2xl bg-zinc-100/80 border border-zinc-300/80 hover:border-[#580A14] hover:bg-white hover:shadow-xl transition-all duration-300 text-center min-h-[240px]"
                  >
                    <div className="my-auto relative">
                      <Folder className="w-20 h-20 text-sky-500 fill-sky-500/20 group-hover:scale-110 group-hover:text-sky-600 transition-transform duration-300" />
                    </div>
                    
                    <div className="w-full space-y-1 pt-3 border-t border-zinc-200">
                      <span className="text-[10px] font-mono text-[#580A14] block font-bold tracking-wider">
                        {proj.category}
                      </span>
                      <h3 className="text-xs font-bold text-zinc-900 group-hover:text-[#580A14] transition-colors line-clamp-1">
                        {proj.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>

            </div>

            {/* FOOTER */}
            <footer className="max-w-6xl mx-auto w-full pt-6 border-t border-zinc-300/80 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] font-mono text-zinc-600">
              <div>© 2026 YEOM WONYOUNG. ALL RIGHTS RESERVED.</div>
              <div className="flex gap-6">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#580A14] transition-colors">GITHUB</a>
                <a href="mailto:contact@example.com" className="hover:text-[#580A14] transition-colors">EMAIL</a>
              </div>
            </footer>

          </section>

        </div>
      </div>

      {/* 프로젝트 개별 전용 모달/페이지 */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-zinc-100/95 backdrop-blur-md text-zinc-900 overflow-y-auto animate-in fade-in duration-200 p-4 sm:p-8">
          <div className="max-w-4xl mx-auto bg-zinc-200/90 border border-zinc-300 rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl relative">
            
            <div className="flex justify-between items-center border-b border-zinc-300 pb-4">
              <button 
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-[#580A14] text-xs font-mono text-zinc-100 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK TO DIRECTORY</span>
              </button>

              <span className="font-mono text-xs text-[#580A14] font-bold uppercase tracking-wider">
                {selectedProject.category}
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#580A14] tracking-tight">
                {selectedProject.title}
              </h1>
              <p className="text-base text-zinc-800 font-bold">
                {selectedProject.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {selectedProject.summary}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-xs font-mono font-semibold text-zinc-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="p-5 rounded-xl bg-white border border-zinc-300/80 shadow-sm space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#580A14]">01. PROBLEM DEFINITION</span>
                <h3 className="text-sm font-bold text-zinc-900">문제점 및 한계</h3>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-zinc-300/80 shadow-sm space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#580A14]">02. TECHNICAL APPROACH</span>
                <h3 className="text-sm font-bold text-zinc-900">해결 방안 및 접근법</h3>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">{selectedProject.solution}</p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900 text-zinc-100 space-y-1 shadow-md">
                <span className="text-[11px] font-mono font-bold text-rose-400">03. RESULT & METRIC</span>
                <h3 className="text-sm font-bold">정량적 성과</h3>
                <p className="text-xs sm:text-sm font-bold text-rose-200">{selectedProject.impact}</p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full bg-[#580A14] hover:bg-zinc-900 text-xs font-bold text-zinc-100 transition shadow-lg"
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