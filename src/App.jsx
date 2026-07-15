import Counter from '@/ch02/Counter';
import TodoList from '@/ch02/TodoList';
import UserList from '@/ch03/UserList';
import Nav from '@/ch05/Nav';
import UserDetail from '@/ch05/UserDetail';
import UserListQuery from '@/ch06/UserListQuery';
import UserDetailQuery from '@/ch06/UserDetailQuery';

import { Routes, Route } from 'react-router-dom';
import useThemeStore from '@/ch05/themeStore';

function App() {
  // TODO 8: useTheme()으로 theme 꺼내기
  const { theme } = useThemeStore();

  return (
    <div className={`max-w-2xl mx-auto p-6 font-sans min-h-screen
      ${theme === 'dark' ? 'bg-gray-900 text-white' : ''}`}>
      <h1 className="text-2xl font-bold mb-6">React Study</h1>
      <Nav />
      <Routes>
        <Route path="/"      element={<Counter />} />
        <Route path="/todo"  element={<TodoList />} />
        <Route path="/users" element={<UserList />} />
        {/* TODO 12: path="/users/:id" → UserDetail */}
        <Route path="/users/:id" element={<UserDetail />} />

        {/* TODO 10(ch06): path="/users-q" → UserListQuery, path="/users-q/:id" → UserDetailQuery
            (import도 추가 — ch04/ch05 라우트는 그대로 두고 비교용으로 나란히 운영) */}
        <Route path="/users-q" element={<UserListQuery />} />
        <Route path="/users-q/:id" element={<UserDetailQuery />} />
      </Routes>
    </div>
  )
}

export default App
