export default function CurriculumSection() {
  const steps = [
    {
      number: "Day1",
      title: "【1日目】AI武装＆市場分析",
      description: "あなた専用のAI秘書を作り、勝てる市場を発見する",
      details: [
        "ChatGPT完全カスタマイズで個人専用AI秘書を構築",
        "AI活用リサーチで穴場ニッチ市場を特定",
        "競合分析と差別化ポイントの明確化",
        "あなただけの事業コンセプト設計"
      ],
      icon: "🤖",
      color: "blue"
    },
    {
      number: "Day2", 
      title: "【2日目】事業設計＆プロダクト開発",
      description: "AIを駆使して24時間で実際の商品・サービスを形にする",
      details: [
        "AI活用でデジタルプロダクトを高速開発",
        "販売ページ・LP作成（AIライティング活用）",
        "決済システム・販売フローの構築",
        "ブランディング・ロゴ作成（AI画像生成）"
      ],
      icon: "🛠️",
      color: "green"
    },
    {
      number: "Day3",
      title: "【3日目】自動化システム構築", 
      description: "寝ている間も稼ぐ仕組みを完成させる",
      details: [
        "完全自動化された販売システム構築",
        "AIチャットボットでカスタマーサポート自動化",
        "SNS投稿・マーケティングの自動化設定",
        "収益分析ダッシュボードの設置"
      ],
      icon: "⚙️",
      color: "purple"
    },
    {
      number: "Day4",
      title: "【4日目】運用開始＆帰国準備",
      description: "実際にリリース！帰国後の完全運営体制を整える",
      details: [
        "実際に事業をリリース・販売開始",
        "帰国後のリモート運営マニュアル完成",
        "収益最大化のためのPDCAサイクル設計",
        "T78コミュニティ参加権利の付与"
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
          <div className="bg-red-600 text-white px-8 py-4 rounded-full inline-block mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              🚨 革命的！たった3泊4日で人生が変わる
            </h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">実践特化の海外ノマド講座</span><br />
            AIフル活用でスモールビジネス構築
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            <strong>帰国後から事業運営がスタートできる状態まで持っていきます。あとは動くだけ。</strong>
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-6 rounded-lg max-w-4xl mx-auto">
            <p className="text-lg font-semibold">
              💼 <strong>会社に勤めるサラリーマンでさえも、船は作るべき。</strong><br />
              有給休暇4日間で、一生の安心を手に入れる投資をしませんか？
            </p>
          </div>
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

        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl text-white p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ⚡ たった3泊4日で完結！
          </h3>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            <strong>有給休暇4日間</strong>で一生モノの事業スキルを習得<br />
            帰国時にはすでに<strong>稼働中の事業オーナー</strong>になっています
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl mb-2">🏃‍♂️</div>
              <div className="font-bold">超高速学習</div>
              <div className="text-sm mt-1">AI活用で学習効率10倍</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl mb-2">💼</div>
              <div className="font-bold">働きながら参加</div>
              <div className="text-sm mt-1">サラリーマンも安心</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-bold">即座にスタート</div>
              <div className="text-sm mt-1">帰国後すぐ運営開始</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl mb-2">🌊</div>
              <div className="font-bold">リスク回避</div>
              <div className="text-sm mt-1">会社員の副業からOK</div>
            </div>
          </div>

          <div className="bg-yellow-400 text-black p-6 rounded-2xl">
            <p className="text-xl md:text-2xl font-bold">
              🔥 会社に依存せず、自分の船で航海する人生を4日間で手に入れよう！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}