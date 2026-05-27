# 🚀 TUSI - 경희대학교 로켓연구회

**TUSI (Time, Universe, Space & I)** — 1985년 창립된 경희대학교 중앙동아리 로켓연구회입니다.

---

## 📋 프로젝트 개요

TUSI 동아리 소개 웹사이트를 Docker와 Kubernetes 환경에서 배포하기 위한 설정 파일들을 포함합니다.

| 구성 요소 | 기술 스택 | 설명 |
|-----------|----------|------|
| **Backend** | Python FastAPI + Uvicorn | 방문자 카운트 API 제공 |
| **Frontend** | React 19 + TypeScript + Vite | 로켓연구회 소개 웹사이트 |
| **Container** | Docker (Python 3.9, Nginx) | 백엔드/프론트엔드 컨테이너 이미지 |
| **Orchestration** | Kubernetes (Deployment + Service) | 클러스터 배포 설정 |

---

## 🏗️ 디렉토리 구조

```
docker_compose_tusi/
├── backend/
│   ├── main.py              # FastAPI 앱 (방문자 카운트 API)
│   ├── Dockerfile            # Python 백엔드 Docker 이미지
│   └── requirements.txt      # Python 의존성 (fastapi, uvicorn)
├── frontend/
│   ├── src/
│   │   ├── App.tsx           # 메인 리액트 컴포넌트
│   │   ├── App.css           # 스타일 (Glassmorphism + 우주 테마)
│   │   ├── main.tsx          # React 진입점
│   │   └── index.css         # 전역 스타일
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig*.json
├── k8s/
│   └── deployment.yaml       # Kubernetes 배포 및 서비스 설정
└── .gitignore
```

---

## 🚀 로컬 실행 방법

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🐳 Docker 빌드 및 실행

```bash
# Backend
docker build -t tusi-backend ./backend

# Frontend
docker build -t tusi-frontend ./frontend
```

---

## ☸️ Kubernetes 배포

```bash
kubectl apply -f k8s/deployment.yaml
```

배포 후 `frontend-service`의 외부 IP (LoadBalancer)로 접속할 수 있습니다.

---

## 📡 API

| 엔드포인트 | 메서드 | 설명 |
|-----------|--------|------|
| `/` | GET | 서비스 상태 확인 |
| `/api/visitors` | GET | 방문자 수 조회 및 증가 |

---

## 🏆 TUSI 주요 실적

- 2025 한화에어로스페이스 Space Challenger 우주동아리 지원 공모전 수상
- 2024 DRB Space Challenge 최우수상
- 2024 DRB Space Challenge 우수상
- 2022 한국추진공학회 추계학술대회 우수발표논문상
- 2022 전국 항공우주과학경진대회 로켓학술부문 대상
- 1993~2024 전국대학생로켓경진대회 다수 수상

---

## 📞 연락처

- **중앙동아리 페이지**: [jajudy.khu.ac.kr/club/462](https://jajudy.khu.ac.kr/club/462)
- **Instagram**: [@tusi_rocket](https://www.instagram.com/tusi_rocket)
- **위치**: 경기도 용인시 기흥구 덕영대로 1732 경희대학교 국제캠퍼스

---

> © 2025 Kyung Hee University Rocket Research Club **TUSI**
