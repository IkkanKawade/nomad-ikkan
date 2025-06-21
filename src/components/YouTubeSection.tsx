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
      videoId: 'vp_dv5anPUc',
      title: 'AI活用で海外ノマド生活を実現する方法',
      description: 'AIツールを活用して場所に縛られない働き方を実現するための具体的な手法を解説します。'
    },
    {
      videoId: 'osU0__ThkwM',
      title: '海外移住とリモートワークの実践ガイド',
      description: '実際の海外移住体験談とリモートワークで成功するためのポイントを詳しく説明します。'
    },
    {
      videoId: 'q4V6G1gzlTY',
      title: 'デジタルノマドのライフスタイル',
      description: '世界中を旅しながら働くデジタルノマドの日常と、その実現方法をお伝えします。'
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