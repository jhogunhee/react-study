// TODO 8: react-router-dom에서 useParams import
// - useParams는 현재 URL에서 :id 같은 동적 파라미터 값을 꺼내주는 훅
import { useParams } from 'react-router-dom';
import useFetch from '@/ch04/useFetch'

function UserDetail() {
  // TODO 9: useParams()로 URL의 :id 값 꺼내기
  const { id } = useParams();

  // TODO 10: useFetch로 해당 유저 한 명만 가져오기
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      {/* TODO 11: loading, error, user 각각의 경우 표시
          - loading이면 "로딩 중..."
          - error면 에러 메시지
          - 성공하면 user.name, user.email, user.phone, user.company.name 표시 */}
      {loading && '로딩 중..'}
      {error && `오류 발생: ${error}`}
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

export default UserDetail
