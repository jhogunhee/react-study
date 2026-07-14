import { create } from 'zustand';

// TODO 1: create()의 콜백 안에 theme, toggleTheme 채우기
// - theme: 'light' (초기값)
// - toggleTheme: () => set(state => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
//   (useState의 setter에서 prev => ... 했던 것과 같은 원리 — set도 이전 state를 받아서 새 state를 반환)
const useThemeStore = create((set) => ({
    theme: 'light',
    toggleTheme: () => set(state => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
    }))
}))

export default useThemeStore;
