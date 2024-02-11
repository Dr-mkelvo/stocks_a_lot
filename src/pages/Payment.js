import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypePayment from "../components/TypePayment";
import Statusbar1 from "../components/Statusbar1";
import FrameComponent from "../components/FrameComponent";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/transaction-history");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/portfolio");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/deposit");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/deposit");
  }, [navigate]);

  return (
    <div className="payment">
      <TypePayment
        tradex="SAL."
        typePaymentPosition="absolute"
        typePaymentTop="0px"
        typePaymentLeft="0px"
        logo6Width="108.1px"
        onFrameContainer2Click={onFrameContainer2Click}
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
      <div className="deposit-funds-wrapper" onClick={onFrameContainer1Click}>
        <div className="deposit-funds">Deposit Funds</div>
      </div>
      <div className="withdraw-funds-wrapper" onClick={onFrameContainer22Click}>
        <div className="withdraw-funds">Withdraw Funds</div>
      </div>
    </div>
  );
};

export default Payment;
