import { fetchTextAsync, actions as textActions } from './innerTextSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styles from './StartText.module.css';

const StartText = () => {
  const dispatch = useDispatch();
  const text = useSelector(state => state.startText.text);
  const inputText = useSelector(state => state.inputText.text);

  useEffect(() => {
    dispatch(fetchTextAsync());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textСontainer}>
        {text}
      </div>
      <div className={styles.inputText}>
        <span className={styles.text}>{inputText}</span>
      </div>

    </div>
  )
}


export default StartText;