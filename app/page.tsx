import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">🛍️ Welcome to ShopHub</h1>
          <p className="text-xl mb-8">Your favorite online shopping destination</p>
          <Link
            href="/products"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-block"
          >
            Start Shopping 🛒
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose ShopHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '📦',
              title: 'Wide Selection',
              description: 'Browse thousands of products from various categories',
            },
            {
              icon: '💳',
              title: 'Secure Payment',
              description: 'Multiple payment options with secure transactions',
            },
            {
              icon: '🚚',
              title: 'Fast Delivery',
              description: 'Quick and reliable shipping to your doorstep',
            },
            {
              icon: '💬',
              title: '24/7 Support',
              description: 'Customer support available anytime via WhatsApp',
            },
            {
              icon: '🔄',
              title: 'Easy Returns',
              description: 'Hassle-free returns within 30 days',
            },
            {
              icon: '⭐',
              title: 'Best Price',
              description: 'Competitive pricing and regular discounts',
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
        <p className="text-lg mb-8">Explore our amazing collection of products</p>
        <Link
          href="/products"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
        >
          Browse Products 📦
        </Link>
      </section>
    </div>
  )
}
