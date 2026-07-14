import { useState } from 'react'
import FilterButtons from '@/ch02/FilterButtons'

function TodoList() {
  // TODO 1: todos 상태 선언 (초기값: 빈 배열)
  const [todos, setTodos] = useState([]);
  // TODO 2: input 상태 선언 (초기값: 빈 문자열)
  const [input, setInput] = useState('');

  // TODO 3: 추가 함수 — input 값으로 todo 추가 후 input 초기화
  const addTodo = () => {
      if (!input) {
         return;
      }

      setTodos(prev => [...prev, { id: Date.now(), text: input, done: false}]);
      setInput('');
  }

  // TODO 4: 삭제 함수 — id로 해당 todo 제거
  const removeTodo = (id) => setTodos(prev => prev.filter(todo => todo.id !== id));

  // TODO 5: 완료 토글 함수 — id로 해당 todo의 done을 반전
  const toggleTodo = (id) => {
      setTodos(prev => prev.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
  }

  // TODO 8: 필터 상태 선언 ('all' | 'active' | 'done', 초기값 'all')
  const [filter, setFilter] = useState('all');

  // TODO 9: filter에 따라 todos 필터링
  const filteredTodos = todos.filter(todo => {
      if (filter === 'active') return todo.done === false;
      if (filter === 'done') return todo.done === true;
      return true;
  })

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">투두리스트</h2>

      {/* TODO 6: input + 추가 버튼 */}
      <input value={input}
             onChange={(e) => setInput(e.target.value)}
             className="border border-gray-300 rounded px-3 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <button onClick={addTodo}>추가</button>

      {/* TODO 11: FilterButtons 렌더링, filter/onFilterChange props 전달 */}
      <FilterButtons filter={filter} onFilterChange={setFilter} />

      {/* TODO 7: todos.map으로 각 항목 렌더링 (filteredTodos로 교체할 것) */}
      {filteredTodos.map(todo => (
          <div key={todo.id} className="flex items-center gap-2">
              <span className={todo.done ? 'line-through text-gray-400' : ''}>
                {todo.text}
              </span>
              <button onClick={() => toggleTodo(todo.id)}>
                  {todo.done ? '완료취소' : '완료'}
              </button>
              <button onClick={() => removeTodo(todo.id)}>삭제</button>
          </div>
      ))}
    </div>
  )
}

export default TodoList
