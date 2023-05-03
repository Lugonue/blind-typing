import { useDispatch, useSelector } from "react-redux";
import { setStartTime } from "./StatisticBar/timer/TimerSlice";
import styles from "./StartBtn.module.css";


const StartButn = () => {
  const {status} = useSelector(state => state.timer);
  const dispatch = useDispatch();
  const startHandler = () => {
    dispatch(setStartTime());
  }


  return <button className={styles.Btn} onClick={startHandler}>Start</button>
}

export default StartButn;