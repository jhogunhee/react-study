// TODO 1: react-router-dom에서 Link import
// - Link는 <a>랑 비슷하지만, 페이지를 새로고침하지 않고 라우팅해줌
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex gap-4 mb-6 pb-4 border-b border-gray-200">
      {/* TODO 2: Link 3개 - to="/" (카운터), to="/todo" (투두), to="/users" (유저 목록) */}
      <Link to="/">카운터</Link>
      <Link to="/todo">투두</Link>
      <Link to="/users">유저 목록</Link>
    </nav>
  )
}

export default Nav