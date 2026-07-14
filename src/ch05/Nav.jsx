// TODO 1: react-router-dom에서 Link import
// - Link는 <a>랑 비슷하지만, 페이지를 새로고침하지 않고 라우팅해줌
import { Link } from 'react-router-dom';
// TODO 4: '@/ch05/ThemeContext'에서 useTheme import
import { useTheme } from '@/ch05/ThemeContext';

function Nav() {
  // TODO 5: useTheme()으로 theme, toggleTheme 꺼내기
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex gap-4 mb-6 pb-4 border-b border-gray-200">
      {/* TODO 2: Link 3개 - to="/" (카운터), to="/todo" (투두), to="/users" (유저 목록) */}
      <Link to="/">카운터</Link>
      <Link to="/todo">투두</Link>
      <Link to="/users">유저 목록</Link>
      {/* TODO 6: 버튼 하나 추가 - onClick={toggleTheme}, 현재 theme에 따라 문구 다르게 ('라이트 모드' / '다크 모드') */}
      <button onClick={toggleTheme}>
        {theme === 'light' ? '다크 모드' : '라이트 모드'}
      </button>
    </nav>
  )
}

export default Nav
