import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/bg.png"
          layout="fill"
          alt="background-img"
          objectFit="cover"
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            123 W John St <br /> New York, NY, 10002
            <br /> (123) 456-7890
          </p>
          <p className={styles.text}>
            123 W John St <br /> New York, NY, 10002
            <br /> (123) 456-7890
          </p>
          <p className={styles.text}>
            123 W John St <br /> New York, NY, 10002
            <br /> (123) 456-7890
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00am - 10:00pm
          </p>
          <p className={styles.text}>
            SATURDAY & SUNDAY
            <br /> 12:00pm - 12:00am
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
