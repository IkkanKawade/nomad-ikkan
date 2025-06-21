interface BookProps {
  title: string
  description: string
  amazonUrl: string
  price: string
  rating: number
  coverImage?: string
  publishDate: string
}

function BookCard({ title, description, amazonUrl, price, rating, coverImage, publishDate }: BookProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="h-64 md:h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            {coverImage ? (
              <img src={coverImage} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="text-white text-center p-4">
                <div className="text-6xl mb-2">📚</div>
                <div className="text-sm font-semibold">{title}</div>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <span className="text-2xl font-bold text-orange-600">{price}</span>
          </div>
          <div className="flex items-center mb-3">
            <div className="flex">{renderStars(rating)}</div>
            <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">発売日: {publishDate}</span>
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
            >
              <span>Amazonで購入</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function KindleSection() {
  const books = [
    {
      title: 'Z世代は世界で稼げ。AIを最強の相棒にする"次世代型の海外ノマド入門"',
      description: 'Z世代に向けた次世代型海外ノマド入門書。AIを最強の相棒として活用し、世界中どこでも稼げるスキルとマインドセットを身につける実践的ガイド。',
      amazonUrl: 'https://amzn.asia/d/7LPXTVX',
      price: '¥1,480',
      rating: 5,
      publishDate: '2024年6月21日'
    }
  ]

  return (
    <section id="books" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">出版書籍</h2>
          <p className="text-lg text-gray-600">
            AI活用と海外ノマドライフに関する実践的な知識をまとめた書籍をKindleで出版
          </p>
        </div>
        <div className="space-y-8">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              description={book.description}
              amazonUrl={book.amazonUrl}
              price={book.price}
              rating={book.rating}
              publishDate={book.publishDate}
            />
          ))}
        </div>
      </div>
    </section>
  )
}