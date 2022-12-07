import Image from "next/image";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" objectFit="cover" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Problems Come and Go. Pizza is Forever.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1234 5th Avenue
            <br /> NewYork, 12345
            <br /> (212) 123 4560
          </p>
          <p className={styles.text}>
            1234 5th Avenue
            <br /> NewYork, 12345
            <br /> (212) 123 4560
          </p>
          <p className={styles.text}>
            1234 5th Avenue
            <br /> NewYork, 12345
            <br /> (212) 123 4560
          </p>
          <p className={styles.text}>
            1234 5th Avenue
            <br /> NewYork, 12345
            <br /> (212) 123 4560
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OPENING HOURS</h1>
          <p className={styles.text}>
            MONDAY - THURSDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            Friday - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
