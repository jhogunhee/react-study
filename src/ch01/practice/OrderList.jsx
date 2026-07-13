import OrderRow from './OrderRow'

const orders = [
  { id: 'ORD-001', name: '갤럭시 버즈4 프로', qty: 2, price: 279000, status: 'shipped' },
  { id: 'ORD-002', name: '무선 키보드', qty: 1, price: 89000, status: 'pending' },
  { id: 'ORD-003', name: '모니터암', qty: 3, price: 45000, status: 'cancelled' },
  { id: 'ORD-004', name: '웹캠', qty: 1, price: 120000, status: 'shipped' },
]

function OrderList() {
  // TODO 1: 취소 제외 총합계 (qty × price, status !== 'cancelled')
  const ordSum = orders.filter(order => order.status !== 'cancelled')
                       .reduce((acc, order) => acc + order.qty * order.price, 0);
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">주문 내역</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border border-gray-200">주문번호</th>
            <th className="p-2 border border-gray-200">상품명</th>
            <th className="p-2 border border-gray-200">수량</th>
            <th className="p-2 border border-gray-200">단가</th>
            <th className="p-2 border border-gray-200">총 금액</th>
            <th className="p-2 border border-gray-200">상태</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO 2: orders.map으로 OrderRow 렌더링 */}
          {orders.map(order => {
              return <OrderRow key={order.id} order={order} />
          })}
        </tbody>
      </table>
      {/* TODO 3: 하단에 "합계: N원" 표시 */}
      합계 : {ordSum.toLocaleString()}원
    </section>
  )
}

export default OrderList
