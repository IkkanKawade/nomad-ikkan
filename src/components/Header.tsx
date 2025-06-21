export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">AI海外ノマド</h1>
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