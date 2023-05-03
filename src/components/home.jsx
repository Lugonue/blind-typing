import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import InputText from "../features/InputText/InputText";
import StartText from "../features/text-for-typing/StartText";
import styles from "./Home.module.css";
import genDiff from "./genDiff";
import StatisticBar from "./StatisticBar/StatisticBar";
import StartButn from "./StartButn";
import EndButn from "./EndButn";
import FinishStats from "./FInishStats/FinishStats";

import { setStopTimer } from "./StatisticBar/timer/TimerSlice";
import {setMisses} from "../features/InputText/InputTextSlice.js";


const Home = () => {
  const dispatch = useDispatch();
  const [alarm, setAlarm] = useState(false);
  const startText = useSelector(state => state.startText.text);
  const inputText = useSelector(state => state.inputText.text);
  const misses = useSelector(state => state.inputText.misses);
  const {status} = useSelector(state => state.timer);

useEffect(() => {
  if (genDiff(startText, inputText) === 'final') {
    dispatch(setStopTimer());
  }
  if (!genDiff(startText, inputText)) {
    setAlarm(true);
    if (misses > inputText.length) return
    dispatch(setMisses())
    return;
  }
  setAlarm(false);
}, [inputText])

return (
  <main>
    <div className={styles.container}>
      <div className={styles.textСontainer}>
        <StartText />
        <hr />
       { status === 'start' && < InputText alarm={alarm} />}
      </div>
      <div className={styles.statisticField}>
        
        {status === 'start' && <StatisticBar />}
        {status === 'stop' && <StartButn />}
        {status === 'start' && <EndButn />}
      </div>
      
      {alarm && <div className={styles.alarm}>Ошибся!</div>}
    </div>
    {status === 'finish' && < FinishStats />}
  </main>
  )

}


export default Home;