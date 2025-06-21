export default function Hero() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text text-lg font-semibold mb-4">
              Nomad X
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            <span className="text-blue-600">AIを活用して海外で</span>
            <br />
            <span className="text-blue-600">スモールビジネス事業を構築</span>
            <br />
            ──<span className="text-blue-700">自分だけの船を作って、</span>
            <br />
            <span className="text-blue-800">航海に出よう〜</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 mb-4 max-w-4xl mx-auto leading-relaxed">
            自分だけの船を作って、
            <br />
            航海に出よう
          </p>
          <p className="text-lg text-blue-700 mb-12 max-w-3xl mx-auto">
            ノマド型スモールビジネス育成スクール、ついに始動。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-xl">
              ▶ 無料ガイドを今すぐ受け取る
            </button>
            <a 
              href="https://www.youtube.com/@ichilife_radio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 inline-block text-center"
            >
              ▶ YouTubeチャンネルを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}