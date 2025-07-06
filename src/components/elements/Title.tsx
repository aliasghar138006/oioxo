import styles from "@templates/MainPage.module.css"
import { FC } from "react"

interface data {
    title :string,
    description : string,
    circle : boolean
}

const Title:FC<data> = ({title , description , circle=true}) => {
  return (
     <div className={styles.content}>
        <div className={styles.description}>
          {circle && <div className="w-[25px] h-[25px] bg-gradient-to-b from-[#22D322] to-[green] rounded-2xl sm:block hidden"></div>}
          <div>{title}</div>
        </div>
        <p>
         {description}
        </p>
      </div>
  )
}

export default Title