import Image from 'next/image'
import TrueIcon from "@images/true.png"
import FalseIcon from "@images/false.png"
import { FC } from 'react'


interface item_check {
    isTrue : boolean,
    text : string
}

const Item:FC<item_check> = ({isTrue , text}) => {
  return (
    <div className="flex items-center">
        <div style={{marginTop:"10px"}} className=''>
                  <Image width={32} height={32} src={isTrue ? TrueIcon : FalseIcon} alt="check" />
                </div>
                <div style={{marginLeft:"15px"}} className="text-[#404040] font-bold">
                  {text}
                </div>
    </div>
  )
}

export default Item