import { fontSettings, general, language } from "@/app/lib/icons"
import Image from "next/image"


const Settings = () => {
  return (
    <div className="xl:min-w-64 h-[calc(100vh-140px)] bg-white rounded-lg">
      <div className="p-5">
          <h1 className="text-center text-xl mb-10">Settings</h1>
          <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5 bg-[#F7F8FA] rounded-lg w-full p-2 cursor-pointer">
                  <Image src={language} height={100} width={100} className="h-9 w-9 p-2 rounded-full bg-[#E8F0F5]" />
                  <h1 className="text-[#868686]">Language settings</h1>
              </div>
              <div className="flex items-center gap-5 bg-[#F7F8FA] rounded-lg w-full p-2 cursor-pointer">
                  <Image src={general} height={100} width={100} className="h-9 w-9 p-2 rounded-full bg-[#E8F0F5]" />
                  <h1 className="text-[#868686]">General settings</h1>
              </div>
              <div className="flex items-center gap-5 bg-[#F7F8FA] rounded-lg w-full p-2 cursor-pointer">
                  <Image src={fontSettings} height={100} width={100} className="h-9 w-9 p-2 rounded-full bg-[#E8F0F5]" />
                  <h1 className="text-[#868686]">Font settings</h1>
              </div>
              <div className="flex items-center gap-5 bg-[#F7F8FA] rounded-lg w-full p-2 cursor-pointer">
                  <Image src={fontSettings} height={100} width={100} className="h-9 w-9 p-2 rounded-full bg-[#E8F0F5]" />
                  <h1 className="text-[#868686]">Appearance settings</h1>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Settings
