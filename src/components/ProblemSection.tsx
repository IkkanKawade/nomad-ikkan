export default function ProblemSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            日本人が<span className="text-blue-600">&ldquo;今&rdquo;</span>スモビジを始めるべき理由
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-2xl mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ⚠️ 危機感の喚起
              </h3>
              <p className="text-lg md:text-xl leading-relaxed">
                日本という大きなタイタニック号──<br />
                <strong>ゆっくり沈んでいると気づいていますか？</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💼 もはや幻想となった「安定」
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                安定を信じていた会社も、終身雇用も、もはや幻想
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                大企業でさえリストラが日常茶飯事
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                年金制度の破綻は時間の問題
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🌊 国・会社依存のリスク
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                国・会社に依存した人生は、リスクでしかない
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                円安・インフレで実質的な収入は目減り
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✗</span>
                税負担は増加の一途をたどる
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-10 rounded-2xl shadow-2xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-200">
            こんな悩みを抱えていませんか？
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-300 text-2xl mr-4">😰</span>
                <span className="text-lg">将来に漠然とした不安がある</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-300 text-2xl mr-4">💪</span>
                <span className="text-lg">自分の力で収入を得られるようになりたい</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-300 text-2xl mr-4">🌍</span>
                <span className="text-lg">海外で自由に生きてみたい</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-300 text-2xl mr-4">❓</span>
                <span className="text-lg">でも何から始めればいいか分からない</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-xl md:text-2xl font-semibold text-blue-200">
              でも、安心してください。
            </p>
            <p className="text-lg text-gray-300 mt-4">
              この問題には、確実な解決策があります。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}