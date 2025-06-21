export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text text-lg font-semibold mb-4">
              Nomad X
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-yellow-400">AI × スモビジ × 海外</span>
            <br />
            ──&ldquo;自由な生き方&rdquo;は、
            <br />
            <span className="text-blue-300">今からでも創れる。</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto leading-relaxed">
            AIを活用して海外でスモールビジネスを立ち上げ、
            <br />
            自分だけのライフスタイルを手に入れる。
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            ノマド型スモールビジネス育成スクール、ついに始動。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-xl">
              ▶ 無料ガイドを今すぐ受け取る
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105">
              ▶ オンライン説明会に申し込む
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}