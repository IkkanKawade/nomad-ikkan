export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AIで実現する
            <br />
            <span className="text-yellow-300">自由な働き方</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            人工知能を活用して場所に縛られない働き方を実現。海外ノマドとして生活するための知識とスキルを身につけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              YouTubeを見る
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              ポートフォリオを見る
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}