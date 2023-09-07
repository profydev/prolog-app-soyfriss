import styles from "./alert.module.scss";
import { Button } from "../button";

type AlertProps = {
  message: string;
  onButtonClick: () => void;
};

export function Alert({ message, onButtonClick }: AlertProps) {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.icon}
        src="/icons/alert-circle.svg"
        alt="Alert icon"
      />
      <span className={styles.message}>{message}</span>
      <Button className={styles.anchor} onClick={onButtonClick}>
        Try again
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.icon}
          src="/icons/arrow-right.svg"
          alt={`Right arrow icon`}
        />
      </Button>
    </div>
  );
}
