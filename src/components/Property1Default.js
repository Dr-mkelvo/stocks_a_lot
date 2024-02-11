import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  plus,
  email,
  lineDiv,
  windowCloseIcon,
  property1DefaultBorder,
  property1DefaultBackgroundColor,
  property1DefaultWidth,
  property1DefaultBorderRadius,
  property1DefaultHeight,
  property1DefaultPadding,
  property1DefaultGap,
  property1DefaultAlignSelf,
  property1DefaultFlex,
  plusIconWidth,
  plusIconHeight,
  emailFontWeight,
  emailColor,
  emailFontSize,
  lineDivBorderRight,
  lineDivHeight,
  lineDivWidth,
  lineDivPosition,
  lineDivMargin,
  windowCloseIconWidth,
  windowCloseIconHeight,
  windowCloseIconPosition,
  windowCloseIconOverflow,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      border: property1DefaultBorder,
      backgroundColor: property1DefaultBackgroundColor,
      width: property1DefaultWidth,
      borderRadius: property1DefaultBorderRadius,
      height: property1DefaultHeight,
      padding: property1DefaultPadding,
      gap: property1DefaultGap,
      alignSelf: property1DefaultAlignSelf,
      flex: property1DefaultFlex,
    };
  }, [
    property1DefaultBorder,
    property1DefaultBackgroundColor,
    property1DefaultWidth,
    property1DefaultBorderRadius,
    property1DefaultHeight,
    property1DefaultPadding,
    property1DefaultGap,
    property1DefaultAlignSelf,
    property1DefaultFlex,
  ]);

  const plusIcon1Style = useMemo(() => {
    return {
      width: plusIconWidth,
      height: plusIconHeight,
    };
  }, [plusIconWidth, plusIconHeight]);

  const emailStyle = useMemo(() => {
    return {
      fontWeight: emailFontWeight,
      color: emailColor,
      fontSize: emailFontSize,
    };
  }, [emailFontWeight, emailColor, emailFontSize]);

  const lineDiv3Style = useMemo(() => {
    return {
      borderRight: lineDivBorderRight,
      height: lineDivHeight,
      width: lineDivWidth,
      position: lineDivPosition,
      margin: lineDivMargin,
    };
  }, [
    lineDivBorderRight,
    lineDivHeight,
    lineDivWidth,
    lineDivPosition,
    lineDivMargin,
  ]);

  const windowCloseIconStyle = useMemo(() => {
    return {
      width: windowCloseIconWidth,
      height: windowCloseIconHeight,
      position: windowCloseIconPosition,
      overflow: windowCloseIconOverflow,
    };
  }, [
    windowCloseIconWidth,
    windowCloseIconHeight,
    windowCloseIconPosition,
    windowCloseIconOverflow,
  ]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="left1">
        <img
          className="window-close-icon"
          alt=""
          src={plus}
          style={plusIcon1Style}
        />
        <div className="email" style={emailStyle}>
          {email}
        </div>
        {!lineDiv && <div className="left-child" style={lineDiv3Style} />}
      </div>
      {!windowCloseIcon && (
        <img
          className="window-close-icon"
          alt=""
          src="/plus.svg"
          style={windowCloseIconStyle}
        />
      )}
    </div>
  );
};

export default Property1Default;
