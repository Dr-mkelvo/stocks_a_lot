import { useMemo } from "react";
import "./TypePayment.css";

const TypePayment = ({
  tradex,
  typePaymentPosition,
  typePaymentTop,
  typePaymentLeft,
  logo6Width,
  onFrameContainer1Click,
  onFrameContainer2Click,
  onFrameContainer5Click,
  onFrameContainer8Click,
}) => {
  const typePaymentStyle = useMemo(() => {
    return {
      position: typePaymentPosition,
      top: typePaymentTop,
      left: typePaymentLeft,
    };
  }, [typePaymentPosition, typePaymentTop, typePaymentLeft]);

  const logo61Style = useMemo(() => {
    return {
      width: logo6Width,
    };
  }, [logo6Width]);

  return (
    <div className="typepayment" style={typePaymentStyle}>
      <div className="logo-61" style={logo61Style}>
        <b className="tradex1">{tradex}</b>
        <img className="logo-6-item" alt="" src="/group-39796.svg" />
      </div>
      <div className="essentional-group">
        <img className="essentional-icon1" alt="" src="/essentional.svg" />
        <div className="discover1">Discover</div>
      </div>
      <div className="money-group" onClick={onFrameContainer1Click}>
        <img className="essentional-icon1" alt="" src="/money.svg" />
        <div className="payment2">Payment</div>
      </div>
      <div className="arrow-container" onClick={onFrameContainer2Click}>
        <img className="essentional-icon1" alt="" src="/arrow.svg" />
        <div className="discover1">Transactions</div>
      </div>
      <div className="message-group">
        <img className="essentional-icon1" alt="" src="/message.svg" />
        <div className="discover1">Inbox</div>
      </div>
      <div className="setting-container">
        <img className="essentional-icon1" alt="" src="/setting.svg" />
        <div className="discover1">Settings</div>
      </div>
      <div className="arrow-parent1" onClick={onFrameContainer5Click}>
        <img className="essentional-icon1" alt="" src="/arrow.svg" />
        <div className="discover1">Logout</div>
      </div>
      <div className="user-group">
        <img className="essentional-icon1" alt="" src="/user.svg" />
        <div className="discover1">Profile</div>
      </div>
      <div className="typepayment-child" />
      <div className="setting-parent1">
        <img className="essentional-icon1" alt="" src="/setting.svg" />
        <div className="discover1">Dashboard</div>
      </div>
      <div className="school-group" onClick={onFrameContainer8Click}>
        <img className="essentional-icon1" alt="" src="/school.svg" />
        <div className="discover1">Portofolio</div>
      </div>
    </div>
  );
};

export default TypePayment;
