interface ProjectProps {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  imageUrl?: string
}

function ProjectCard({ title, description, technologies, demoUrl, githubUrl, imageUrl }: ProjectProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-white text-center">
            <div className="text-4xl mb-2">🤖</div>
            <div className="text-lg font-semibold">{title}</div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              デモを見る
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-center hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const projects = [
    {
      title: 'AI記事生成ツール',
      description: 'OpenAI GPT-4を活用した自動記事生成システム。SEO最適化された高品質なコンテンツを大量生産できます。',
      technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'スマートチャットボット',
      description: 'RAGシステムを組み込んだ企業向けカスタマーサポートボット。自然な会話で顧客の問い合わせに対応します。',
      technologies: ['Python', 'LangChain', 'Pinecone', 'FastAPI'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI画像解析アプリ',
      description: 'Computer Visionを活用した画像解析サービス。物体検出、感情分析、テキスト抽出が可能です。',
      technologies: ['React', 'TensorFlow.js', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'ノマド支援ツール',
      description: 'ビザ情報、生活費、Wi-Fi速度などを一元管理できる海外ノマド向けの情報収集・管理ツール。',
      technologies: ['Vue.js', 'Firebase', 'Chart.js', 'PWA'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AIトレーディングBot',
      description: '機械学習アルゴリズムを使用した自動トレーディングシステム。リスク管理機能も充実しています。',
      technologies: ['Python', 'scikit-learn', 'pandas', 'Alpaca API'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: '多言語翻訳API',
      description: 'AI翻訳エンジンを活用した高精度な多言語翻訳サービス。ビジネス文書から日常会話まで対応。',
      technologies: ['Flask', 'Transformers', 'Docker', 'AWS'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI開発ポートフォリオ</h2>
          <p className="text-lg text-gray-600">
            実際に開発したAIアプリケーションとサービスをご紹介します
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}