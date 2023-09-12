import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "empty-gray",
  error = "error",
}

export enum ButtonIconPosition {
  leading = "leading",
  trailing = "trailing",
  only = "only",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size?: ButtonSize;
  color?: ButtonColor;
  iconSrc?: string;
  onClick: () => void;
  iconPosition?: ButtonIconPosition;
}

export function Button({
  text = "",
  size = ButtonSize.md,
  color = ButtonColor.primary,
  iconSrc = "",
  iconPosition = ButtonIconPosition.leading,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={classNames(styles.button, styles[size], styles[color])}
      onClick={onClick}
    >
      {iconSrc.length > 0 && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={iconSrc}
          alt={text === "" ? "icon" : `${text} icon`}
          className={classNames(styles.icon, styles[iconPosition])}
        />
      )}
      {iconPosition !== ButtonIconPosition.only && (
        <span className={styles.text}>{text}</span>
      )}
    </button>
  );
}
