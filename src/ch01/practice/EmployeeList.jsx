import EmployeeCard from './EmployeeCard'

// TODO: 아래 데이터를 map으로 렌더링해보세요
const employees = [
  { id: 1, name: '김민준', department: '개발팀', isActive: true },
  { id: 2, name: '이서연', department: '디자인팀', isActive: true },
  { id: 3, name: '박도윤', department: '마케팅팀', isActive: false },
  { id: 4, name: '최수아', department: '개발팀', isActive: true },
]

function EmployeeList() {
  // TODO 1: 전체 인원 수 구하기
  const employNum = employees.length;
  // TODO 2: 재직 중인 인원 수 구하기
  const activeEmployNum = employees.filter(x => x.isActive === true).length;

  return (
    <section>
      <h2>직원 명단</h2>
      {/* TODO 3: "전체 N명 / 재직 중 N명" 텍스트 출력 */}
      전체: {employNum}명  재직 중 {activeEmployNum}명
      {/* TODO 4: employees.map으로 EmployeeCard 렌더링 */}
      {employees.map(employee => {
         return <EmployeeCard key={employee.id} employee={employee}/>
      })}
    </section>
  )
}

export default EmployeeList
