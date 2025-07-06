"use client"
import Image from "next/image"
import Item from "../elements/Item"
import BasicIcon from "@images/basic.png"
import StandardIcon from "@images/standard.png"
import { FC, useState} from "react"
import { TbCurrencyDollar } from "react-icons/tb";


interface card_data {
    clickHandler: (name:string) => void,
    title:string,
    boxSelect:{generate:boolean , hosting:boolean , upgrade:boolean} | any,
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

 


 
  return (
  <div style={{padding:"2px" , marginTop:"10px"}} className={` rounded-2xl h-fit ${boxSelect[title] && "bg-linear-to-r from-[#330DDC] via-[#B547FF] to-[#F38831] shadow-2xl"}`}>
      <div onClick={() => clickHandler(title)} style={{padding:"70px 40px 30px 30px"}} className={`h-fit rounded-2xl ${boxSelect[title] && "shadow-xl"} shadow-lg bg-white`}>
            <div className="flex items-center">
              <Image width={44} height={44} src={icon == "basic" ? BasicIcon : StandardIcon} alt="basic" />
              <span style={{marginLeft:"10px"}} className="font-bold">{account}</span>
            </div>
            <div className="flex items-center justify-between">
              <div style={{marginTop:"10px"}} className="text-[#606060]">{text}</div>
              <div style={{padding:"4px 16px"}} className="bg-linear-to-l from-[#F9E3B0] from-13% via-[#FFC4AB] via-42% to-[#ECB4D0] to-87% rounded-2xl text-[12px]">UP to $ {discount} discount</div>
            </div>
            <div style={{marginTop:"10px"}} className="block md:flex items-center justify-between">
              <div className="flex items-center text-[22px]"> <TbCurrencyDollar /> <span className="font-bold text-[32px]">{price}</span> <span className="text-[#5E6470] text-[20px]">/Annually</span></div>
              <div style={{marginRight:"15px"}} className="text-[#BA8803] text-[12px]">Taxt Included</div>
            </div>
            <h3 className="font-bold">What’s included</h3>
            
              <div>
                {items.map(item => (
                    
                <Item key={item.id} isTrue={item.id == falseIndex[0] || item.id == falseIndex[1] ? false : true} text={item.text} />
                ))}
                
              </div>
              <button style={{padding:"10px 60px" ,margin:"auto" , marginTop:"20px"}} className="flex bg-[#0F172A] text-white border rounded-[100px] border-x-1 border-b-2 border-b-[#F38831] border-x-[#B547FF] cursor-pointer hover:shadow-lg transition-all duration-300 shadow-[#B547FF]">Get Started</button>
              
            
    </div>
  </div>
  )
}

export default Card