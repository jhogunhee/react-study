// 상태별 스타일 매핑
const statusStyle = {
  pending:   { label: '배송 준비중', className: 'text-yellow-600' },
  shipped:   { label: '배송중',     className: 'text-blue-600' },
  cancelled: { label: '취소',       className: 'text-red-500' },
}

function OrderRow({ order }) {
  // TODO 1: 총금액 계산 (수량 × 단가)
  const totPrice = order.price * order.qty;
  // TODO 2: 취소 여부 (order.status === 'cancelled')
  const isCancel = order.status === 'cancelled';
  // TODO 3: statusStyle에서 현재 상태의 label, className 꺼내기
  const rowStyle = statusStyle[order.status];

  return (
    <tr>
      <td>{order.id}</td>
      {/* TODO 4: 취소된 주문은 line-through 적용 */}
      <td className={isCancel ? 'line-through text-gray-400' : ''}>{order.name}</td>
      <td className="text-right">{order.qty}개</td>
      <td className="text-right">{order.price.toLocaleString()}</td>
      {/* TODO 5: 총금액 표시 (toLocaleString) */}
      <td className="text-right">{totPrice.toLocaleString()}</td>
      {/* TODO 6: 상태 텍스트 표시 (statusStyle 활용) */}
      <td className={`text-center ${rowStyle.className}`}>{rowStyle.label}</td>
    </tr>
  )
}

export default OrderRow
