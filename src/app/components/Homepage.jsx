'use client'
import Image from "next/image"
import Categories from "./Categories/Categories"
import { menu } from "../lib/icons"
import Duas from "./Dua/Duas"
import { useEffect, useRef, useState } from "react"


const Homepage = () => {
  const [toggle, setToggle] = useState(false)
  const categoryRef = useRef(null)

  const handleClickOutside = (event) => {
    console.log("handleClickOutside")
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      setToggle(false)
    }
  }

  useEffect(() => {
    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [toggle])

  return (
    <div>
      <div>
        <div className="w-full bg-white rounded-md mb-5 flex items-center gap-5 p-4 cursor-pointer lg:hidden" onClick={() => setToggle(!toggle)}>
            <Image src={menu} height={100} width={100} alt="menu" className="h-4 w-4" />
            <h1>Duas importance</h1>
        </div>
        <div className="flex gap-5">
          <div ref={categoryRef}>
              <Categories className={`lg:ml-32 ${toggle ? 'fixed lg:static top-0 left-0 bg-black/70 lg:bg-transparent w-full lg:w-auto h-full lg:h-auto' : 'hidden lg:block'}`} />
              {toggle && <p onClick={() => setToggle(false)} className="text-2xl p-5 cursor-pointer absolute  -top-2 right-0 md:left-80 lg:hidden">x</p>}
          </div>
          <Duas />
        </div>
    </div>
    </div>
  )
}

export default Homepage
