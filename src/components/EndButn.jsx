import { useDispatch, useSelector } from "react-redux";
import { setStopTimer } from "./StatisticBar/timer/TimerSlice";
import {setText } from '../features/InputText/InputTextSlice.js'
import styles from "./EndBtn.module.css";


const EndButn = () => {
  const dispatch = useDispatch();
  const startHandler = () => {
    dispatch(setStopTimer());
    dispatch(setText(''));
  }


  return <button className={styles.Btn} onClick={startHandler}>Stop</button>
}

export default EndButn;