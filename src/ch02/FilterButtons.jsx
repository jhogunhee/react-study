function FilterButtons({ filter, onFilterChange }) {
  // TODO 10: 버튼 3개 (전체/진행중/완료)
  // 각 버튼 onClick={() => onFilterChange('all' | 'active' | 'done')}
  // 현재 filter와 일치하는 버튼은 다른 스타일로 표시(선택 강조)
  return (
    <div className="flex gap-2 mb-3">
      {/* 여기에 버튼 3개 */}
      <button className={filter === 'all' ? 'font-bold underline' : ''} onClick={() => onFilterChange('all')}>전체</button>
      <button className={filter === 'active' ? 'font-bold underline' : ''} onClick={() => onFilterChange('active')}>진행중</button>
      <button className={filter === 'done' ? 'font-bold underline' : ''} onClick={() => onFilterChange('done')}>완료</button>
    </div>
  )
}

export default FilterButtons