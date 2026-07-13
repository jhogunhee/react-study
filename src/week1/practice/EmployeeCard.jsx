function EmployeeCard({ employee }) {
  const isRetired = !employee.isActive;

  return (
    <div className={`border border-gray-200 rounded-lg p-4 mb-2 ${isRetired ? 'opacity-40' : ''}`}>
       <h2>{employee.name}</h2>
       <p>{employee.department}</p>
    </div>
  )
}

export default EmployeeCard;
