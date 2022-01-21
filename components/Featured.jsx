import Image from "next/image";
import React from "react";
import styles from "../styles/Featured.module.css";
import { useState } from "react";

function Featured() {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/pexels-pablo-macedo-845811.jpg",
    "/img/pexels-vinicius-benedit-1082343.jpg",
    "/img/pexels-krisp-cut-1653877.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction == "l") {
      setIndex(index !== 0 ? index - 1 : images.length - 1);
    }
    if (direction == "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        {/* When using layout fill a parent container is needed */}
        <Image
          src="/img/arrowl.png"
          alt="left arrow"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt="left arrow"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Featured;
