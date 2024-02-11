import { useMemo } from "react";
import Property1Default from "./Property1Default";
import "./Property1LabelOutlineDefau.css";

const Property1LabelOutlineDefau = ({
  plus,
  label,
  plus1,
  email,
  plus2,
  helperText,
  lineDiv,
  windowCloseIcon,
  leftHelperText,
  showHelperText,
  property1LabelOutlineDefaWidth,
  property1LabelOutlineDefaHeight,
  plusIconWidth,
  plusIconHeight,
  labelFontSize,
  textFieldWidth,
  textFieldBorderRadius,
  textFieldBorder,
  textFieldHeight,
  textFieldPadding,
  textFieldGap,
  textFieldAlignSelf,
  textFieldBackgroundColor,
  textFieldFlex,
  plusIconWidth1,
  plusIconHeight1,
  emailFontSize,
  emailColor,
  lineDivBorderRight,
  lineDivHeight,
  lineDivWidth,
  lineDivPosition,
  lineDivMargin,
  windowCloseIconWidth,
  windowCloseIconHeight,
  windowCloseIconPosition,
  windowCloseIconOverflow,
  leftHelperTextFlexDirection,
  leftHelperTextGap,
  leftHelperTextMargin,
  plusIconWidth2,
  plusIconHeight2,
  plusIconOverflow,
  plusIconBorderRight,
  helperTextFontSize,
  helperTextFontWeight,
  helperTextLineHeight,
  helperTextFontFamily,
  helperTextColor,
  helperTextTextAlign,
  helperTextWidth,
  helperTextHeight,
  helperTextOverflow,
}) => {
  const property1LabelOutlineDefauStyle = useMemo(() => {
    return {
      width: property1LabelOutlineDefaWidth,
      height: property1LabelOutlineDefaHeight,
    };
  }, [property1LabelOutlineDefaWidth, property1LabelOutlineDefaHeight]);

  const plusIconStyle = useMemo(() => {
    return {
      width: plusIconWidth,
      height: plusIconHeight,
    };
  }, [plusIconWidth, plusIconHeight]);

  const labelStyle = useMemo(() => {
    return {
      fontSize: labelFontSize,
    };
  }, [labelFontSize]);

  const property1DefaultStyle = useMemo(() => {
    return {
      width: textFieldWidth,
      borderRadius: textFieldBorderRadius,
      border: textFieldBorder,
      height: textFieldHeight,
      padding: textFieldPadding,
      gap: textFieldGap,
      alignSelf: textFieldAlignSelf,
      backgroundColor: textFieldBackgroundColor,
      flex: textFieldFlex,
    };
  }, [
    textFieldWidth,
    textFieldBorderRadius,
    textFieldBorder,
    textFieldHeight,
    textFieldPadding,
    textFieldGap,
    textFieldAlignSelf,
    textFieldBackgroundColor,
    textFieldFlex,
  ]);

  const plusIcon1Style = useMemo(() => {
    return {
      width: plusIconWidth1,
      height: plusIconHeight1,
    };
  }, [plusIconWidth1, plusIconHeight1]);

  const emailStyle = useMemo(() => {
    return {
      fontSize: emailFontSize,
      color: emailColor,
    };
  }, [emailFontSize, emailColor]);

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

  const leftHelperTextStyle = useMemo(() => {
    return {
      flexDirection: leftHelperTextFlexDirection,
      gap: leftHelperTextGap,
      margin: leftHelperTextMargin,
    };
  }, [leftHelperTextFlexDirection, leftHelperTextGap, leftHelperTextMargin]);

  const plusIcon2Style = useMemo(() => {
    return {
      width: plusIconWidth2,
      height: plusIconHeight2,
      overflow: plusIconOverflow,
      borderRight: plusIconBorderRight,
    };
  }, [plusIconWidth2, plusIconHeight2, plusIconOverflow, plusIconBorderRight]);

  const helperTextStyle = useMemo(() => {
    return {
      fontSize: helperTextFontSize,
      fontWeight: helperTextFontWeight,
      lineHeight: helperTextLineHeight,
      fontFamily: helperTextFontFamily,
      color: helperTextColor,
      textAlign: helperTextTextAlign,
      width: helperTextWidth,
      height: helperTextHeight,
      overflow: helperTextOverflow,
    };
  }, [
    helperTextFontSize,
    helperTextFontWeight,
    helperTextLineHeight,
    helperTextFontFamily,
    helperTextColor,
    helperTextTextAlign,
    helperTextWidth,
    helperTextHeight,
    helperTextOverflow,
  ]);

  return (
    <div
      className="property-1label-outline-defau"
      style={property1LabelOutlineDefauStyle}
    >
      <div className="label4">
        <img className="plus-icon1" alt="" src={plus} style={plusIconStyle} />
        <div className="label5" style={labelStyle}>
          {label}
        </div>
      </div>
      <Property1Default
        plus="/plus.svg"
        email="Email"
        lineDiv={false}
        windowCloseIcon={false}
        property1DefaultBorder="1px solid var(--grey-500)"
        property1DefaultBackgroundColor="unset"
        property1DefaultWidth="266px"
        property1DefaultBorderRadius="0px 4px 4px 0px"
        property1DefaultHeight="42px"
        property1DefaultPadding="var(--padding-xs) var(--padding-4xs)"
        property1DefaultGap="197px"
        property1DefaultAlignSelf="unset"
        property1DefaultFlex="unset"
        plusIconWidth="16px"
        plusIconHeight="16px"
        emailFontWeight="unset"
        emailColor="rgba(97, 97, 97, 0.5)"
        emailFontSize="14px"
        lineDivBorderRight="1px solid var(--color-black)"
        lineDivHeight="18px"
        lineDivWidth="1px"
        lineDivPosition="relative"
        lineDivMargin="unset"
        windowCloseIconWidth="16px"
        windowCloseIconHeight="16px"
        windowCloseIconPosition="relative"
        windowCloseIconOverflow="hidden"
      />
      {!leftHelperText && (
        <div className="left-helper-text" style={leftHelperTextStyle}>
          <img
            className="plus-icon1"
            alt=""
            src={plus2}
            style={plusIcon2Style}
          />
          {showHelperText && (
            <div className="helper-text" style={helperTextStyle}>
              {helperText}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Property1LabelOutlineDefau;
