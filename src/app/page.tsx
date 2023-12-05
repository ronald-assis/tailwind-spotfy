import { Home as HomeIcon, Search, Library } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <nav className="mt-10 space-y-5">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <div>
            <nav className="mt-6 flex flex-col gap-3 border-t border-zinc-800 pt-6">
              <a className="text-sm text-zinc-400 hover:text-zinc-100">
                Hot Hits Brasil
              </a>
              <a className="text-sm text-zinc-400 hover:text-zinc-100">
                Aniver Funk
              </a>
              <a className="text-sm text-zinc-400 hover:text-zinc-100">
                My Playlist #13
              </a>
              <a className="text-sm text-zinc-400 hover:text-zinc-100">
                Top Brasil
              </a>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="border-t border-zinc-700 bg-zinc-800 p-6">
        footer
      </footer>
    </div>
  )
}
