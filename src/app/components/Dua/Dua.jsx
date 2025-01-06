import { allah, bookmark, copy, info, memory, play, share } from "@/app/lib/icons"
import Image from "next/image"


const Dua = ({children, heading, reference, audio=false}) => {
  return (
    <div className="p-5 w-full rounded-xl bg-white flex flex-col gap-5">
        <div className="flex gap-5 items-center">
            <Image src={allah} height={100} width={100} alt="allah" className="h-8 w-8" />
            <h1 className="text-base font-semibold text-[#1FA45B]">{heading}</h1>
        </div>

        {children}

        <div>
            <h1 className="text-[#1FA45B] font-medium">Reference:</h1>
            <p className="font-medium">{reference}</p>
        </div>

        <div className="flex items-center justify-between">
            <div>
                {audio &&<Image src={play} height={100} width={100} alt="audio" className="h-11 w-11 cursor-pointer" />}
            </div>
            <div className=" flex gap-5 items-center">
                <Image src={copy} height={100} width={100} alt="icon" className="h-4 w-4 cursor-pointer" />
                <Image src={bookmark} height={100} width={100} alt="icon" className="h-4 w-4 cursor-pointer" />
                <Image src={memory} height={100} width={100} alt="icon" className="h-4 w-4 cursor-pointer" />
                <Image src={share} height={100} width={100} alt="icon" className="h-4 w-4 cursor-pointer" />
                <Image src={info} height={100} width={100} alt="icon" className="h-4 w-4 cursor-pointer" />
        </div>
        </div>
    </div>
  )
}

export default Dua
