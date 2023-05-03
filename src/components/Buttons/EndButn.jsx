import { useDispatch, useSelector } from "react-redux";
import { setStopTimer } from "../StatisticBar/timer/TimerSlice";
import styles from "./EndBtn.module.css";


const EndButn = () => {
  const dispatch = useDispatch();
  
  const startHandler = () => {
    dispatch(setStopTimer());
  }


  return <button className={styles.Btn} onClick={startHandler}>Stop</button>
}

export default EndButn;