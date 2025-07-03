import Image from "next/image"
import styles from "./page.module.css"
import back from "@images/back.jpg"

function page() {
  return (
   <div className="relative bg-gradient-to-r from-[#330DDC] via-[#B547FF] to-[#F38831] z-10">
    <h1 className="absolute left-[15%] top-[20%] text-center text-white font-bold text-[48px]">Publish Your site with lightning Speed</h1>
    <button style={{padding:"10px 32px" , backgroundColor:"rgba(255, 255, 255, 0.2)"}} className="absolute cursor-pointer left-[45%] top-[50%] border border-[#FFFFFF] text-[white] rounded-[100px]">Get Started</button>
        
     <Image className="w-[1440px] h-[265px] opacity-20" width={1000} height={1000} src={back} alt="back" />
   </div>
  )
}

export default page