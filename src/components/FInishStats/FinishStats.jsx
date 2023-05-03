import { useSelector } from "react-redux";
import styles from "./finishStats.module.css";





const FinishStats = () => {
  const typePerMinutes = useSelector(state => state.inputText.typePerMinute);
  const currentTime = useSelector(state => state.timer.currentTime);
  const misses = useSelector(state => state.inputText.misses);
  const inputText = useSelector(state => state.inputText.text);



  return (

    <div className={styles.finishStatsContainer} >
      <div className={styles.finishStats}>
        <h2>FinishStats</h2>
        <p>Время : {currentTime.minutes} минут, {currentTime.seconds} секунд</p>
        <br />
        <hr />
        <p>Символов в минуту : {typePerMinutes}</p>
        <hr />
        <p>Точность : { inputText.lenght > 0 ? <span>{100 - ( misses / inputText.length * 100).toFixed(0)} %</span> : <span>0 %</span>}</p>

        {/* eslint-disable-next-line */}
        <button onClick={() => { location.reload() }}>Начать заново!</button>
      </div>
    </div>
  )
}

export default FinishStats;