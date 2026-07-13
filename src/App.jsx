import Counter from './ch02/Counter'
import TodoList from './ch02/TodoList'

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">React Study</h1>
      <Counter />
      <hr className="my-6" />
      <TodoList />
    </div>
  )
}

export default App
