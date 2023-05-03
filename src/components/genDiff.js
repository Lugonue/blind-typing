import { useDispatch } from "react-redux";
import {setStopTimer} from "./StatisticBar/timer/TimerSlice";

const genDiff = (expected, actual) => {
  if (!expected || !actual) return true;
  if (expected === actual) {
    
    return 'final';
  } 
  return expected.slice(0, actual.length) === actual;
}

export default genDiff;