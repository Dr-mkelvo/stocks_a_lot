import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({ frameDivPosition, frameDivTop, frameDivLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div className="welcome-back-parent" style={frameDivStyle}>
      <div className="welcome-back">Welcome back!</div>
      <div className="harvey-specter-parent">
        <div className="harvey-specter">Harvey Specter</div>
        <img className="frame-child" alt="" src="/frame-63.svg" />
      </div>
    </div>
  );
};

export default FrameComponent;
