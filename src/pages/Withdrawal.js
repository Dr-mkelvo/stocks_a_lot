import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypePayment from "../components/TypePayment";
import Statusbar1 from "../components/Statusbar1";
import FrameComponent from "../components/FrameComponent";
import Property1LabelOutlineDefau from "../components/Property1LabelOutlineDefau";
import DropdownDownArrow from "../components/DropdownDownArrow";
import "./Withdrawal.css";

const Withdrawal = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onFrameContainer12Click = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <div className="withdrawal">
      <TypePayment
        tradex="SAL."
        typePaymentPosition="absolute"
        typePaymentTop="0px"
        typePaymentLeft="0px"
        logo6Width="108.1px"
        onFrameContainer1Click={onFrameContainer1Click}
        onFrameContainer5Click={onFrameContainer5Click}
        onFrameContainer8Click={onFrameContainer8Click}
      />
      <Statusbar1
        logo="/logo@2x.png"
        statusbarPosition="absolute"
        statusbarTop="0px"
        statusbarLeft="1099px"
      />
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="30px"
        frameDivLeft="302px"
      />
      <div className="withdrawal1">Withdrawal</div>
      <div className="frame-container">
        <div className="frame-div">
          <div className="account-total-group">
            <div className="account-total1">Account Total :</div>
            <div className="ksh-384001">Ksh. 38400</div>
          </div>
          <Property1LabelOutlineDefau
            plus="/plus.svg"
            label="Withdrawal Amount:  "
            plus1="/plus.svg"
            email="48,000"
            plus2="/plus.svg"
            helperText="Helper text"
            lineDiv={false}
            windowCloseIcon={false}
            leftHelperText={false}
            showHelperText
            property1LabelOutlineDefaWidth="420px"
            property1LabelOutlineDefaHeight="unset"
            plusIconWidth="22.2px"
            plusIconHeight="22.2px"
            labelFontSize="16.6px"
            textFieldWidth="unset"
            textFieldBorderRadius="5.55px"
            textFieldBorder="1.4px solid var(--grey-500)"
            textFieldHeight="58.3px"
            textFieldPadding="16.646615982055664px 12.484962463378906px"
            textFieldGap="273.28px"
            textFieldAlignSelf="stretch"
            textFieldBackgroundColor="unset"
            textFieldFlex="unset"
            plusIconWidth1="22.2px"
            plusIconHeight1="22.2px"
            emailFontSize="19.4px"
            emailColor="rgba(0, 0, 0, 0.5)"
            lineDivBorderRight="1.4px solid var(--color-black)"
            lineDivHeight="25px"
            lineDivWidth="1.4px"
            lineDivPosition="relative"
            lineDivMargin="unset"
            windowCloseIconWidth="22.2px"
            windowCloseIconHeight="22.2px"
            windowCloseIconPosition="relative"
            windowCloseIconOverflow="hidden"
            leftHelperTextFlexDirection="row"
            leftHelperTextGap="5.55px"
            leftHelperTextMargin="unset"
            plusIconWidth2="22.2px"
            plusIconHeight2="22.2px"
            plusIconOverflow="hidden"
            plusIconBorderRight="unset"
            helperTextFontSize="16.6px"
            helperTextFontWeight="900"
            helperTextLineHeight="140%"
            helperTextFontFamily="Poppins"
            helperTextColor="#000"
            helperTextTextAlign="left"
            helperTextWidth="unset"
            helperTextHeight="unset"
            helperTextOverflow="unset"
          />
        </div>
        <div className="submit-container" onClick={onFrameContainer12Click}>
          <div className="submit1">Submit</div>
        </div>
      </div>
      <DropdownDownArrow
        tDX="Withdrawal"
        dropdownDownArrowPosition="absolute"
        dropdownDownArrowTop="391px"
        dropdownDownArrowLeft="444px"
        dropdownDownArrowWidth="420px"
        frameDivAlignSelf="stretch"
        frameDivWidth="unset"
        frameDivAlignSelf1="stretch"
      />
    </div>
  );
};

export default Withdrawal;
