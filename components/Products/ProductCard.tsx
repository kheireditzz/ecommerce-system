import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center mb-3">
          <span className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
          <span className={`text-sm px-2 py-1 rounded ${
            product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {product.stock > 0 ? `📦 ${product.stock}` : 'Out of Stock'}
          </span>
        </div>

        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-center"
          >
            View Details
          </Link>
          {onAddToCart && product.stock > 0 && (
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              ➕ Add
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
