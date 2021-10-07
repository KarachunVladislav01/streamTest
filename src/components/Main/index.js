import styles from "./index.module.scss";

import AudioPlayer from "../AudioPlayer";
import VideoPlayer from "../VideoPlayer";
import { useState } from "react";

function Main() {
  const [localAudioUrl, setLocalAudioUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const [localVideoUrl, setLocalVideoUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <input
          value={localAudioUrl}
          onChange={(event) => setLocalAudioUrl(event.target.value)}
          onBlur={() => setAudioUrl(localAudioUrl)}
          placeholder={"Audio"}
        />

        <input
          value={localVideoUrl}
          onChange={(event) => setLocalVideoUrl(event.target.value)}
          onBlur={() => setVideoUrl(localVideoUrl)}
          placeholder={"Video"}
        />
      </div>
      <div className={styles.bottom}>
        <AudioPlayer url={audioUrl} />
        <VideoPlayer url={videoUrl} />
      </div>
    </div>
  );
}

export default Main;
