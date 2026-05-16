import { Order } from '@/lib/types'
import { formatPrice, formatDate } from '@/lib/utils'

interface OrderItemProps {
  order: Order
  onDownload?: (order: Order) => void
}

export default function OrderItem({ order, onDownload }: OrderItemProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    paid: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
  }

  return (
    <div className="border rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="font-bold text-lg">Order #{order.id.slice(0, 8)}</p>
          <p className="text-gray-600 text-sm">📅 {formatDate(order.created_at)}</p>
        </div>
        <span className={`px-3 py-1 rounded text-sm font-semibold ${statusColors[order.status as keyof typeof statusColors]}`}>
          {order.status.toUpperCase()}
        </span>
      </div>

      <div className="bg-gray-50 p-3 rounded mb-3">
        <p className="text-sm">📦 {order.product?.name || 'Unknown Product'}</p>
        <p className="text-sm text-gray-600">Quantity: {order.quantity}x</p>
        <p className="font-bold text-lg mt-2">💰 {formatPrice(order.total_price)}</p>
      </div>

      <div className="flex gap-2">
        {order.status === 'success' && onDownload && (
          <button
            onClick={() => onDownload(order)}
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm"
          >
            📥 Download Invoice
          </button>
        )}
        {order.status === 'pending' && (
          <button className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 text-sm">
            💳 Pay Now
          </button>
        )}
      </div>
    </div>
  )
}
