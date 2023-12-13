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
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
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
      <Footer />
    </div>
  )
}
