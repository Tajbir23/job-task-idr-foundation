import Image from "next/image"
import Search from "../Dua/Search"
import { logo } from "@/app/lib/icons"


const Topbar = ({className}) => {
  return (
    <div className={`flex items-center justify-between mb-2 ${className} md:bg-white lg:bg-transparent md:fixed left-0 top-0 md:w-full lg:w-auto md:px-3 lg:p-0 lg:static`}>
      <h1 className="font-semibold text-2xl hidden lg:block">Duas page</h1>
        <div className="lg:hidden flex items-center gap-5">
            <Image src={logo} width={100} height={100} className="h-[60px] w-[60px]" alt="logo" />
            <h1 className="font-semibold text-2xl">Dua & Ruqyah</h1>
        </div>
     
        <Search />
      
    </div>
  )
}

export default Topbar
