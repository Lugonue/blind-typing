import { useDispatch, useSelector } from "react-redux";
import styles from "./InputText.module.css";
import { setText } from "./InputTextSlice";
import { useEffect, useRef, useState } from "react";

const InputText = ( {alarm}) => {

  const textInput = useSelector(state => state.inputText.text);

  const dispatch = useDispatch();
  const input = useRef(null);

  const textHandler = (e) => {
    let value = e.target.value;
    if (alarm && value.length > textInput.length) {
      value = value.slice(0, -1);
    } else if (!alarm && value.length < textInput.length) {
      return;
    }
    dispatch(setText(value));
  }

  const blureHandler = () => {
    input.current.focus();
  }

  useEffect(() => {
    input.current.focus();
  }, [])

  return (
    <div className={styles.imputTextContainer}>
      <input ref={input} value={textInput} className={styles.InputText} type="text" onChange={textHandler} onBlur={blureHandler} />
    </div>

  )
}

export default InputText;