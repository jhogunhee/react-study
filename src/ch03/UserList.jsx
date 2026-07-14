import useFetch from '@/ch04/useFetch';
// TODO 6: react-router-dom에서 Link import
import { Link } from 'react-router-dom';

function UserList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">유저 목록</h2>

      {/* TODO 3: loading이 true일 때 "로딩 중..." 표시 */}
      {loading && "로딩 중..."}
      {/* TODO 4: error가 있을 때 에러 메시지 표시 */}
      {error && `에러 발생: ${error}`}

      {/* TODO 5: 로딩 끝났고 에러도 없을 때 users.map으로 이름/이메일 렌더링 */}
      {/* TODO 7: user.name을 Link로 감싸서 to={`/users/${user.id}`}로 이동하게 만들기 */}
      {!loading && !error && data.map(user => (
         <div key={user.id}>
           <Link to={`/users/${user.id}`}>
             <h2 className="text-blue-600 hover:underline cursor-pointer">{user.name}</h2>
           </Link>
           <p>{user.email}</p>
         </div>
      ))}
    </div>
  )
}

export default UserList
