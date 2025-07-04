import styles from "@modules/EndPolyLine.module.css"

function EndPolyLine() {
  return (
    <div>
        <div className={styles.start}>
            <div className={styles.circle}></div>
        </div>
        <div className={styles.middle}>
            
            <div className={styles.circleend}></div>
        </div>
       
       
    </div>
  )
}

export default EndPolyLine