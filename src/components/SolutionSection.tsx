export default function SolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Nomad X</span>とは？
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-blue-600">海外でAIをフル活用して自分だけのスモールビジネスを<br />まるっと現地で構築するノマドスクールです。</strong>
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🎯 Nomad Xで得られるもの
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    海外滞在中に、AIを駆使したスモールビジネスを構築
                  </h4>
                  <p className="text-gray-600">
                    ChatGPTやAIツールを活用して、場所に依存しないビジネスモデルを現地で実践・構築します。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    小資本・低リスクで始められるビジネスモデル
                  </h4>
                  <p className="text-gray-600">
                    大きな初期投資は不要。AIツールと知識を活用して、リスクを最小限に抑えたビジネスを展開。
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    日本に帰国しても&ldquo;自分のビジネス&rdquo;がすでにある状態に
                  </h4>
                  <p className="text-gray-600">
                    海外経験を終えて帰国した時には、すでに安定した収入源を確立している状態を実現。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    現地サポート付き、ビザ・住まい・仕事環境もアドバイス
                  </h4>
                  <p className="text-gray-600">
                    ビジネス構築だけでなく、実際の海外生活に必要な情報やサポートも万全に提供。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl text-white p-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              ✨ なぜ今、<span className="text-blue-200">Nomad X</span>なのか？
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="bg-blue-400 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h4 className="text-xl font-semibold mb-3">AI革命の真っ只中</h4>
                <p className="text-gray-300">
                  AIが普及する今こそ、先行者利益を獲得できる絶好のタイミング
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-400 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h4 className="text-xl font-semibold mb-3">リモートワークの一般化</h4>
                <p className="text-gray-300">
                  場所に縛られない働き方が社会に受け入れられた今が参入チャンス
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-400 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h4 className="text-xl font-semibold mb-3">円安で海外生活が有利</h4>
                <p className="text-gray-300">
                  日本円で稼いで海外で使えば、実質的な購買力がアップ
                </p>
              </div>
            </div>

            <div className="bg-blue-400 text-white p-6 rounded-2xl">
              <p className="text-xl md:text-2xl font-bold">
                🚀 機会は今しかない！先行者になって自由な人生を手に入れよう
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}