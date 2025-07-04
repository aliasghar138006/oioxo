import styles from "@modules/TopPolyLine.module.css"
import React, { FC } from "react"


const TopPolyLine:FC<{children:React.ReactNode}> = ({children}) => {
  return (
     <div>
        <div className={styles.start}>
            <div className={styles.circle}></div>
        </div>
        <div className={styles.middle}>
            {children}
        </div>
        <div className={styles.end}>
            <div className={styles.circleend}></div>
        </div>
    </div>
  )
}

export default TopPolyLine