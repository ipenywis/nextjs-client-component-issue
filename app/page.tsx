import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.container}>
      <h2>
        Navigate to{" "}
        <b>
          <a href="/client-component">/client-component</a>
        </b>{" "}
        to see the error
      </h2>
    </div>
  );
}
