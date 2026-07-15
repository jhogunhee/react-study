# react-study
리액트 학습 기록

🔗 **배포:** https://jhogunhee.github.io/react-study/

## 실행 방법

```bash
npm install
npm run dev
```

## 커리큘럼

| 챕터 | 주제 | 상태 |
|------|------|------|
| ch01 | JSX, 컴포넌트, props, 조건부/리스트 렌더링 | ✅ 완료 |
| ch02 | useState, 이벤트, 폼, state 끌어올리기 | ✅ 완료 |
| ch03 | useEffect, 데이터 페칭, 로딩/에러 처리 | ✅ 완료 |
| ch04 | 커스텀 훅 | ✅ 완료 |
| ch05 | React Router, Context, Zustand | ✅ 완료 |
| ch06 | TanStack Query — useQuery 캐싱 | ✅ 완료 |

## 구조

```
src/
├── main.jsx
├── App.jsx
├── ch01/
├── ch02/
└── ...
notes/
```

## 커밋 컨벤션

`타입: 내용` 형식으로, 실습 단위(개념 하나)마다 커밋.

| 타입 | 용도 | 예시 |
|------|------|------|
| `feat` | 새 실습 코드 | `feat: useState 카운터 실습` |
| `fix` | 실습 코드 버그 수정 | `fix: 상세 라우트 경로 오타 수정` |
| `refactor` | 동작 변화 없는 코드 정리 | `refactor: fetch 로직 커스텀 훅으로 분리` |
| `docs` | 개념 정리, README | `docs: hooks 개념 정리` |
| `chore` | 설정, 폴더 구조, 배포 | `chore: GitHub Pages 배포 워크플로우 추가` |
