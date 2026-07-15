import { useParams } from 'react-router-dom';
// TODO 7: useQuery import + fetchUser(id) 함수를 컴포넌트 밖에 선언
// - fetchUsers와 달리 id 인자가 필요함
import { useQuery } from '@tanstack/react-query';

function UserDetailQuery() {
  const { id } = useParams();

  // TODO 8: useQuery 호출
  // - queryKey: ['users', id] — 키에 id를 포함해야 유저마다 캐시가 따로 잡힘
  //   (useFetch 시절 [url] 의존성 배열이 하던 역할을 queryKey가 대신함:
  //    키가 바뀌면 알아서 새 데이터를 fetch)
  // - queryFn: 인자가 필요하므로 () => fetchUser(id) 처럼 화살표 함수로 감싸서 전달
  const fetchUser = async (id) => {
     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
     if (!res.ok) throw new Error(`HTTP ${res.status}`);
     return res.json();
  }

  const { data, isPending, error } = useQuery({
       queryKey: ['users', id],
       queryFn: () => fetchUser(id),
  })

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      {/* TODO 9: ch05에서 복사한 렌더링 코드 — loading → isPending, error → error.message */}
      {isPending && '로딩 중..'}
      {error && `오류 발생: ${error.message}`}
      {data && (
        <div>
          <p>이름: {data.name}</p>
          <p>이메일: {data.email}</p>
          <p>전화번호: {data.phone}</p>
          <p>회사명: {data.company.name}</p>
        </div>
      )}
    </div>
  )
}

export default UserDetailQuery
