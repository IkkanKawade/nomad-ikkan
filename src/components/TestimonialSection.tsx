export default function TestimonialSection() {
  const testimonials = [
    {
      name: "田中 優子さん",
      age: "30代・元会社員",
      location: "タイ・バンコク",
      before: "毎日満員電車で通勤、将来への不安で夜も眠れない日々",
      after: "半年後には月収30万円の海外ノマドに",
      story: "最初は不安でしたが、AIツールの使い方を覚えると世界が変わりました。今はバンコクのカフェで仕事をしながら、日本にいた頃の2倍の収入を得ています。生活費も安く、貯金も増えて精神的にとても楽になりました。",
      image: "👩‍💻",
      income: "¥300,000/月"
    },
    {
      name: "佐藤 健太さん", 
      age: "20代・大学中退",
      location: "ベトナム・ホーチミン",
      before: "大学中退でアルバイト生活、将来に絶望していた",
      after: "東南アジアで起業 → 今は自由に世界を旅してます",
      story: "学歴コンプレックスがありましたが、AIスキルには学歴は関係ないと気づきました。今では自分の会社を持ち、世界各国を回りながら仕事をしています。人生が180度変わりました。",
      image: "👨‍💼",
      income: "¥450,000/月"
    },
    {
      name: "山田 美咲さん",
      age: "40代・シングルマザー",
      location: "マレーシア・クアラルンプール", 
      before: "子育てと仕事の両立で体力の限界、経済的にも厳しい状況",
      after: "リモートワークで子どもとの時間も収入も両立",
      story: "子どもの教育環境を考えてマレーシアに移住。Nomad Xで学んだスキルでオンライン事業を立ち上げ、今では子どもとの時間を大切にしながら安定した収入を得ています。",
      image: "👩‍🏫",
      income: "¥280,000/月"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            受講生の<span className="text-green-600">成功事例</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            実際にNomad Xを受講して人生を変えた方々の生の声をお聞きください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{testimonial.image}</div>
                <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.age}</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mt-2 inline-block">
                  📍 {testimonial.location}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                  <h4 className="font-semibold text-red-800 mb-2">Before</h4>
                  <p className="text-red-700 text-sm">{testimonial.before}</p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <h4 className="font-semibold text-green-800 mb-2">After</h4>
                  <p className="text-green-700 text-sm">{testimonial.after}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                &ldquo;{testimonial.story}&rdquo;
              </blockquote>

              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-lg">
                  💰 {testimonial.income}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl text-white p-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">
              🎯 共通する成功パターン
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-yellow-400 text-black rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">学習期間</h4>
                <p className="text-gray-300 text-sm">平均3-4ヶ月で基礎スキル習得</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 text-black rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">収益化</h4>
                <p className="text-gray-300 text-sm">5-6ヶ月目から安定収入</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 text-black rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">海外移住</h4>
                <p className="text-gray-300 text-sm">半年以内に希望国へ移住</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 text-black rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">継続成長</h4>
                <p className="text-gray-300 text-sm">1年後には月収50万円超え</p>
              </div>
            </div>

            <div className="mt-8 bg-yellow-400 text-black p-6 rounded-lg">
              <p className="font-bold text-lg">
                💪 あなたも彼らと同じ道を歩むことができます！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}