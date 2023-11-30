import { Home as HomeIcon, Search, Library } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <nav>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold"
            >
              <HomeIcon />
              home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold"
            >
              <Library />
              Your Library
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="border-t border-zinc-700 bg-zinc-800 p-6">
        footer
      </footer>
    </div>
  )
}
