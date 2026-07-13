import EmployeeList from './week1/practice/EmployeeList'
import OrderList from './week1/practice/OrderList'

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">React Study</h1>
      <EmployeeList />
      <hr className="my-6" />
      <OrderList />
    </div>
  )
}

export default App
