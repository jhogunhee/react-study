import { useState } from 'react'

function Counter() {
  // useState(초기값) → [현재값, 값을 바꾸는 함수] 반환
  // TODO 1: count 상태 선언 (초기값 0)
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold">카운터</h2>
      {/* TODO 2: count 표시 */}
      {count}
      {/* TODO 3: +1 버튼 — onClick으로 count 증가 */}
      <button className="px-3 py-1 bg-blue-500 text-white rounded"
              onClick={() => setCount(prev => prev + 1)}>
        +1
      </button>
      {/* TODO 4: -1 버튼 — count 감소 (0 미만으로 안 내려가게) */}
      <button className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => {
                 setCount(prev => prev > 0 ? prev - 1 : 0)}
              }>
        -1
      </button>
      {/* TODO 5: 초기화 버튼 */}
      <button className="px-3 py-1 bg-green-500 text-white rounded"
            onClick={() => setCount(0)}>
      초기화
      </button>
    </div>
  )
}

export default Counter
