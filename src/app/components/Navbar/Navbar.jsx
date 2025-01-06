import { allduas, bookmarks, books, home, logo, memories, qna, ruqyah, support } from "@/app/lib/icons"
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
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
    <div className="fixed top-0 left-0 h-screen flex items-center justify-center p-10">
    <div className="h-full w-max p-3 bg-white rounded-3xl flex flex-col items-center justify-between">
    <Image src={logo} width={100} height={100} className="h-[73px] w-[73px]" alt="logo" />
    <ul className="flex flex-col gap-5 items-center justify-center">
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

    <Image src={support} width={100} height={100} className="h-[73px] w-[73px]" alt="logo" />
  </div>
    </div>
  )
}

export default Navbar
