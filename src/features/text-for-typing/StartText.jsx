import {fetchTextAsync, actions as textActions} from './innerTextSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './StartText.module.css';

const StartText = () => {
  const dispatch = useDispatch();
  const text = useSelector(state => state.startText.text);

useEffect(() => {
  dispatch(fetchTextAsync());
}, []);

  return (
    <div className='text-container'>
      {text}
    </div>
  )
}


export default StartText;