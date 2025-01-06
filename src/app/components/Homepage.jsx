import Image from "next/image"
import Categories from "./Categories/Categories"
import { menu } from "../lib/icons"
import Duas from "./Dua/Duas"


const Homepage = () => {
  return (
    <div>
      <div>
        <div className="w-full bg-white rounded-md mb-5 flex items-center gap-5 p-4 cursor-pointer md:hidden">
            <Image src={menu} height={100} width={100} alt="menu" className="h-4 w-4" />
            <h1>Duas importance</h1>
        </div>
        <div className="flex gap-5">
          <div>
              <Categories className="lg:ml-32" />
          </div>
          <Duas />
        </div>
    </div>
    </div>
  )
}

export default Homepage
