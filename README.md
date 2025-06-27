이 프로젝트는 Micro Frontend 아키텍처를 사용한 법률 서비스 플랫폼입니다.

  📋 프로젝트 소개

  마이크로 프론트엔드 패턴을 적용하여 구성된 법률 서비스 플랫폼으로, 각 기능을 독립적인 모듈로 분리하여 개발 및 배포의 유연성을 높인 클론 코딩 프로젝트입니다.

  🏗️ 아키텍처

  - Container App: 모든 마이크로 앱들을 통합하는 메인 컨테이너
  - Header: 헤더 및 로그인/회원가입 기능
  - Main: 메인 페이지 및 검색 기능
  - Footer: 푸터 컴포넌트
  - About Us: 회사 소개 페이지
  - Inquiry: 문의 기능
  - Topic1: 법률 주제별 서비스
  - Modal: 모달 컴포넌트

  🛠️ 기술 스택

  Frontend

  - React 18 - 컴포넌트 기반 UI 라이브러리
  - TypeScript - 정적 타입 시스템
  - Rspack - 고성능 번들러
  - Module Federation - 마이크로 프론트엔드 구현
  - TailwindCSS - 유틸리티 퍼스트 CSS 프레임워크
  - Material-UI - React 컴포넌트 라이브러리
  - Emotion - CSS-in-JS 라이브러리

  Development Tools

  - Lerna - 모노레포 관리
  - PostCSS - CSS 후처리기
  - Cross-env - 환경변수 관리

  Authentication

  - 소셜 로그인 (Google, Kakao, Naver)
  - JWT 토큰 기반 인증

  Deployment

  - Docker - 컨테이너화
  - Nginx - 웹 서버

  🚀 실행 방법

  # 의존성 설치
  npm run bootstrap

  # 개발 서버 실행 (모든 앱 병렬 실행)
  npm start

  📁 프로젝트 구조

  ● Law-Co-Code/

  ├── lawform-container/     # 메인 컨테이너 앱
 
  ├── lawform-header/        # 헤더 모듈
 
  ├── lawform-main/          # 메인 페이지 모듈
 
  ├── lawform-footer/        # 푸터 모듈
 
  ├── lawform-aboutus/       # 회사 소개 모듈
 
  ├── lawform-inquiry/       # 문의 모듈
 
  ├── lawform-topic1-app/    # 법률 주제 모듈
 
  ├── modal-test/            # 모달 테스트 모듈
 
  └── register-page/         # 회원가입 페이지
  

