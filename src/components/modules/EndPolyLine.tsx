import styles from "@modules/EndPolyLine.module.css"
import mainStyles from "@templates/MainPage.module.css"

function EndPolyLine() {
  return (
    <div className={styles.container}>
        <div className={styles.start}>
          <div style={{width:"100%" , height:"100%"}} id={mainStyles.back}></div>
            <div className={styles.circle}></div>
        </div>
        <div className={styles.middle}>
            <div style={{width:"100%" , height:"100%"}} id={mainStyles.back}></div>
            <div className={styles.circleend}></div>
        </div>
       
       
    </div>
  )
}

export default EndPolyLine