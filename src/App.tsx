import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Folder, ArrowLeft, Check, FileText, ArrowUpRight, Cpu, Layers } from 'lucide-react';

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

interface ApproachItem {
  tag: string;
  text: string;
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
  technicalApproach?: ApproachItem[];
  techStack?: string[];
  impact?: string;
  githubUrl?: string;
  pptUrl?: string;
  architectureImage?: string;
  keyHighlights?: string[];
}

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<DirectoryItem | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);
  const isScrolling = useRef<boolean>(false);

  const MY_EMAIL = "skdpa391@gmail.com";
  const GITHUB_PROFILE = "https://github.com/wonzero0";

  const handleContactClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(MY_EMAIL).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }).catch(err => {
      console.error('클립보드 복사 실패:', err);
    });

    window.location.href = `mailto:${MY_EMAIL}`;
  };

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
      problem: '인기 차트 위주의 일률적 선곡과 일회성 단순 점수 피드백에 머무르는 기존 노래방 시스템의 한계, 그리고 단일 노드 환경에서 실시간 음성 분석 처리 시 발생하는 프로세스 과부하 문제.',
      technicalApproach: [
        { tag: '분산 아키텍처', text: 'FastAPI 백엔드와 라즈베리파이 기반 HW 제어 유닛(RPi OS, 아두이노 LED 연동) 및 독립된 AI 분석 엔진(PyTorch, Resemblyzer, Librosa) 노드 분리 구축.' },
        { tag: '비동기 통신', text: 'HTTP 비동기 통신 아키텍처로 실시간 음성 분석 프로세스 과부하 문제 해결.' },
        { tag: '보안 메커니즘', text: '사용자 데이터 대칭키 암호화(AES-256) 및 보안 인증(JWT, Bcrypt) 적용.' }
      ],
      techStack: ['FastAPI', 'Uvicorn', 'PyTorch', 'Resemblyzer', 'Librosa', 'Scikit-learn', 'MySQL', 'SQLAlchemy', 'AES-256', 'Bcrypt', 'JWT', 'Raspberry Pi', 'Arduino', 'TypeScript', 'React'],
      impact: 'PM / Backend / Security 총괄 리딩 (FastAPI 통합 API 서버 구축, DB 인프라 및 AES-256/JWT 보안 구현, 아두이노 조명 제어 연동 / 교내 RISE사업단 캡스톤디자인 경진대회 우수상 수상)',
      githubUrl: 'https://github.com/wonzero0/Capstone-project_singpick.git',
      pptUrl: 'https://catkin-locket-f2d.notion.site/SingPick-3a65b40dd14880d0a031ea6477b84acb',
      keyHighlights: ['RISE 캡스톤디자인 경진대회 우수상', '2개 라즈베리파이 분산 제어', 'AES-256 / JWT 보안 체계']
    },
    {
      id: 'smarthome',
      type: 'project',
      category: 'Security',
      title: '스마트홈 영상 탈취 모의해킹 및 보안 전송 시스템',
      subtitle: 'Docker 기반 가상 환경 스마트홈 모의해킹(Red Team) 및 RTSPS/IDS 보안 파이프라인(Blue Team) 구축',
      summary: 'Docker 기반 가상 스마트홈 환경에서 월패드·홈캠 해킹 시나리오를 재현하고, RTSP over TLS(RTSPS) 암호화 및 Python 기반 침입 탐지 시스템(IDS)을 적용하여 영상 데이터를 보호하는 보안 프로젝트입니다.',
      problem: 'RTSP 스트림의 평문 전송 취약점(Port 8554 URI/인증정보 노출), 패킷 스니핑 risk, 초기 비밀번호 및 비인가 접근 제어 미비로 인한 사생활 영상 탈취 위협.',
      technicalApproach: [
        { tag: 'Red Team', text: 'Python Socket/Scapy 기반 1~254 IP 대역 자동 포트 스캐너 및 OpenCV 연동 RTSP 무단 영상 탈취/자동 캡처 모듈 구축.' },
        { tag: 'Blue Team (TLS)', text: 'OpenSSL 사설 인증서 기반 RTSP over TLS(RTSPS Port 8322) 암호화 전송 구현 및 ID/PW ACL 접근 제어 설정.' },
        { tag: 'Blue Team (IDS)', text: 'Docker 로그 파이프라인 연동 실시간 Python IDS(비인가 접근, Auth Failure 경고) 구축.' }
      ],
      techStack: ['Docker', 'Docker Compose', 'MediaMTX', 'RTSP/RTSPS', 'FFmpeg', 'OpenSSL', 'Python', 'OpenCV', 'Socket', 'Scapy', 'Wireshark', 'Nmap'],
      impact: '단독 수행 100% | Red Team 모의해킹 시나리오 자동화 성공 및 RTSPS TLS 핸드셰이크 패킷 암호화 검증. Wireshark MITM 공격 방어 검증 완료. 경량화 검증(CPU ~1.52%, RAM ~9.79MB 사용으로 IoT Edge 기기 운용 가능성 증명)',
      githubUrl: 'https://github.com/wonzero0/smart_home_security_project.git',
      pptUrl: 'https://app.notion.com/p/3a75b40dd148806eb02adac44831cd2f?source=copy_link',
      keyHighlights: ['RTSPS over TLS 구현', '실시간 Python IDS 연동', 'Edge Device 경량화 검증 (CPU < 2%)']
    },
    {
      id: 'smart-interview',
      type: 'project',
      category: 'IoT Platform',
      title: '스마트 면접 도우미: 실시간 내용 및 비언어적 요소 피드백 시스템',
      subtitle: '라즈베리파이 기반 멀티노드 센싱, 시선/음성 실시간 피드백 및 Whisper+Gemini AI 통합 면접 부스',
      summary: '면접 부담감을 낮추고 혼자서도 실시간 비언어적 요소(시선, 음성 크기)와 내용 피드백을 받을 수 있도록 제작된 간이 면접 부스 형태의 IoT 종합 솔루션입니다.',
      problem: '실제 면접에서는 말의 내용뿐만 아니라 시선 처리, 음성 크기, 자세 등 비언어적 표현이 종합 평가되나, 혼자 연습 시 이를 실시간으로 모니터링하고 객관적인 AI 피드백을 받기 어려움.',
      technicalApproach: [
        { tag: '시선 추적', text: 'Picamera2 & OpenCV 기반 실시간 시선 추적 및 LED 피드백(정면: 흰색, 이탈: 빨간색) 모듈 구현.' },
        { tag: '멀티노드', text: 'Master-Slave 라즈베리파이 소켓 통신 구축: Master가 random.choice로 슬레이브에 신호를 송신하여 3인 면접관 시선 분산 유도(파란색 LED 점등).' },
        { tag: '음성 센싱', text: 'MAX4466 마이크 & ADC 연동 실시간 데시벨(dB) 측정 및 적정 기준(45dB) 초록/빨간 LED 표시.' },
        { tag: 'AI 분석', text: '푸시 버튼 기반 멀티스레드 제어: USB 마이크/카메라 동시 녹화·녹음 후 OpenAI Whisper로 STT 변환 및 Gemini 1.5 AI를 연동하여 논리성·표현력 분석 결과를 LCD 화면에 전송.' }
      ],
      techStack: ['Python', 'Raspberry Pi', 'Picamera2', 'OpenCV', 'MAX4466 Sound Sensor', 'Socket Programming', 'OpenAI Whisper', 'Gemini 1.5 API', 'I2C LCD', 'Thread/Subprocess'],
      impact: '영상 녹화 및 녹음 파이프라인, 면접 부스 하드웨어 설계, 실시간 시선/자세 추적 피드백 핵심 모듈 구축 담당 | 3인 면접관 가상화 멀티노드 LED 제어 및 멀티스레딩 기반 실시간 동기화 구현 완료 (개발 기간: 2025.03 ~ 2025.06)',
      githubUrl: 'https://github.com/wonzero0/IoT_Platform.git',
      pptUrl: 'https://github.com/wonzero0/IoT_Platform/blob/main/IP_Project_2025_Final_Team_3%EC%A1%B0.pdf',
      keyHighlights: ['3인 면접관 시선 분산 알고리즘', 'Whisper STT + Gemini AI 프롬프트 체이닝', '실시간 dB 데시벨 LED 피드백']
    },
    {
      id: 'momentrip',
      type: 'project',
      category: 'Mobile App',
      title: '모먼트립 (Momentrip) : 미션 및 AI 색 추출 기반 감성 여행 기록 플랫폼',
      subtitle: '2026 관광데이터 활용 공모전 (팀: 팔레트립) - 공공 관광 API 파이프라인 및 데이터 백엔드 구축',
      summary: '여행 중 수행하는 미션과 사진 기반 AI 대표 색상 추출을 통해 다이어리 및 네컷사진 형태의 감성 여행 기록을 제작하고 아카이빙하는 모바일 플랫폼입니다. 개인(여행가유) 및 그룹(같이가유) 미션, 성향별(J/P형) 코스 추천(뭐할까유) 및 기록 아카이브(기억나유) 기능을 제공합니다.',
      problem: '기존 여행 서비스의 단순 일정 및 기록 방식에서 벗어나, 공공 관광 데이터와 실시간 위치 정보에 기반한 커스텀 미션 및 맞춤형 관광지 정보를 실시간으로 파싱·연동하는 데이터 백엔드 인터페이스 구축 필요.',
      technicalApproach: [
        { tag: 'TourAPI 파이프라인', text: '한국관광공사 TourAPI 공공데이터 파이프라인 개발: 전국/지역별 위치 기반 관광지 및 랜드마크 데이터 정제 및 수집 RESTful API 커넥터 개발.' },
        { tag: '동적 미션 알고리즘', text: '사용자 계획 유무(계획형/무계획형) 및 성향(J/P)에 맞춘 6~12개의 동적 여행 미션 생성 알고리즘 데이터 연동.' },
        { tag: '스키마 설계', text: '개인/그룹 방 생성(최대 4인), 미션 리워드, AI 색 추출 프레임 및 "기억나유" 캘린더/스토리 아카이브용 데이터 응답 구조 최적화.' }
      ],
      techStack: ['Python', 'FastAPI', 'TourAPI (한국관광공사)', 'Open Data API', 'JSON RESTful API', 'MySQL', 'React Native', 'Vibe Coding AI'],
      impact: '데이터 API 및 관광 공공데이터 백엔드 담당 | TourAPI 공공 데이터 연동 API 구축 및 J/P형 여행 성향별 추천 데이터 파이프라인 완성. 2026 관광데이터 활용 공모전 출품 및 바이브코딩 초단기 프로토타이핑 달성',
      githubUrl: 'https://github.com/wonzero0/momentrip.git',
      pptUrl: 'https://github.com/wonzero0',
      keyHighlights: ['2026 관광데이터 활용 공모전 출품', '한국관광공사 TourAPI 데이터 연동', 'J/P 여행 성향별 미션 추천']
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
        { date: '2024.12', title: '교내 캡스톤디자인 경진대회', desc: 'SLAM 기반 로봇팔 활용 자율주행 시스템', badge: '우수상' },
        { date: '2024.12', title: 'ICT 경진대회', desc: '하드웨어 조립 및 제출 서류 작성 주도 (팀 프로젝트)', badge: '특별상' },
        { date: '2024.06', title: '교내 페이크보이스 아이디어 공모전', desc: '음성 합성 탐지 및 검증 메커니즘 제안', badge: '장려상' }
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
        { date: '2024.07', title: '교외 DACON 경진대회', desc: '아이디어 직접 머신러닝/딥러닝 파이프라인 모델로 구현 및 모델링 도전' },
        { date: '2025.03 - 2025.12', title: 'SW중심대학사업단 AI교육봉사단 1기', desc: '초등학생 및 취약계층 대상 맞춤형 AI·SW 교육 봉사 활동 수행'}
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
        { date: '2026.01', title: '정보처리기사 필기 합격 (실기 진행 중)', desc: '한국산업인력공단' },
        { date: '2024.09', title: '리눅스마스터 2급 1차 합격 (2차 진행 중)', desc: '한국정보통신진흥협회' }
      ]
    }
  ];

  return (
    <div className="h-screen w-screen bg-black p-2 sm:p-4 selection:bg-[#6B111D] selection:text-white font-sans antialiased overflow-hidden relative">
      
      {/* 이메일 복사 완료 알림 (TOAST POPUP) */}
      {showToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-zinc-900/90 text-white border border-zinc-700 px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-mono animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>이메일 주소가 클립보드에 복사되었습니다! (<strong className="text-rose-300">{MY_EMAIL}</strong>)</span>
        </div>
      )}

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
              href={GITHUB_PROFILE} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#580A14] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
            
            <button 
              onClick={(e) => {
                setCurrentPage(1);
                handleContactClick(e);
              }}
              className="px-4 py-1.5 rounded-full border border-zinc-800/80 bg-transparent text-zinc-900 font-bold hover:bg-zinc-900 hover:text-zinc-100 transition shadow-sm cursor-pointer"
            >
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
                      <span className="text-xs font-mono text-[#580A14] block font-bold tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-[#580A14] transition-colors line-clamp-1">
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
                  href={GITHUB_PROFILE} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-1.5 rounded-full border border-zinc-800/80 bg-transparent text-zinc-900 font-bold hover:bg-zinc-900 hover:text-zinc-100 transition shadow-sm"
                >
                  GITHUB
                </a>
                
                <button 
                  onClick={handleContactClick}
                  className="px-4 py-1.5 rounded-full border border-zinc-800/80 bg-transparent text-zinc-900 font-bold hover:bg-zinc-900 hover:text-zinc-100 transition shadow-sm cursor-pointer"
                >
                  EMAIL
                </button>
              </div>
            </footer>
          </section>

        </div>
      </div>

      {/* 프로젝트 / 이력 상세 모달 */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-zinc-900/60 backdrop-blur-md text-zinc-900 overflow-y-auto animate-in fade-in duration-200 p-4 sm:p-8 flex items-center justify-center">
          <div className="max-w-6xl w-full mx-auto bg-zinc-200 border border-zinc-300/80 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            {/* 모달 상단 헤더 */}
            <div className="flex justify-between items-center border-b border-zinc-300 pb-4">
              <button 
                onClick={() => setSelectedItem(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-[#580A14] text-xs font-mono font-bold text-zinc-100 transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK TO DIRECTORY</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm text-[#580A14] font-bold tracking-wider uppercase">
                  {selectedItem.category}
                </span>
                {selectedItem.githubUrl && (
                  <a
                    href={selectedItem.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-300 hover:border-[#580A14] text-xs font-mono font-bold text-zinc-800 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                )}
              </div>
            </div>

            {/* 항목 제목 및 개요 */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#580A14] tracking-tight">
                {selectedItem.title}
              </h1>
              <p className="text-sm sm:text-base text-zinc-800 font-bold">
                {selectedItem.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal whitespace-pre-line">
                {selectedItem.summary}
              </p>
            </div>

            {/* 기술 스택 (프로젝트 모달 전용) */}
            {selectedItem.techStack && (
              <div className="space-y-1.5 pt-1">
                <h3 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider">TECH STACK</h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedItem.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-white border border-zinc-300 text-xs font-mono font-bold text-zinc-800 shadow-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 프로젝트 상세 (2-Column Grid: Left: Problem/Approach/Impact, Right: Visual/Highlights/README Card) */}
            {selectedItem.type === 'project' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                
                {/* Left Column (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* Problem Definition */}
                  {selectedItem.problem && (
                    <div className="p-5 rounded-2xl bg-white border border-zinc-300/80 shadow-sm space-y-2">
                      <span className="text-xs font-mono font-bold text-[#580A14] tracking-wider block">01. PROBLEM DEFINITION</span>
                      <h3 className="text-base font-bold text-zinc-900">문제점 및 한계</h3>
                      <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal whitespace-pre-line">
                        {selectedItem.problem}
                      </p>
                    </div>
                  )}

                  {/* Technical Approach */}
                  {selectedItem.technicalApproach && (
                    <div className="p-5 rounded-2xl bg-white border border-zinc-300/80 shadow-sm space-y-3">
                      <span className="text-xs font-mono font-bold text-[#580A14] tracking-wider block">02. TECHNICAL APPROACH</span>
                      <h3 className="text-base font-bold text-zinc-900">해결 방안 및 핵심 접근법</h3>
                      
                      <div className="space-y-2.5">
                        {selectedItem.technicalApproach.map((item, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                            <span className="px-2 py-0.5 rounded bg-[#580A14]/10 text-[#580A14] text-[11px] font-mono font-bold border border-[#580A14]/20 inline-block">
                              [{item.tag}]
                            </span>
                            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed pt-0.5">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Result & Impact */}
                  {selectedItem.impact && (
                    <div className="p-5 rounded-2xl bg-zinc-900 text-zinc-100 space-y-2 shadow-md">
                      <span className="text-xs font-mono font-bold text-rose-400 tracking-wider block">03. RESULT & METRIC</span>
                      <h3 className="text-base font-bold text-white">담당 역할 및 성과</h3>
                      <p className="text-xs sm:text-sm font-bold text-rose-200 leading-relaxed whitespace-pre-line">
                        {selectedItem.impact}
                      </p>
                    </div>
                  )}

                </div>

                {/* Right Column (5 cols) */}
                <div className="lg:col-span-5 space-y-5">
                  
                  {/* Visual / Architecture Diagram Card */}
                  <div className="p-4 rounded-2xl bg-white border border-zinc-300/80 shadow-sm space-y-2">
                    <div className="text-xs font-mono font-bold text-zinc-500 uppercase flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5 text-[#580A14]" /> Architecture / Visual</span>
                      <span>Diagram</span>
                    </div>

                    {selectedItem.architectureImage ? (
                      <div className="rounded-xl overflow-hidden border border-zinc-200">
                        <img src={selectedItem.architectureImage} alt="Architecture" className="w-full object-cover" />
                      </div>
                    ) : (
                      <div className="h-40 border border-dashed border-zinc-300 rounded-xl bg-zinc-50 flex flex-col items-center justify-center p-4 text-center space-y-2">
                        <Cpu className="w-7 h-7 text-[#580A14] opacity-60" />
                        <div className="text-xs font-mono font-bold text-zinc-800">SYSTEM ARCHITECTURE SCHEMATIC</div>
                        <p className="text-[11px] text-zinc-500">
                          상세 아키텍처 및 모듈 다이어그램은 GitHub 리드미에 상세 기술되어 있습니다.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Key Highlights */}
                  {selectedItem.keyHighlights && (
                    <div className="p-4 rounded-2xl bg-white border border-zinc-300/80 shadow-sm space-y-2">
                      <div className="text-xs font-mono font-bold text-zinc-500 uppercase">Key Highlights</div>
                      <ul className="space-y-1.5">
                        {selectedItem.keyHighlights.map((hl, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs font-semibold text-zinc-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#580A14] shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* GitHub README / PPT Banner Card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 text-white space-y-3 shadow-md relative overflow-hidden">
                    <div className="flex items-center gap-2 text-xs font-mono text-rose-300">
                      <FileText className="w-4 h-4" />
                      <span>DOCUMENTATION & PPT</span>
                    </div>

                    <h4 className="text-sm font-bold text-white">
                      상세 발표 자료 및 리드미 (README.md)
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      구체적인 회로 구성도, 실행 화면, 알고리즘 플로우는 GitHub 저장소의 README 문서를 참고해 주세요.
                    </p>

                    {selectedItem.pptUrl && (
                      <a
                        href={selectedItem.pptUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#580A14] hover:bg-rose-900 text-white text-xs font-mono font-bold transition-all shadow-md"
                      >
                        <span>READ FULL README / PPT</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            )}

            {/* 수상경력 / 활동 / 자격증 전용 목록 카드 */}
            {selectedItem.itemsList && (
              <div className="grid gap-4 pt-2">
                {selectedItem.itemsList.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-zinc-300/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-zinc-900">{item.title}</h3>
                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded-md bg-[#580A14] text-white font-mono text-xs font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.desc && <p className="text-xs sm:text-sm text-zinc-600 font-normal">{item.desc}</p>}
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
                className="px-7 py-2.5 rounded-full bg-[#580A14] hover:bg-zinc-900 text-xs sm:text-sm font-bold text-zinc-100 transition shadow-lg cursor-pointer"
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