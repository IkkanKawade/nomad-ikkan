export default function ShipMetaphorSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🚢</div>
        <div className="absolute top-32 right-20 text-4xl">⚓</div>
        <div className="absolute bottom-20 left-32 text-5xl">🌊</div>
        <div className="absolute bottom-10 right-10 text-3xl">🧭</div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-red-400">🚨 沈みゆくタイタニック号</span>から
            <br />
            <span className="text-blue-300">⛵ 自分の船</span>へ
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 左側：沈みゆく日本 */}
          <div className="bg-red-900 bg-opacity-50 rounded-3xl p-8 border-2 border-red-500">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🚢💥</div>
              <h3 className="text-2xl font-bold text-red-300 mb-4">
                日本というタイタニック号
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-400 text-2xl mr-3">⚠️</span>
                <div>
                  <h4 className="font-semibold text-red-200 mb-1">少子高齢化の加速</h4>
                  <p className="text-red-100 text-sm">労働人口減少で経済縮小が止まらない</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-red-400 text-2xl mr-3">📉</span>
                <div>
                  <h4 className="font-semibold text-red-200 mb-1">円安・インフレの進行</h4>
                  <p className="text-red-100 text-sm">実質賃金の下落で生活が困窮</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-red-400 text-2xl mr-3">🏢</span>
                <div>
                  <h4 className="font-semibold text-red-200 mb-1">終身雇用の崩壊</h4>
                  <p className="text-red-100 text-sm">大企業でもリストラが当たり前の時代</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-red-400 text-2xl mr-3">🤖</span>
                <div>
                  <h4 className="font-semibold text-red-200 mb-1">AIによるスキル均一化</h4>
                  <p className="text-red-100 text-sm">技術格差がなくなり、サラリーマンの価値低下</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-red-800 rounded-lg text-center">
              <p className="font-bold text-red-200">
                🚨 このまま船に残っていては、一緒に沈んでしまう...
              </p>
            </div>
          </div>

          {/* 右側：自分の船を作る */}
          <div className="bg-blue-900 bg-opacity-50 rounded-3xl p-8 border-2 border-blue-500">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">⛵✨</div>
              <h3 className="text-2xl font-bold text-blue-300 mb-4">
                自分だけの事業という船
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-400 text-2xl mr-3">👑</span>
                <div>
                  <h4 className="font-semibold text-blue-200 mb-1">オーナーシップ</h4>
                  <p className="text-blue-100 text-sm">小さくても自分が船長。誰にも支配されない</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-400 text-2xl mr-3">🌍</span>
                <div>
                  <h4 className="font-semibold text-blue-200 mb-1">場所の自由</h4>
                  <p className="text-blue-100 text-sm">世界中どこでも事業を展開可能</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-400 text-2xl mr-3">📈</span>
                <div>
                  <h4 className="font-semibold text-blue-200 mb-1">成長の可能性</h4>
                  <p className="text-blue-100 text-sm">努力次第で収入に上限なし</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-400 text-2xl mr-3">🤖</span>
                <div>
                  <h4 className="font-semibold text-blue-200 mb-1">AIを武器に</h4>
                  <p className="text-blue-100 text-sm">最新技術を活用して効率的に事業運営</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-800 rounded-lg text-center">
              <p className="font-bold text-blue-200">
                ⛵ 今から船を作り、コツコツ航海していこう！
              </p>
            </div>
          </div>
        </div>

        {/* 下部：行動への呼びかけ */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-3xl p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            🚀 今すぐ自分の船（事業）作りを始めよう！
          </h3>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            <strong>Nomad X</strong>では、海外でAIを駆使した<br />
            あなただけのスモール事業という「船」を<br />
            <strong>ゼロから現地で構築</strong>するサポートをします。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl mb-2">🗺️</div>
              <div className="font-bold">航海図の作成</div>
              <div className="text-sm mt-1">事業計画・戦略設計</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-bold">船の建造</div>
              <div className="text-sm mt-1">AI活用システム構築</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-3xl mb-2">⚓</div>
              <div className="font-bold">安全な港</div>
              <div className="text-sm mt-1">T78コミュニティ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}