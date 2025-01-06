import { search } from "@/app/lib/icons"
import Image from "next/image"


const Search = () => {
  return (
    <div className="float-right w-64 relative ">
      <input type="text" placeholder="Search by dua name" className="w-full p-2 border rounded-md pr-11" />
      <Image src={search} height={100} width={100} alt="search" className="absolute top-1 right-1 h-9 w-9 p-2 bg-[#F3F4F6] rounded-md cursor-pointer" />
    </div>
  )
}

export default Search
