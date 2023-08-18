import { useRef, memo } from "react";
import { useData } from "../../hooks/useData";
import styles from "./AddForm.module.css";

const AddForm = () => {
  const itemRef = useRef();

  const { updateCity, updateIsloading, updateError } = useData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const cityName = itemRef.current.value.trim();
    updateCity(cityName);
    updateIsloading(false);
    updateError(false);
    itemRef.current.value = "";
  };

  return (
    <form className={styles.addTodo} onSubmit={handleSubmit}>
      <label>Enter a location for weather information</label>
      <input type="text" name="add" ref={itemRef} />
    </form>
  );
};

export default memo(AddForm);
