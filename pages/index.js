import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yayın var mı?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <h1 className={styles.title}>Olmadığında yok diyoruz.</h1>
        <h1 className={styles.author}>- ZEON</h1>
      </div>
    </div>
  );
}
