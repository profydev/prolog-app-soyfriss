import styles from "./alert.module.scss";
import { Button } from "../button";

type AlertProps = {
  message: string;
  onRetry: () => void;
};

export function Alert({ message, onRetry }: AlertProps) {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.icon}
        src="/icons/alert-circle.svg"
        alt="Alert icon"
      />
      <span className={styles.message}>{message}</span>
      <Button className={styles.anchor} onClick={onRetry}>
        Try again
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.icon}
          src="/icons/arrow-right.svg"
          alt="Right arrow icon"
        />
      </Button>
    </div>
  );
}
