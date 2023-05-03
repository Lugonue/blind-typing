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


const Home = () => {
  const dispatch = useDispatch();
  const [alarm, setAlarm] = useState(false);
  const startText = useSelector(state => state.startText.text);
  const inputText = useSelector(state => state.inputText.text);
  const {status} = useSelector(state => state.timer);

useEffect(() => {
  if (genDiff(startText, inputText) === 'final') {
    dispatch(setStopTimer());
  }
  if (!genDiff(startText, inputText)) {
    setAlarm(true);
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