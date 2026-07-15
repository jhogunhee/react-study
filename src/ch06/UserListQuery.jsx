// ch06: TanStack Query — ch03 UserList를 useQuery 버전으로 마이그레이션
// TODO 3: @tanstack/react-query에서 useQuery import
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

// TODO 4: queryFn으로 쓸 fetchUsers 함수를 컴포넌트 밖에 선언
// - "Promise를 반환하는 함수"면 뭐든 queryFn이 될 수 있음 (async 함수 or .then 체인)
// - 주의: fetch는 404/500 같은 HTTP 에러에도 reject하지 않음
//   → res.ok가 false면 직접 throw new Error(...) 해야 useQuery가 error 상태로 인식
//   (기존 useFetch에는 빠져 있던 처리)
const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function UserListQuery() {
  // TODO 5: useQuery 호출
  // - 인자는 객체 하나: queryKey와 queryFn을 넣음
  // - queryKey: ['users'] — 캐시의 "주소". 같은 키를 쓰는 컴포넌트는
  //   요청을 새로 날리기 전에 캐시부터 보여줌
  // - 반환 객체에서 data, isPending, error 꺼내기
  //   (v5는 isLoading 대신 isPending이 기본 — "캐시에 데이터가 아직 없고 fetch 중")
  const { data, isPending, error } = useQuery({
      queryKey: ['users'],
      queryFn: fetchUsers,
  });

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">유저 목록 (TanStack Query)</h2>

      {/* TODO 6: 아래는 ch03에서 복사한 렌더링 코드
          - loading → isPending 으로 교체 (!loading && !error 조건도 같이)
          - useQuery의 error는 문자열이 아니라 Error 객체 → error.message로 표시 */}
      {isPending && "로딩 중..."}
      {error && `에러 발생: ${error.message}`}

      {!isPending && !error && data.map(user => (
        <div key={user.id}>
          <Link to={`/users-q/${user.id}`}>
            <h2 className="text-blue-600 hover:underline cursor-pointer">{user.name}</h2>
          </Link>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default UserListQuery
