import Link from 'next/link'


export default function Home() {
  return (
    <div className="flex flex-col justify-center mt-20 mx-auto container">
      <div className="flex justify-center cursor-default">
        <img className="h-full w-16 md:w-20 lg:w-16" src="/front/donaser_logo.svg" />
      </div>
      <div className="flex flex-col justify-center mt-48 md:mt-60 cursor-pointer font-Open-sans">
        <Link href="/login">
          <a className="bg-black hover:bg-gray-900 text-white mb-4 py-1 font-semibold focus:outline-none text-center">LOG IN</a>
        </Link>
        <Link href="/login">
          <a className="border-2 border-black hover:border-gray-800 hover:text-gray-800 py-1 font-semibold focus:outline-none text-center">DAFTAR</a>
        </Link>
      </div>

    </div>
  )
}
