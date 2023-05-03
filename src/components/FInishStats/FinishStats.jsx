import { useDispatch, useSelector } from "react-redux";
import styles from "./finishStats.module.css";

import { setReset } from "../StatisticBar/timer/TimerSlice.js";
import {setText} from "../../features/InputText/InputTextSlice.js";


const FinishStats = () => {
  const typePerMinutes = useSelector(state => state.inputText.typePerMinute);
  const currentTime = useSelector(state => state.timer.currentTime);
  const misses = useSelector(state => state.inputText.misses);
  const inputText = useSelector(state => state.inputText.text);

  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(setReset());
    dispatch(setText(''));
  }

  return (

    <div className={styles.finishStatsContainer} onClick={resetHandler}>
      <div className={styles.finishStats}>
        <h2>Результат</h2>
        <p>Время : {currentTime.minutes} минут, {currentTime.seconds} секунд</p>
        <p>Символов в минуту : {typePerMinutes}</p>
        <p>Точность : {inputText.length > 0 ? <span>{100 - (misses / inputText.length * 100).toFixed(0)} %</span> : <span>0 %</span>}</p>

        {/* eslint-disable-next-line */}
        <button onClick={() => { location.reload() }}>Начать заново!</button>
      </div>
    </div>
  )
}

export default FinishStats;