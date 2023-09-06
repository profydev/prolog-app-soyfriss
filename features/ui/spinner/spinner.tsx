import Image from "next/image";
import styles from "./spinner.module.scss";

export function Spinner() {
  return (
    <Image
      src="/icons/loading.svg"
      alt="Loading"
      className={styles.loadingIcon}
      width={66}
      height={66}
    />
  );
}
