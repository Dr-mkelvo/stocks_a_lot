import { useMemo } from "react";
import "./TransactionHistory1.css";

const TransactionHistory1 = ({
  transactionHistoryPosition,
  transactionHistoryTop,
  transactionHistoryLeft,
}) => {
  const transactionHistoryStyle = useMemo(() => {
    return {
      position: transactionHistoryPosition,
      top: transactionHistoryTop,
      left: transactionHistoryLeft,
    };
  }, [
    transactionHistoryPosition,
    transactionHistoryTop,
    transactionHistoryLeft,
  ]);

  return (
    <div className="transaction-history1" style={transactionHistoryStyle}>
      <div className="transaction-history2">Transaction History</div>
      <div className="all-wrapper">
        <div className="all">All</div>
      </div>
      <div className="complete-wrapper">
        <div className="complete">Complete</div>
      </div>
      <div className="pending-wrapper">
        <div className="pending">Pending</div>
      </div>
      <div className="cancelled-wrapper">
        <div className="complete">Cancelled</div>
      </div>
      <div className="frame-parent14">
        <div className="frame-parent15">
          <div className="transaction-id-wrapper">
            <div className="transaction-id">Transaction ID</div>
          </div>
          <div className="date-wrapper">
            <div className="date6">Date</div>
          </div>
          <div className="stocks-wrapper">
            <div className="stocks">Stocks</div>
          </div>
          <div className="amount-wrapper">
            <div className="amount3">Amount</div>
          </div>
          <div className="status-wrapper">
            <div className="status1">Status</div>
          </div>
        </div>
        <div className="frame-parent16">
          <div className="wrapper">
            <div className="success">#15267</div>
          </div>
          <div className="mar-1-2023-wrapper">
            <div className="mar-1-2023">Mar 1, 2023</div>
          </div>
          <div className="frame">
            <div className="div15">100</div>
          </div>
          <div className="wrapper1">
            <div className="div16">1</div>
          </div>
          <div className="success-wrapper">
            <div className="success">Success</div>
          </div>
        </div>
        <div className="frame-parent17">
          <div className="wrapper2">
            <div className="success">#153587</div>
          </div>
          <div className="jan-26-2023-wrapper">
            <div className="mar-1-2023">Jan 26, 2023</div>
          </div>
          <div className="wrapper3">
            <div className="div18">300</div>
          </div>
          <div className="wrapper4">
            <div className="div19">3</div>
          </div>
          <div className="success-container">
            <div className="success">Success</div>
          </div>
        </div>
        <div className="frame-parent18">
          <div className="wrapper2">
            <div className="success">#12436</div>
          </div>
          <div className="jan-26-2023-wrapper">
            <div className="feb-12-2033">Feb 12, 2033</div>
          </div>
          <div className="wrapper3">
            <div className="div15">100</div>
          </div>
          <div className="wrapper4">
            <div className="div16">1</div>
          </div>
          <div className="success-container">
            <div className="success">Success</div>
          </div>
        </div>
        <div className="frame-parent19">
          <div className="wrapper8">
            <div className="success">#16879</div>
          </div>
          <div className="feb-12-2033-container">
            <div className="feb-12-2033">Feb 12, 2033</div>
          </div>
          <div className="wrapper3">
            <div className="div18">500</div>
          </div>
          <div className="wrapper10">
            <div className="div19">5</div>
          </div>
          <div className="success-wrapper1">
            <div className="success">Success</div>
          </div>
        </div>
        <div className="frame-parent20">
          <div className="wrapper8">
            <div className="success">#16378</div>
          </div>
          <div className="feb-12-2033-container">
            <div className="feb-28-2033">Feb 28, 2033</div>
          </div>
          <div className="wrapper3">
            <div className="div18">500</div>
          </div>
          <div className="wrapper10">
            <div className="div19">5</div>
          </div>
          <div className="cancelled-container">
            <div className="success">Cancelled</div>
          </div>
        </div>
        <div className="frame-parent21">
          <div className="wrapper8">
            <div className="success">#16609</div>
          </div>
          <div className="feb-12-2033-container">
            <div className="march-13-2033">March 13, 2033</div>
          </div>
          <div className="wrapper3">
            <div className="div30">100</div>
          </div>
          <div className="wrapper10">
            <div className="div16">1</div>
          </div>
          <div className="success-wrapper1">
            <div className="success">Success</div>
          </div>
        </div>
        <div className="frame-parent22">
          <div className="wrapper8">
            <div className="success">#16907</div>
          </div>
          <div className="feb-12-2033-container">
            <div className="march-18-2033">March 18, 2033</div>
          </div>
          <div className="wrapper3">
            <div className="div30">100</div>
          </div>
          <div className="wrapper10">
            <div className="div16">1</div>
          </div>
          <div className="pending-container">
            <div className="success">Pending</div>
          </div>
        </div>
        <div className="pagination">
          <img
            className="bold-arrows-alt-arrow-left"
            alt=""
            src="/bold--arrows--alt-arrow-left.svg"
          />
          <img
            className="bold-arrows-alt-arrow-righ"
            alt=""
            src="/bold--arrows--alt-arrow-right.svg"
          />
          <div className="of-1-pages"> of 1 pages</div>
          <div className="pagination-button">
            <div className="pagination-button-child" />
            <div className="div35">1</div>
            <img
              className="bold-arrows-alt-arrow-left1"
              alt=""
              src="/bold--arrows--alt-arrow-left@2x.png"
            />
          </div>
        </div>
        <div className="pagination1">
          <div className="per-page"> per page</div>
          <div className="pagination-button1">
            <div className="pagination-button-item" />
            <div className="div36">10</div>
            <img
              className="bold-arrows-alt-arrow-left2"
              alt=""
              src="/bold--arrows--alt-arrow-left@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory1;
