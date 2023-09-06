import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";

const menuItems = [
  { text: "Docs", href: "#" },
  { text: "API", href: "#" },
  { text: "Help", href: "#" },
  { text: "Community", href: "#" },
];

type FooterProps = {
  appVersion: string;
};

export function Footer({ appVersion }: FooterProps) {
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
        <Image src="/icons/logo-small.svg" alt="logo" width={23} height={33} />
      </div>
      <div className={styles.versionContainer}>Version: {appVersion}</div>
    </footer>
  );
}
