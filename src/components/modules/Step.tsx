import { FC } from "react";
import CircleItem from "../elements/CircleItem";

interface step_obj {
    title : string,
    description : string,
    number : string,
    startBtn :boolean
}

const Step:FC<step_obj> = ({ title, description, number , startBtn=false }) => {
  return (
    <div style={{ display: "flex" }}>
      <CircleItem number={number} />
      <div>
        <h3>{title}</h3>
        <p className="">{description}</p>
        {startBtn &&  <button style={{padding:"8px 20px" , marginTop:"10px"}} className="flex m-auto bg-[#0F172A] text-white border rounded-[100px] border-x-1 border-b-2 border-b-[#F38831] border-x-[#B547FF] cursor-pointer hover:shadow-lg transition-all duration-300 shadow-[#B547FF]">Get Started</button>
}
      </div>
    </div>
  );
}

export default Step;
