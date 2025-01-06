import { lefArrow, settings } from "@/app/lib/icons"
import Image from "next/image"

const SmTopbar = ({className}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-5">
          <Image src={lefArrow} height={100} width={100} alt="left arrow" className="h-4 w-4" />
          <h1 className="text-lg font-semibold ">Duas page</h1>
      </div>

      <Image src={settings} height={100} width={100} alt="settings" className="h-4 w-4" />
    </div>
  )
}

export default SmTopbar
