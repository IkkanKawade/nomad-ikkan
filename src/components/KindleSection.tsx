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
      title: 'AI海外ノマド完全攻略ガイド',
      description: 'AI技術を活用して海外ノマドとして成功するための実践的な手法を詳しく解説。リモートワーク、収入源の多様化、海外移住の手続きまで網羅した決定版ガイドブック。',
      amazonUrl: '#',
      price: '¥1,280',
      rating: 5,
      publishDate: '2024年1月15日'
    },
    {
      title: 'ChatGPTで収入を10倍にする方法',
      description: 'ChatGPTを活用したビジネス戦略とマネタイズ手法を実例とともに紹介。フリーランス、副業、起業家必読の一冊。実際に月収100万円を達成した具体的なノウハウを公開。',
      amazonUrl: '#',
      price: '¥980',
      rating: 4,
      publishDate: '2023年11月20日'
    },
    {
      title: 'ノマドワーカーのための税金対策',
      description: '海外在住者の税務処理、節税対策、確定申告の方法を税理士監修のもと詳しく解説。複雑な国際税務をわかりやすく説明し、合法的な節税方法を提案します。',
      amazonUrl: '#',
      price: '¥1,480',
      rating: 5,
      publishDate: '2023年9月10日'
    },
    {
      title: 'AIツール活用術 2024年版',
      description: '最新のAIツールとサービスを厳選して紹介。業務効率化、コンテンツ作成、プログラミング支援など、用途別に実践的な活用方法を解説します。',
      amazonUrl: '#',
      price: '¥1,180',
      rating: 4,
      publishDate: '2024年3月5日'
    }
  ]

  return (
    <section id="books" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">出版書籍</h2>
          <p className="text-lg text-gray-600">
            AI活用と海外ノマドライフに関する実践的な知識をまとめた書籍をKindleで出版しています
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