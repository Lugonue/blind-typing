import { useSelector } from "react-redux";
import styles from "./finishStats.module.css";





const FinishStats = () => {
  const typePerMinutes = useSelector(state => state.inputText.typePerMinute);
  const currentTime = useSelector(state => state.timer.currentTime);



  return (

    <div className={styles.finishStatsContainer} >
      <div className={styles.finishStats}>
        <h2>FinishStats</h2>
        <p>Время : {currentTime.minutes} минут, {currentTime.seconds} секунд</p>
        <br />
        <hr />
        <p>Символов в минуту : {typePerMinutes}</p>

        {/* eslint-disable-next-line */}
        <button onClick={() => { location.reload() }}>Начать заново!</button>
      </div>
    </div>
  )
}

export default FinishStats;