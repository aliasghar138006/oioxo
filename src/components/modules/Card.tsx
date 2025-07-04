"use client"
import Image from "next/image"
import Item from "../elements/Item"
import BasicIcon from "@images/basic.png"
import StandardIcon from "@images/standard.png"
import { FC, useState} from "react"
import { text } from "stream/consumers"

interface card_data {
    clickHandler: (name:string) => void,
    title:string,
    boxSelect:{generate:boolean , hosting:boolean , upgrade:boolean},
    icon : string,
    account : string,
    text : string,
    discount : string,
    price: string,
    falseIndex : string[]
}



const Card:FC<card_data> = ({clickHandler , boxSelect , title , icon , account , text , discount , price , falseIndex }) => {
    const items = [
    {id:"1" , text:"AI Website Generator" , checked:true},
    {id:"2" , text:"Visual Editor (No Coding)" , checked:true},
    {id:"3" , text:"Download Your Website" , checked:true},
    {id:"4" , text:"Custom Domain" , checked:true},
    {id:"5" , text:"Hosting" , checked:true},
    {id:"6" , text:"Online Store + Full Setup" , checked:true},
]

 const [selected , setSelected] = useState(false);


 
  return (
  <div style={{padding:"2px" , marginTop:"10px"}} className={` rounded-2xl h-fit ${boxSelect[title] && "bg-linear-to-r from-[#330DDC] via-[#B547FF] to-[#F38831]"}`}>
      <div onClick={() => clickHandler(title)} style={{padding:"70px 30px"}} className={`h-fit rounded-2xl shadow-lg bg-white`}>
            <div className="flex items-center">
              <Image width={44} height={44} src={icon == "basic" ? BasicIcon : StandardIcon} alt="basic" />
              <span style={{marginLeft:"10px"}} className="font-bold">{account}</span>
            </div>
            <div className="flex items-center justify-between">
              <div style={{marginTop:"10px"}} className="text-[#606060]">{text}</div>
              <div style={{padding:"4px 16px"}} className="bg-radial-[at_50%_75%] from-[#ECB4D0] via-[#FFC4AB] to-[#F9E3B0] to-90% rounded-2xl text-[12px]">UP to $ {discount} discount</div>
            </div>
            <div style={{marginTop:"10px"}} className="flex items-center justify-between">
              <div>$ <span className="font-bold">{price}</span> <span className="text-[#5E6470]">/Annually</span></div>
              <div style={{marginRight:"15px"}} className="text-[#BA8803] text-[12px]">Taxt Included</div>
            </div>
            <h3 className="font-bold">What’s included</h3>
            
              <div>
                {items.map(item => (
                    
                <Item key={item.id} isTrue={item.id == falseIndex[0] || item.id == falseIndex[1] ? false : true} text={item.text} />
                ))}
                
              </div>
              <button style={{padding:"10px 40px" ,margin:"auto" , marginTop:"20px"}} className="flex bg-[#0F172A] text-white border rounded-[100px] border-x-1 border-b-2 border-b-[#F38831] border-x-[#B547FF] cursor-pointer hover:shadow-lg transition-all duration-300 shadow-[#B547FF]">Get Started</button>
              
            
    </div>
  </div>
  )
}

export default Card