import styles from "@templates/MainPage.module.css"
import { FC } from "react"

const HeadBtn:FC<{text:string}> = ({text}) => {
  return (
     <div className={styles.headBtn}>
        <span className={styles.circle}></span>
        {text}
      </div>
  )
}

export default HeadBtn