import Counter from '@/ch02/Counter'
import TodoList from '@/ch02/TodoList'
import UserList from '@/ch03/UserList'
import Nav from '@/ch05/Nav'
import UserDetail from '@/ch05/UserDetail'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">React Study</h1>
      <Nav />
      <Routes>
        <Route path="/"      element={<Counter />} />
        <Route path="/todo"  element={<TodoList />} />
        <Route path="/users" element={<UserList />} />
        {/* TODO 12: path="/users/:id" → UserDetail */}
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  )
}

export default App
