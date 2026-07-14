import { useState, useEffect } from 'react'

// TODO 1: url을 인자로 받는 커스텀 훅 선언
// - 커스텀 훅은 이름이 반드시 use로 시작해야 함 (React가 훅 규칙을 지키는지 판단하는 기준)
function useFetch(url) {
  // TODO 2: data, loading, error 상태 선언
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO 3: useEffect로 fetch 실행
  useEffect(() => {
     fetch(url)
       .then(res => res.json())
       .then(json => {
          setData(json);
          setLoading(false);
       })
       .catch(err => {
          setError(err.message);
          setLoading(false);
       })
  }, [url])

  // TODO 4: 이 훅을 사용하는 컴포넌트가 쓸 수 있도록 값들을 반환
  return { data, loading, error }
}

export default useFetch