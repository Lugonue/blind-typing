
import { useDispatch, useSelector } from 'react-redux';
import style from './StatisticBar.module.css';
import Timer from './timer/Timer';
import { useEffect, useState } from 'react';

import {setTypePerMinute} from '../../features/InputText/InputTextSlice.js'

const StatisticBar = () => {

  const dispatch = useDispatch();
  const { status, startTime, currentTime } = useSelector(state => state.timer);
  const typePerMinutes = useSelector(state => state.inputText.typePerMinute);
  const inputText = useSelector(state => state.inputText.text);
  const misses = useSelector(state => state.inputText.misses);

  useEffect(() => {
    const inputTextLength = inputText.length;
    const SecondCount = Math.round((Date.now() - startTime) / 1000);
    const result = Math.round((inputTextLength / SecondCount) * 60);
    if (!result) return;
    dispatch(setTypePerMinute(result));

  }, [currentTime])

  return (
    <div className={style.StatisticBar}>
      <div className={style.timer}>
        <span>Время</span><br />
        <span>{status === 'start' && <Timer />}</span>
      </div>
      <div className={style.typePerMinutes}>
        <span>Символов в минуту</span>
        <br />
        <span>{typePerMinutes}</span>
        <br />
        <span>Точность</span>
        <br />
        { inputText.lenght > 0 ? <span>{100 - ( misses / inputText.length * 100).toFixed(0)} %</span> : <span>0 %</span>}
      </div>
    </div>
  )
}


export default StatisticBar;