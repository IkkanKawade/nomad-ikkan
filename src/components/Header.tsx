export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">⛵</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">🤖</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                Nomad X
              </h1>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#youtube" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              YouTube
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              ポートフォリオ
            </a>
            <a href="https://amzn.asia/d/61X811U" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Kindle本
            </a>
            <a href="https://t78-community.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              T78
            </a>
            <a href="https://substack.com/@ichiblog1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              メルマガ
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}