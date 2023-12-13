import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from 'lucide-react'
import Image from 'next/image'

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
        <main className="flex-1 p-6">
          <div className="mt-4 flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="text-semibold mt-10 text-3xl">Good Afternoon</h1>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <a className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10">
              <Image
                src="/assets/album.jpeg"
                width={112}
                height={112}
                alt="Victin album cover"
              />
              <strong>Ninguém me Entende</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible ">
                <Play />
              </button>
            </a>
            <a className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10">
              <Image
                width={112}
                height={112}
                alt="Victin album cover"
                src="/assets/album.jpeg"
              />
              <strong>Ninguém me Entende</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible ">
                <Play />
              </button>
            </a>
            <a className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10">
              <Image
                src="/assets/album.jpeg"
                width={112}
                height={112}
                alt="Victin album cover"
              />
              <strong>Ninguém me Entende</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible ">
                <Play />
              </button>
            </a>
            <a className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10">
              <Image
                width={112}
                height={112}
                alt="Victin album cover"
                src="/assets/album.jpeg"
              />
              <strong>Ninguém me Entende</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible ">
                <Play />
              </button>
            </a>
            <a className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10">
              <Image
                src="/assets/album.jpeg"
                width={112}
                height={112}
                alt="Victin album cover"
              />
              <strong>Ninguém me Entende</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible ">
                <Play />
              </button>
            </a>
            <a className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10">
              <Image
                src="/assets/album.jpeg"
                width={112}
                height={112}
                alt="Victin album cover"
              />
              <strong>Ninguém me Entende</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible ">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="text-semibold mt-10 text-2xl">
            Made for Ronald Assis
          </h2>

          <div className="mt-4 grid grid-cols-8 gap-4">
            <div className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10">
              <Image
                className="w-full"
                src="/assets/album.jpeg"
                width={120}
                height={120}
                alt="Victin album cover"
              />
              <strong className="font-semibold ">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Victin</span>
            </div>
          </div>
        </main>
      </div>
      <footer className="flex items-center justify-between border-t border-zinc-700 bg-zinc-800 px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/album.jpeg"
            width={86}
            height={86}
            alt="Victin album cover"
          />
          <div className="flex flex-col">
            <strong className="font-normal ">Victin</strong>
            <span className="text-xsj text-zinc-400">Ninguém me Entende</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white pl-1 text-black">
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:32</span>
            <div className="h-1 w-96 rounded-full bg-zinc-600">
              <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 w-24 rounded-full bg-zinc-600">
              <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  )
}
