import styles from "./index.module.scss";

import AudioPlayer from "../FirstPlayer";
import { useState } from "react";

function Main() {
  const [localUrl, setLocalUrl] = useState("");
  const [url, setUrl] = useState("localhost:8080");

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <input
          value={localUrl}
          onChange={(event) => setLocalUrl(event)}
          onBlur={() => setUrl(localUrl)}
        />
      </div>
      <div className={styles.bottom}>
        <AudioPlayer url={url} />
      </div>
    </div>
  );
}

export default Main;
