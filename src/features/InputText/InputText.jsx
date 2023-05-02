import { useDispatch, useSelector } from "react-redux";
import styles from "./InputText.module.css";
import { setText } from "./InputTextSlice";
import { useEffect, useState } from "react";

const InputText = () => {
  const dispatch = useDispatch();
  const textHandler = (e) => {
    dispatch(setText(e.target.value));
  }


  // const inputText = useSelector(state => state.inputText.text);

  // useEffect(() => {
  //   console.log(inputText);
  // }, [inputText])

  return (
    <div className={styles.imputTextContainer}>
      <textarea className={styles.InputText} type="text" onChange={textHandler} />
    </div>

  )
}

export default InputText;