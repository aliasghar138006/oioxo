import Image from "next/image"
import styles from "./page.module.css"
import back from "@images/back.jpg"

function page() {
  return (
 <div className={styles.container}>
    <div className="w-[100%] h-[265px] overflow-hidden relative">
    <div className="w-[100%] h-[265px] overflow-hidden absolute bg-gradient-to-l bg-gradient-[126deg] from-[1%] from-[#F38831] via-70% via-[#B547FF] to-100% to-[#330DDC] z-20"></div>
    <h1 className="absolute left-[15%] top-[20%] text-center text-white font-[700] text-[48px] z-20">Publish Your site with lightning Speed</h1>
    <button style={{padding:"10px 32px" , backgroundColor:"rgba(255, 255, 255, 0.2)"}} className="absolute cursor-pointer left-[45%] top-[55%] border border-[#FFFFFF] text-[white] rounded-[100px] z-20">Get Started</button>
     <Image style={{marginBottom:"100px"}} className="absolute top-[-200px] overflow-hidden" width={1440} height={265} src={back} alt="back" />
    <div className="absolute w-[100%] h-[265px] bg-[#00000066] opacity-[40%] z-10"></div>
        
   
   </div>
 </div>
  )
}

export default page