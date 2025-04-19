"use client";
import styles from "./Loader.module.css";
import { BeatLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1 className={styles.neon_effect}>Airomatics</h1>
      <BeatLoader color="#964bbf" loading size={30} />
    </div>
  );
}

export default Loader;
