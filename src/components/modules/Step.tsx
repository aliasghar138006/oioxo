import { FC } from "react";
import CircleItem from "../elements/CircleItem";
import Mask from "@images/Mask.png"
import styles from "@templates/MainPage.module.css"
import CapitalWord from "@utils/CapitalizeWord"

interface step_obj {
    title : string,
    description : string,
    number : string,
    startBtn :boolean
}

const Step:FC<step_obj> = ({ title, description, number , startBtn=false }) => {
  return (
    <div id={number == "01" ? styles.back : styles.boxtwo} className={`flex ${number == "02" ? 'md:absolute md:right-[-15%]' : ''}`}>
      <CircleItem number={number} />
      <div style={number == "03" ? {width:"71%"}:{}}  className="md:w-[60%] w-[50%]">
        <h3>{title}</h3>
        <p style={{ whiteSpace: 'pre-wrap' }} className="">{CapitalWord(description)}</p>
        {startBtn &&  <button style={{padding:"8px 20px" , marginTop:"10px"}} className="flex m-auto bg-[#0F172A] text-white border text-[13px] md:text-[15px] rounded-[100px] border-x-1 border-b-2 border-b-[#F38831] border-x-[#B547FF] cursor-pointer hover:shadow-lg transition-all duration-300 shadow-[#B547FF]">Get Started</button>
}
      </div>
    </div>
  );
}

export default Step;
