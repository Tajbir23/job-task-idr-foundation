import { search } from "@/app/lib/icons"
import Image from "next/image"
import Category from "./Category"


const Categories = ({className}) => {
  return (
    <div className={`${className} overflow-hidden`}>

        <div className="w-80 bg-white rounded-[10px] overflow-hidden">
            <div className="bg-[#1FA45B] rounded-t-[10px]">
                <h1 className="text-center font-semibold text-base p-5 text-white">Categories</h1>
            </div>

            <div className="p-5 flex items-center gap-5 relative ">
                <Image src={search} height={100} width={100} alt="support" className="h-6 w-6 absolute ml-2 p-1" />
                <input type="text" placeholder="Search" className="w-full p-2 pl-10 border rounded-md" />
            </div>

            <div className="overflow-y-auto flx flex-col gap-10 h-[calc(90vh-225px)]">
                <Category />
                <Category />
            </div>
        </div>
      
    </div>
  )
}

export default Categories
