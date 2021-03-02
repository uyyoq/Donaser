import Link from 'next/link'


const Navbar = (props) => {
  return (
    <div className="fixed bg-white block inset-x-0 bottom-0 z-10">
      <div className="flex justify-around mb-4 cursor-pointer border-t pt-4 border-gray-300">
        <Link href="/mainMenu">
          <img className="md:h-10 md:w-auto" src={props.home} />
        </Link>
        <Link href="/donateStory">
          <img className="md:h-10 md:w-auto" src={props.love} />
        </Link>
        <div>
          <img className="md:h-10 md:w-auto" src={props.user} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
