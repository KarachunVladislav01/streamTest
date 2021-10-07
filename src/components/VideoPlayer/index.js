import styles from "./index.module.scss";
import { useEffect } from "react";

import WSAvcPlayer from "ws-avc-player";

function VideoPlayer({ url }) {
  useEffect(() => {
    if (url === "") return;
    const socketURL = `ws://${url}`;

    const wsavc = new WSAvcPlayer.default({ useWorker: false });

    //append the canvas to the box element, you can style the box element and canvas.
    document.getElementById("video-box").appendChild(wsavc.AvcPlayer.canvas);

    wsavc.connect(socketURL);
  }, [url]);

  return (
    <div className={styles.container}>
      <div className={styles.videoPlayer} id="video-box">
        <canvas id="cam" />
      </div>
    </div>
  );
}

export default VideoPlayer;
