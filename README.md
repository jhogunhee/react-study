# react-study
리액트 학습 기록

## 실행 방법

```bash
npm install
npm run dev   
```

## 커리큘럼

| 주차 | 주제 | 상태 |
|------|------|------|
| 1주차 | JSX, 컴포넌트, props, 조건부/리스트 렌더링 | 🔄 진행 중 |
| 2주차 | useState, 이벤트, 폼, state 끌어올리기 | ⬜ |
| 3주차 | useEffect, 데이터 페칭, 로딩/에러 처리 | ⬜ |
| 4주차 | 렌더링 최적화 (memo/useMemo/useCallback), 커스텀 훅 | ⬜ |
| 5주차 | React Router, Context, Zustand | ⬜ |
| 6주차~ | TanStack Query, TypeScript, WMS 프로젝트 적용 | ⬜ |

## 구조

```
src/
├── main.jsx        # 진입점
├── App.jsx         # 루트 컴포넌트 (주차별 실습 교체 지점)
├── week1/          # 주차별 실습 코드
├── week2/
└── ...
notes/              # 개념 정리 마크다운
```

## 커밋 컨벤션

- `feat: useState 카운터 실습`
- `docs: hooks 개념 정리`
- `refactor: ProductCard 컴포넌트 분리`

실습 단위(개념 하나)마다 커밋. 하루치 몰아서 커밋 금지.
