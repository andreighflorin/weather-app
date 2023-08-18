import styles from "./Card.module.css";
import dayTime from "../../images/day.svg";
import nightTime from "../../images/night.svg";

const Card = ({ condition, location }) => {
  return (
    <div className={styles.card}>
      <img
        src={condition.is_day ? dayTime : nightTime}
        alt={condition.condition.text}
        className="card-img-top"
      />

      <div className={styles.icon}>
        <img src={condition.condition.icon} alt="" />
      </div>
      <div className={styles.text}>
        <h3>{location.name}</h3>
        <p>{condition.condition.text}</p>
        <div className={styles.degrees}>
          <span>{condition.temp_c}</span>
          <span>°C</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
