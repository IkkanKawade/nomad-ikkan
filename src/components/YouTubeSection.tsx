'use client'

interface YouTubeVideoProps {
  videoId: string
  title: string
  description: string
}

function YouTubeVideo({ videoId, title, description }: YouTubeVideoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default function YouTubeSection() {
  const videos = [
    {
      videoId: 'dQw4w9WgXcQ', // プレースホルダー - 実際のVideo IDに置き換えてください
      title: 'AI活用で月収100万円達成した方法',
      description: '海外ノマドとしてAIツールを活用し、リモートワークで安定収入を得る具体的な手法を解説します。'
    },
    {
      videoId: 'dQw4w9WgXcQ', // プレースホルダー - 実際のVideo IDに置き換えてください
      title: '海外移住前に知っておくべき5つのポイント',
      description: 'ビザ、税金、保険など、海外移住する前に必ず準備しておくべき重要事項をまとめました。'
    },
    {
      videoId: 'dQw4w9WgXcQ', // プレースホルダー - 実際のVideo IDに置き換えてください
      title: 'ノマドに最適な国ランキングTOP10',
      description: '生活費、インターネット環境、治安などを総合的に判断した、ノマドワーカーにおすすめの国をランキング形式で紹介。'
    }
  ]

  return (
    <section id="youtube" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">YouTube動画</h2>
          <p className="text-lg text-gray-600">
            AIと海外ノマドに関する実践的な情報を動画で配信しています
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <YouTubeVideo
              key={index}
              videoId={video.videoId}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}