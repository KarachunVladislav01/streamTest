import styles from "./index.module.scss";
import { useEffect } from "react";

import { PCMPlayer } from "../../utility/pcm-player/pcm-player";

function AudioPlayer({ url }) {
  useEffect(() => {
    const socketURL = `ws://${url}`;
    const player = new PCMPlayer({
      encoding: "16bitInt",
      channels: 2,
      sampleRate: 8000,
      flushingTime: 2000,
    });

    const ws = new WebSocket(socketURL);

    ws.binaryType = "arraybuffer";
    ws.addEventListener("message", function (event) {
      const data = new Uint8Array(event.data);
      player.feed(data);
    });
  }, [url]);

  return <div className={styles.container}></div>;
}

export default AudioPlayer;
