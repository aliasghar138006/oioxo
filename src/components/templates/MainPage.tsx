"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from "@templates/MainPage.module.css";
import Image from "next/image";
import generateImage from "@images/first-picture.png";
import hostingImage from "@images/TV state.png";
import upgradeImage from "@images/upgrade.png";
import CircleItem from "@elements/CircleItem";
import Step from "../modules/Step";
import HeadBtn from "../elements/HeadBtn";
import Title from "../elements/Title";
import BasicIcon from "@images/basic.png"
import TrueIcon from "@images/true.png"
import FalseIcon from "@images/false.png"
import Item from "../elements/Item";
import Card from "../modules/Card";
import TopPolyLine from "../modules/TopPolyLine";
import EndPolyLine from "../modules/EndPolyLine";


function MainPage() {
  

  const [boxSelect , setBoxSelect] = useState<object>({
    generate : false,
    hosting :false,
    upgrade :false
  });



  const clickHandler = (name:string) :void => {
    const newItem = {
      generate : false,
    hosting :false,
    upgrade :false
    }

    newItem[name] = true;
    setBoxSelect(newItem)
  }

  return (
   
     <div className={styles.container}>
     <HeadBtn text="How it works" />
     <Title title="The Easiest Way to Build a Website" description="AI-generated, fully customizable, and instantly publishable — even without tech skills." />

      <div className={styles.svggenerate}>
        <div className={styles.generate}>
          <TopPolyLine>
            <Step
            title={"Generate with AI — Then Customize"}
            description={
              "Tell us what your website is about — your purpose, goals, and features. Our AI instantly builds a complete website for you. Then, fine-tune it using our easy-to-use visual editor — no coding needed. 🎨 Edit colors, layout, text, and images right in your browser."
            }
            number={"01"}
          />
          </TopPolyLine>
          <div>
            <Image
              width={374}
              height={331}
              src={generateImage}
              alt="generate"
            />
          </div>
        </div>
         <div className={styles.generate}>
          <Image width={500} height={311} src={hostingImage} alt="generate" />
          <Step
            title={"Choose Hosting — Download or Go Live"}
            description={
              "You can download your website and host it anywhere,or get instant hosting and a custom domain from us — already installed and ready. 🚀 One-click publishing with built-in security and speed."
            }
            number={"02"}
          />
        </div>
        <EndPolyLine />
         <div style={{display:"flex"}} className={styles.generate}>
          <Step
            title={"Upgrade to Pro — Launch Your Online Store"}
            description={
              "Need a full business setup? We’ll turn your site into a powerful online store — fully managed by us. 🛒 E-commerce, analytics, user management, SEO, and updates — all included."
            }
            number={"03"}
            startBtn={true}
          />
          <Image width={500} height={311} src={upgradeImage} alt="generate" />
             

        </div>
       

     

       
      </div>

    

      <div className={styles.svggenerate}>
       

      
      </div>
       <div className="">
         <HeadBtn text="Our Strong Elite Plan" />
        <Title title="Choose the Plan That Fits You Best" description="Flexible pricing designed to grow with your needs — whether you're just starting out or scaling up." />
    {/* Plan */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-2 items-center">
         

          <Card title="generate" clickHandler={clickHandler} boxSelect={boxSelect} icon={"basic"} account="Basic" text="Buy Per Site" discount="8" price="10-40" falseIndex={["5" , "6"]}/>
         
          

          <Card title="hosting" clickHandler={clickHandler} boxSelect={boxSelect}  icon={"standard"} account="Standard" text="Save at Scale" discount="10" price="80-150" falseIndex={["6"]} />
          
          

          <Card title="upgrade" clickHandler={clickHandler} boxSelect={boxSelect} icon={"basic"} account="Pro" text="Buy Per Site" discount="5" price="150-260" falseIndex={[]} />
          
        </div>
       </div>
      
      
     

          


        

    
   </div>
  );
}
export default MainPage;
