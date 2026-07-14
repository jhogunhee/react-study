import { createContext, useContext, useState } from 'react'

// TODO 1: createContext()로 컨텍스트 생성 (빈 그릇 만들기)
const ThemeContext = createContext();

// TODO 2: Provider 역할을 할 컴포넌트
// - theme 상태 선언 ('light' | 'dark', 초기값 'light')
// - toggleTheme 함수 (light <-> dark 반전)
// - <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider> 반환
// - children을 받는 이유: 이 컴포넌트로 감싸는 하위 트리 전체에 값을 공급해야 하니까
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
     setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// TODO 3: 커스텀 훅으로 감싸서 쓰기 편하게 만들기
// - 매번 useContext(ThemeContext) 쓰는 대신 useTheme()으로 짧게 쓰려는 목적
// - return useContext(ThemeContext)
export function useTheme() {
   return useContext(ThemeContext)
}
