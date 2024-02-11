import { useCallback } from "react";
import NavBar from "../components/NavBar";
import FrameComponent from "../components/FrameComponent";
import TextField from "../components/TextField";
import { useNavigate } from "react-router-dom";
import DropdownDownArrow from "../components/DropdownDownArrow";
import StockChartContainer from "../components/StockChartContainer";
import "./Buy.css";

const Buy = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  return (
    <div className="buy2">
      <NavBar />
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="30px"
        frameDivLeft="302px"
      />
      <div className="buy3">Buy</div>
      <div className="stock-listing1">Stock Listing</div>
      <div className="frame-parent23">
        <div className="frame-parent24">
          <div className="account-total-parent1">
            <div className="account-total3">Account Total :</div>
            <div className="ksh-384002">Ksh. 38400</div>
          </div>
          <TextField label="Abbreviation:" leftPlaceholder="AAPL" />
          <TextField label="Share Amount:  " leftPlaceholder="48,000" />
          <TextField label="Purchase Total:" leftPlaceholder="48,000" />
        </div>
        <div className="submit-wrapper1" onClick={onFrameContainer1Click}>
          <div className="submit3">Submit</div>
        </div>
      </div>
      <DropdownDownArrow
        tDX="Sell"
        dropdownDownArrowPosition="absolute"
        dropdownDownArrowTop="246px"
        dropdownDownArrowLeft="444px"
        dropdownDownArrowWidth="420px"
        frameDivAlignSelf="stretch"
        frameDivWidth="unset"
        frameDivAlignSelf1="stretch"
      />
      <StockChartContainer propTop="300px" propLeft="900px" />
    </div>
  );
};

export default Buy;
