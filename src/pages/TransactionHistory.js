import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypeActivities from "../components/TypeActivities";
import Statusbar1 from "../components/Statusbar1";
import FrameComponent from "../components/FrameComponent";
import TransactionHistory1 from "../components/TransactionHistory1";
import Property1Default1 from "../components/Property1Default1";
import DropdownDownArrow from "../components/DropdownDownArrow";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  const navigate = useNavigate();

  const onFrameContainer4Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  return (
    <div className="transaction-history">
      <TypeActivities
        typeActivitiesPosition="absolute"
        typeActivitiesTop="0px"
        typeActivitiesLeft="0px"
        onFrameContainer4Click={onFrameContainer4Click}
        onFrameContainer7Click={onFrameContainer7Click}
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
      <TransactionHistory1
        transactionHistoryPosition="absolute"
        transactionHistoryTop="346px"
        transactionHistoryLeft="302px"
      />
      <div className="payment-items-parent">
        <Property1Default1
          stocksWorth="Stocks Worth"
          property1DefaultPosition="relative"
          property1DefaultBackgroundColor="#dcfaed"
        />
        <Property1Default1
          stocksWorth="Deposits"
          property1DefaultPosition="relative"
          property1DefaultBackgroundColor="1.4px solid #e0e0e0"
        />
        <Property1Default1
          stocksWorth="Withdrawals"
          property1DefaultPosition="relative"
          property1DefaultBackgroundColor="#fff"
        />
      </div>
      <div className="print-transaction-history-wrapper">
        <div className="print-transaction-history">
          Print Transaction History
        </div>
      </div>
      <DropdownDownArrow
        tDX="TDX"
        dropdownDownArrowPosition="absolute"
        dropdownDownArrowTop="254px"
        dropdownDownArrowLeft="302px"
        dropdownDownArrowWidth="unset"
        frameDivAlignSelf="unset"
        frameDivWidth="188px"
        frameDivAlignSelf1="unset"
      />
      <div className="stock-ticker">Stock Ticker</div>
    </div>
  );
};

export default TransactionHistory;
