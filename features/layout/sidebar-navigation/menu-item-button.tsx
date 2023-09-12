import React from "react";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
  rotateIcon?: boolean;
};

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
  rotateIcon = false,
}: MenuItemProps) {
  return (
    <li className={classNames(styles.listItem, className)}>
      <button className={styles.anchor} onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={classNames(
            styles.icon,
            isCollapsed && rotateIcon && styles.rotate,
          )}
          src={iconSrc}
          alt={`${text} icon`}
        />{" "}
        {!isCollapsed && text}{" "}
      </button>
    </li>
  );
}
