import Week1 from './week1/Week1'
import EmployeeList from './week1/practice/EmployeeList'

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">React Study</h1>
      <Week1 />
      <hr className="my-6" />
      <EmployeeList />
    </div>
  )
}

export default App
