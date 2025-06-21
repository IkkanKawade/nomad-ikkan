export default function CurriculumSection() {
  const steps = [
    {
      number: "01",
      title: "AI基礎スキルの習得",
      description: "ChatGPTや生成AIを活用したリサーチ・ライティング・マーケ戦略",
      details: [
        "ChatGPT活用術の基礎から応用まで",
        "AIライティングツールでコンテンツ大量生産",
        "AI画像生成ツールでクリエイティブ制作",
        "データ分析AIでマーケット調査"
      ],
      icon: "🤖",
      color: "blue"
    },
    {
      number: "02", 
      title: "海外でのスモールビジネス企画と実践",
      description: "デジタルプロダクト、サービス開発、販売チャネル構築",
      details: [
        "ニッチ市場の発見と参入戦略",
        "デジタル商品の企画・開発",
        "オンラインサービスの立ち上げ",
        "海外向け販売チャネルの構築"
      ],
      icon: "🌍",
      color: "green"
    },
    {
      number: "03",
      title: "ビジネスの自動化と収益化", 
      description: "AIツールで効率化、収益化の流れを設計",
      details: [
        "販売プロセスの自動化システム",
        "カスタマーサポートのAI化",
        "マーケティング自動化の構築",
        "収益分析と最適化戦略"
      ],
      icon: "⚙️",
      color: "purple"
    },
    {
      number: "04",
      title: "帰国後も継続できる仕組み化",
      description: "オンライン完結型事業の最終整備、リモート維持体制",
      details: [
        "完全リモート運営体制の構築",
        "帰国後の事業継続戦略",
        "スケーラビリティの確保",
        "長期的成長プランの策定"
      ],
      icon: "🚀",
      color: "orange"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200", 
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200"
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            実践的な<span className="text-purple-600">4つのステップ</span>で、<br />
            人生を変えるビジネスを構築
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            理論だけでなく、実際に手を動かして成果を出すカリキュラム
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-32 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-transparent hidden md:block"></div>
              )}
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                      <div className={`rounded-full p-4 mr-4 ${getColorClasses(step.color)}`}>
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                      <div className="text-4xl font-bold text-gray-300">{step.number}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="md:w-2/3 bg-gray-50 p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      📋 学習内容
                    </h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white p-10 text-center">
          <h3 className="text-3xl font-bold mb-4">
            🎯 受講期間：6ヶ月間の集中プログラム
          </h3>
          <p className="text-xl mb-6">
            理論学習 × 実践ワーク × 個別コーチングで確実にスキルを習得
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">📚</div>
              <div className="font-semibold">週2回のオンライン講義</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">💬</div>
              <div className="font-semibold">月1回の個別コーチング</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl mb-2">👥</div>
              <div className="font-semibold">受講生コミュニティ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}