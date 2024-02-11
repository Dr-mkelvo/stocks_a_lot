import { useMemo } from "react";
import Property1iconLeft from "./Property1iconLeft";
import "./ButtonGroup.css";

const ButtonGroup = ({
  plus,
  button,
  plus1,
  button1,
  buttonGroupWidth,
  buttonGroupBackgroundColor,
  buttonGroupGap,
  buttonGroupPosition,
  buttonGroupHeight,
  buttonGroupTop,
  buttonGroupRight,
  buttonGroupBottom,
  buttonGroupLeft,
  buttonSmallWidth,
  buttonSmallBorderRadius,
  buttonSmallBorder,
  buttonSmallHeight,
  buttonColor,
  buttonSmallWidth1,
  buttonSmallBorderRadius1,
  buttonSmallBackgroundColor,
  buttonSmallHeight1,
  buttonWidth,
  buttonHeight,
}) => {
  const buttonGroupStyle = useMemo(() => {
    return {
      width: buttonGroupWidth,
      backgroundColor: buttonGroupBackgroundColor,
      gap: buttonGroupGap,
      position: buttonGroupPosition,
      height: buttonGroupHeight,
      top: buttonGroupTop,
      right: buttonGroupRight,
      bottom: buttonGroupBottom,
      left: buttonGroupLeft,
    };
  }, [
    buttonGroupWidth,
    buttonGroupBackgroundColor,
    buttonGroupGap,
    buttonGroupPosition,
    buttonGroupHeight,
    buttonGroupTop,
    buttonGroupRight,
    buttonGroupBottom,
    buttonGroupLeft,
  ]);

  const property1iconLeftStyle = useMemo(() => {
    return {
      width: buttonSmallWidth,
      borderRadius: buttonSmallBorderRadius,
      border: buttonSmallBorder,
      height: buttonSmallHeight,
    };
  }, [
    buttonSmallWidth,
    buttonSmallBorderRadius,
    buttonSmallBorder,
    buttonSmallHeight,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  const property1iconLeftStyle1 = useMemo(() => {
    return {
      width: buttonSmallWidth1,
      borderRadius: buttonSmallBorderRadius1,
      backgroundColor: buttonSmallBackgroundColor,
      height: buttonSmallHeight1,
    };
  }, [
    buttonSmallWidth1,
    buttonSmallBorderRadius1,
    buttonSmallBackgroundColor,
    buttonSmallHeight1,
  ]);

  const buttonStyle1 = useMemo(() => {
    return {
      width: buttonWidth,
      height: buttonHeight,
    };
  }, [buttonWidth, buttonHeight]);

  return (
    <div className="button-group" style={buttonGroupStyle}>
      <Property1iconLeft
        plus="/plus.svg"
        button="Button"
        showPlusIcon={false}
        property1iconLeftWidth="163px"
        property1iconLeftBackgroundColor="unset"
        property1iconLeftHeight="37px"
        property1iconLeftBorder="1px solid var(--primary-blue)"
        property1iconLeftBorderRadius="0px 4px 4px 0px"
        buttonWidth="unset"
        buttonDisplay="inline-block"
        buttonColor="#0433bf"
        buttonHeight="unset"
      />
      <Property1iconLeft
        plus="/plus.svg"
        button="Button"
        showPlusIcon={false}
        property1iconLeftWidth="163px"
        property1iconLeftBackgroundColor="#0433bf"
        property1iconLeftHeight="37px"
        property1iconLeftBorder="unset"
        property1iconLeftBorderRadius="0px 4px 4px 0px"
        buttonWidth="50px"
        buttonDisplay="flex"
        buttonColor="#fafafa"
        buttonHeight="14px"
      />
    </div>
  );
};

export default ButtonGroup;
