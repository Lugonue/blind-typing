import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "./TimerSlice";


const Timer = () => {

  const { currentTime, startTime, status } = useSelector(state => state.timer);
  const { seconds, minutes } = currentTime;
  const dispatch = useDispatch();

  const getTime = () => {
    return {
      seconds: Math.floor((Date.now() - startTime) / 1000 % 60),
      minutes: Math.floor((Date.now() - startTime) / 1000 / 60)
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setTime(getTime()));
    }, 1000);
    return () => clearInterval(interval);
  })
  
  return (
    <div>
      { minutes > 0 ? `${minutes} : ` : ''} {seconds}
    </div>
  )
}

export default Timer;