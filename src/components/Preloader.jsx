import { useEffect, useRef } from "react";
import "./Preloader.css";

function Preloader({ onEnd }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.onended = () => {
        onEnd();
      };
    }
  }, [onEnd]);

  return (
    <div className="preloader">
      <video
        ref={videoRef}
        src="src/assets/preloader.mp4"
        className="preloader-video"
        muted
        autoPlay
        playsInline
      />
    </div>
  );
}

export default Preloader;
