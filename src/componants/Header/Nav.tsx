import Image from 'next/image'
// import Search from './search'
import Link from 'next/link'
// import { FaBars, FaTimes } from 'react-icons/fa'

function Nav() {
  // const [isOpen, setIsOpen] = useState(false)

  // function toggleMenu() {
  //   setIsOpen(!isOpen)
  //   if (!isOpen) {
  //     document.body.style.overflow = 'hidden'
  //   } else {
  //     document.body.style.overflow = 'auto'
  //   }
  // }

  // const handleLinkClick = () => {
  //   toggleMenu()
  // }

  return (
    <>
      <div className="  sticky left-0 right-0 top-0 z-50 flex h-20  items-center justify-between bg-white/75 px-4 px-4 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/75">
        <nav className="container mx-auto flex w-full max-w-7xl items-center justify-between">
          <Link href="/">
            <Image src="/Logo.svg" alt="logo" width={100} height={100} />
          </Link>
          <div className="hidden w-full justify-center  xl:flex">
            <nav className="text-lg flex w-full justify-between px-8 font-normal">
              <div className=" mx-4 transition ease-in hover:font-bold lg:mx-4">
                <Link href={'/why-stoke'}>Why Here</Link>
              </div>
              <div className=" mx-4 transition ease-in hover:font-bold lg:mx-4">
                <Link href={'/major-projects'}>Major Projects</Link>
              </div>

              <div className="transition-500 mx-4  transition ease-in hover:font-bold lg:mx-4">
                <Link href={'/blog'}>News</Link>
              </div>
              <div className="transition-500 mx-4  transition ease-in hover:font-bold lg:mx-4">
                <Link href={'/our-services'}>Our Services</Link>
              </div>
              <div className="transition-500 mx-4  transition ease-in hover:font-bold lg:mx-4">
                <Link href={'/contact-us'}>Contact Us</Link>
              </div>
            </nav>
          </div>

          {/* <div className="flex w-full justify-end px-4 xl:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                'close'
              ) : (
                <Image
                  src={'/icons/burger.svg'}
                  height={25}
                  width={25}
                  alt={'burgermenu'}
                />
              )}
            </button>
          </div> */}
        </nav>
        {/* {isOpen && (
          <div className="fixed bottom-0 left-0 right-0 top-0 bg-white px-12">
            <nav className="container mt-24 flex flex-col py-4">
              <h4 className="text-2xl font-bold">How We Can Help</h4>
              <div
                className=" my-2 text-xl font-thin"
                onClick={handleLinkClick}
              >
                <Link href={'/why-stoke'}>Why Stoke-On-Trent</Link>
              </div>
              <div
                className=" my-2 text-xl font-thin"
                onClick={handleLinkClick}
              >
                <Link href={'/major-projects'}>Major Projects</Link>
              </div>
              <div className="my-2 text-xl font-thin" onClick={handleLinkClick}>
                <Link href={'/our-sectors'}>Our sectors</Link>
              </div>
              <div className="my-2 text-xl font-thin" onClick={handleLinkClick}>
                <Link href={'/our-services'}>Our services</Link>
              </div>

              <div
                className=" my-2 text-2xl font-bold"
                onClick={handleLinkClick}
              >
                <Link href={'/blog'}>News</Link>
              </div>
              <div
                className=" my-2 text-2xl font-bold"
                onClick={handleLinkClick}
              >
                <Link href={'/contact-us'}>Contact Us</Link>
              </div>

              <div className=" mt-2">
                <div className="flex gap-2">
                  <Image
                    src={'/icons/li.svg'}
                    height={50}
                    width={50}
                    alt="fb logo"
                    className="  bg-black p-3"
                  />
                  <Image
                    src={'/icons/twitter.svg'}
                    height={50}
                    width={50}
                    alt="fb logo"
                    className=" bg-black p-3"
                  />
                </div>
              </div>
              <div className="absolute right-6 top-6">
                <button onClick={toggleMenu}>
                  <svg viewBox="0 0 24 24" className="h-8 w-8">
                    <path
                      fill="currentColor"
                      d="M18.3 5.7c-.4-.4-1-.4-1.4 0L12 10.6 7.1 5.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L10.6 12l-4.9 4.9c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l4.9-4.9 4.9 4.9c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12l4.9-4.9c.4-.4.4-1 0-1.4z"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        )} */}
      </div>
    </>
  )
}

export default Nav
