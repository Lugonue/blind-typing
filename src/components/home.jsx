import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import InputText from "../features/InputText/InputText";
import StartText from "../features/text-for-typing/StartText";
import styles from "./Home.module.css";
import genDiff from "./genDiff";


const Home = () => {
  const [alarm, setAlarm] = useState(false);
  const startText = useSelector(state => state.startText.text);
  const inputText = useSelector(state => state.inputText.text);

useEffect(() => {
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
        < InputText />
      </div>
      <div className="statistic-field">
        {/* component */}
      </div>
      {alarm && <div className={styles.alarm}>Ошибся!</div>}
    </div>
  </main>
  )

}


export default Home;