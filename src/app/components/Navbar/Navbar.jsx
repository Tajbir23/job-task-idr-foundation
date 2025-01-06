import { allduas, bookmarks, books, home, logo, memories, qna, ruqyah, support } from "@/app/lib/icons"
import Image from "next/image"
import Link from "next/link"


const Navbar = ({className}) => {
  const navItems = [
    {icon: home, href: "/"},
    {icon: allduas, href: '#'},
    {icon: memories, href: '#'},
    {icon: bookmarks, href: '#'},
    {icon: ruqyah, href: '#'},
    {icon: qna, href: '#'},
    {icon: books, href: '#'}
  ]
  return (
    <div className={`fixed w-full lg:w-max lg:top-0 left-0 bottom-0 flex items-center justify-center lg:p-10 ${className}`}>
    <div className="lg:h-full lg:w-max w-full p-3 bg-white lg:rounded-3xl rounded-t-3xl flex lg:flex-col items-center justify-between">
    <Image src={logo} width={100} height={100} className="h-[73px] w-[73px] hidden lg:block" alt="logo" />
    <ul className="flex lg:flex-col gap-5 items-center lg:justify-center justify-between w-full lg:w-auto">
      {navItems.map((item, index) => {
        return (
          <li key={index} className=" h-10 w-10 bg-[#E8F0F5] rounded-full flex items-center justify-center">
            <Link href={item.href}  >
              <Image src={item.icon} height={100} width={100} className="h-5 w-5 " alt="nav" />
            </Link>
          </li>
        )
      })}
    </ul>

    <Image src={support} width={100} height={100} className="h-[73px] w-[73px] hidden lg:block" alt="logo" />
  </div>
    </div>
  )
}

export default Navbar
