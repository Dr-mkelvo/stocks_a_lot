import Property1Default from "./Property1Default";
import "./TextField.css";

const TextField = ({ label, leftPlaceholder }) => {
  return (
    <div className="text-field">
      <div className="label8">
        <img className="plus-icon6" alt="" src="/plus.svg" />
        <div className="label9">{label}</div>
      </div>
      <Property1Default
        plus="/plus.svg"
        email="AAPL"
        lineDiv={false}
        windowCloseIcon={false}
        property1DefaultBorder="1.4px solid var(--grey-500)"
        property1DefaultBackgroundColor="unset"
        property1DefaultWidth="unset"
        property1DefaultBorderRadius="5.55px"
        property1DefaultHeight="58.3px"
        property1DefaultPadding="16.646615982055664px 12.484962463378906px"
        property1DefaultGap="273.28px"
        property1DefaultAlignSelf="stretch"
        property1DefaultFlex="unset"
        plusIconWidth="22.2px"
        plusIconHeight="22.2px"
        emailFontWeight="unset"
        emailColor="rgba(0, 0, 0, 0.5)"
        emailFontSize="19.4px"
        lineDivBorderRight="1.4px solid var(--color-black)"
        lineDivHeight="25px"
        lineDivWidth="1.4px"
        lineDivPosition="relative"
        lineDivMargin="unset"
        windowCloseIconWidth="22.2px"
        windowCloseIconHeight="22.2px"
        windowCloseIconPosition="relative"
        windowCloseIconOverflow="hidden"
      />
      <div className="left-helper-text2">
        <img className="plus-icon6" alt="" src="/plus.svg" />
        <div className="helper-text1">Helper text</div>
      </div>
    </div>
  );
};

export default TextField;
