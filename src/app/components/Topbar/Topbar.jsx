import Image from "next/image"
import Search from "../Dua/Search"
import { avatar, logo, settings } from "@/app/lib/icons"


const Topbar = ({className}) => {
  return (
    <div className={`flex items-center justify-between mb-2 ${className} md:bg-white lg:bg-transparent md:fixed left-0 top-0 md:w-full lg:w-auto md:px-3 lg:p-0 lg:static`}>
      <h1 className="font-semibold text-2xl hidden lg:block">Duas page</h1>
        <div className="lg:hidden flex items-center gap-5">
            <Image src={logo} width={100} height={100} className="h-[60px] w-[60px]" alt="logo" />
            <h1 className="font-semibold text-2xl">Dua & Ruqyah</h1>
        </div>
     
        <div className="flex gap-5 items-center">
          <Search />
          <div className="flex items-center gap-5 lg:flex-row-reverse xl:ml-56">
              <Image src={settings} height={100} width={100} alt="setting" className="h-4 w-4 cursor-pointer xl:hidden" />
              <Image src={avatar} height={100} width={100} alt="avatar" className="h-8 w-8 cursor-pointer" />
          </div>
        </div>
      
    </div>
  )
}

export default Topbar
