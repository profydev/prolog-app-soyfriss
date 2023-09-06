import Head from "next/head";
import { SidebarNavigation } from "../sidebar-navigation";
import { Footer } from "../footer";
import styles from "./page-container.module.scss";

type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
};

export function PageContainer({ children, title, info }: PageContainerProps) {
  const documentTitle = `ProLog - ${title}`;
  const appVersion = process.env.APP_VERSION || "";

  return (
    <div className={styles.container}>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarNavigation />
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.info}>{info}</div>
          {children}
        </main>
        <Footer appVersion={appVersion} />
      </div>
    </div>
  );
}
