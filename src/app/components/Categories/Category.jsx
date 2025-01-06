import { duaAvatar } from "@/app/lib/icons"
import Image from "next/image"
import SubCategory from "./SubCategory"

const Category = () => {
  return (
    <div className="px-5">
        <div className="flex items-center justify-between cursor-pointer hover:bg-[#E8F0F5] rounded-[10px] ">
            <div className="flex items-center gap-5 p-5">
                <Image src={duaAvatar} height={100} width={100} alt="duas" className="h-10 w-10" />
                <div>
                    <h1 className="text-[#1FA45B]">Introduction to Dua</h1>
                    <p className="text-[#7E7E7E] text-sm">Subcategory: 11</p>
                </div>
            </div>
            <div className="border-l-2 px-5">
                <h1 className="text-center">15</h1>
                <p>Duas</p>
            </div>
        </div>

        <div>
            <SubCategory />
        </div>
    </div>
  )
}

export default Category
