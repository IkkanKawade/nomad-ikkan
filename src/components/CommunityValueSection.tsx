export default function CommunityValueSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            このスクールの<span className="text-yellow-300">最大価値</span>は...
          </h2>
          <div className="bg-yellow-400 text-black p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              🌍 海外ノマドコミュニティへの参加
            </h3>
            <p className="text-xl leading-relaxed">
              単なる学習だけではない。<strong>リアルなノマドコミュニティ「T78」</strong>への参加権利を得て、<br />
              世界中の仲間と実際につながり、共に成長していく環境が手に入ります。
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              T78コミュニティとは？
            </h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              海外ノマドやノマドを目指す人が集まり、旅、学び、遊び、事業を仲間と一緒に形にしていくノマド集団。
              <br />
              小さなアイデアが自然とプロジェクトになり、何気ない会話から旅や新しい挑戦が始まる場所です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-4">
                遊び × 繋がり × ビジネス
              </h4>
              <p className="text-blue-100">
                旅や仕事、学びや遊びが自然に重なり合い、日常の中で新しい挑戦や出会いが生まれる場
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🌐</div>
              <h4 className="text-xl font-bold text-white mb-4">
                世界中どこからでも関われる
              </h4>
              <p className="text-blue-100">
                バンコクに住んでいなくても、オンラインを通じてどこからでも仲間と関わり、参加可能
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-white mb-4">
                多様な人と出会える
              </h4>
              <p className="text-blue-100">
                国籍や職業、バックグラウンドの垣根を超えて、多様な価値観を持つ仲間とつながれる
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-10">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            🏠 リアルな活動拠点「バンコク・オンヌット」
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h4 className="text-2xl font-semibold text-yellow-300 mb-4">
                実際に体験できる活動
              </h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">☀️</span>
                  参加型朝活サロン
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">🧑‍💻</span>
                  ノマド作業会
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">⚽️</span>
                  フットサル大会
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-3">🏠</span>
                  シェアハウス生活
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-yellow-300 mb-4">
                コミュニティの価値
              </h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">✨</span>
                  <span>お金を払えば入れる場所ではない、本当の仲間が集まる環境</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">💡</span>
                  <span>小さなアイデアが仲間との旅やプロジェクトに発展</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 mt-1">🚀</span>
                  <span>一人で頑張るのではなく、仲間とつながりながら成長</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="bg-yellow-400 text-black p-6 rounded-2xl inline-block">
              <p className="text-xl font-bold">
                💎 Nomad X受講生は、このT78コミュニティへの参加権利が付いてきます
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}