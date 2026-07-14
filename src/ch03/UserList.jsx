import { useState, useEffect } from 'react'

function UserList() {
  // TODO 1: users, loading, error 상태 선언
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO 2: useEffect로 컴포넌트가 처음 렌더링될 때 데이터 fetch
  // - fetch('https://jsonplaceholder.typicode.com/users')
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message)
            setLoading(false);
        })
  }, [])

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">유저 목록</h2>

      {/* TODO 3: loading이 true일 때 "로딩 중..." 표시 */}
      {loading && "로딩 중..."}
      {/* TODO 4: error가 있을 때 에러 메시지 표시 */}
      {error && `에러 발생: ${error}`}

      {/* TODO 5: 로딩 끝났고 에러도 없을 때 users.map으로 이름/이메일 렌더링 */}
      {!loading && !error && users.map(user => (
         <div key={user.id}>
           <h2>{user.name}</h2>
           <p>{user.email}</p>
         </div>
      ))}
    </div>
  )
}

export default UserList