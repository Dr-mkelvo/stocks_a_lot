import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypePayment from "../components/TypePayment";
import FrameComponent from "../components/FrameComponent";
import Property1LabelOutlineDefau from "../components/Property1LabelOutlineDefau";
import DropdownDownArrow from "../components/DropdownDownArrow";
import StockChartContainer from "../components/StockChartContainer";
import "./Sell.css";

const Sell = () => {
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
    navigate("/portfolio");
  }, [navigate]);

  return (
    <div className="sell1">
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
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="30px"
        frameDivLeft="302px"
      />
      <div className="sell2">Sell</div>
      <div className="stock-listing">Stock Listing</div>
      <div className="frame-parent1">
        <div className="frame-parent2">
          <div className="account-total-container">
            <div className="account-total2">Account Total :</div>
            <div className="ksh-58400">Ksh. 58,400</div>
          </div>
          <Property1LabelOutlineDefau
            plus="/plus.svg"
            label="Abbreviation:"
            plus1="/plus.svg"
            email="AAPL"
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
          <Property1LabelOutlineDefau
            plus="/plus.svg"
            label="Share Amount:  "
            plus1="/plus.svg"
            email="480"
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
          <Property1LabelOutlineDefau
            plus="/plus.svg"
            label="Purchase Total:"
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
        <div className="submit-frame" onClick={onFrameContainer12Click}>
          <div className="submit2">Submit</div>
        </div>
      </div>
      <DropdownDownArrow
        tDX="Sell"
        dropdownDownArrowPosition="absolute"
        dropdownDownArrowTop="252px"
        dropdownDownArrowLeft="416px"
        dropdownDownArrowWidth="420px"
        frameDivAlignSelf="stretch"
        frameDivWidth="unset"
        frameDivAlignSelf1="stretch"
      />
      <StockChartContainer />
    </div>
  );
};

export default Sell;
