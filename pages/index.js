import Link from 'next/link'


export default function Home() {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex justify-center cursor-default">
        <img className="h-full w-16 md:w-20 lg:w-16" src="/front/company-logo.svg" />
      </div>
      <div className="flex flex-col justify-center mt-48 md:mt-60 cursor-pointe font-Open-sans">
        <Link href="/login">
          <a className="bg-gray-900 hover:bg-gray-800 text-white mb-4 py-1 mx-6 md:mx-48 font-semibold focus:outline-none text-center">LOG IN</a>
        </Link>
        <Link href="/login">
          <a className="border-2 border-gray-900 hover:border-gray-800 hover:text-gray-800 py-1 mx-6 md:mx-48 font-semibold focus:outline-none text-center">DAFTAR</a>
        </Link>
      </div>

    </div>
  )
}
