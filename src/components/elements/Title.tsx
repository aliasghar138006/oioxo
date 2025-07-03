import styles from "@templates/MainPage.module.css"
import { FC } from "react"

interface data {
    title :string,
    description : string
}

const Title:FC<data> = ({title , description}) => {
  return (
     <div className={styles.content}>
        <h3 className={styles.description}>
          🟢 <span>{title}</span>
        </h3>
        <p>
         {description}
        </p>
      </div>
  )
}

export default Title