import Link from "next/link";
import styles from "./footer.module.scss";

const menuItems = [
  { text: "Docs", href: "#" },
  { text: "API", href: "#" },
  { text: "Help", href: "#" },
  { text: "Community", href: "#" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link href={menuItem.href} className={styles.anchor}>
                {menuItem.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.logoContainer}>
        <img src="/icons/logo-small.svg" alt="logo" />
      </div>
      <div className={styles.versionContainer}>Version: 14.5.1</div>
    </footer>
  );
}
