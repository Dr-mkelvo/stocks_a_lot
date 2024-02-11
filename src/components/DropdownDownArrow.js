import { useMemo } from "react";
import "./DropdownDownArrow.css";

const DropdownDownArrow = ({
  tDX,
  dropdownDownArrowPosition,
  dropdownDownArrowTop,
  dropdownDownArrowLeft,
  dropdownDownArrowWidth,
  frameDivAlignSelf,
  frameDivWidth,
  frameDivAlignSelf1,
}) => {
  const dropdownDownArrowStyle = useMemo(() => {
    return {
      position: dropdownDownArrowPosition,
      top: dropdownDownArrowTop,
      left: dropdownDownArrowLeft,
      width: dropdownDownArrowWidth,
    };
  }, [
    dropdownDownArrowPosition,
    dropdownDownArrowTop,
    dropdownDownArrowLeft,
    dropdownDownArrowWidth,
  ]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const frameDiv3Style = useMemo(() => {
    return {
      width: frameDivWidth,
      alignSelf: frameDivAlignSelf1,
    };
  }, [frameDivWidth, frameDivAlignSelf1]);

  return (
    <div className="dropdown-down-arrow" style={dropdownDownArrowStyle}>
      <div className="dropdown-down-arrow-inner" style={frameDiv2Style}>
        <div className="tdx-parent" style={frameDiv3Style}>
          <div className="tdx1">{tDX}</div>
          <img
            className="vuesaxlineararrow-down-icon"
            alt=""
            src="/vuesaxlineararrowdown.svg"
          />
        </div>
      </div>
      <div className="frame-parent13">
        <div className="options-1-parent">
          <div className="options-1">Options 1</div>
          <div className="line-div" />
        </div>
        <div className="options-1-parent">
          <div className="options-1">Options 2</div>
          <div className="line-div" />
        </div>
        <div className="options-3-parent">
          <div className="options-1">Options 3</div>
          <div className="line-div" />
        </div>
        <div className="options-1-parent">
          <div className="options-1">Options 4</div>
          <div className="line-div" />
        </div>
        <div className="options-1-parent">
          <div className="options-1">Options 5</div>
          <div className="frame-child6" />
        </div>
      </div>
    </div>
  );
};

export default DropdownDownArrow;
