import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypePayment from "../components/TypePayment";
import Statusbar1 from "../components/Statusbar1";
import FrameComponent from "../components/FrameComponent";
import Overview from "../components/Overview";
import "./AdminPage.css";

const AdminPage = () => {
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

  return (
    <div className="admin-page-1">
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
      <div className="tdx">TDX</div>
      <Overview
        arrow="/arrow.svg"
        arrow1="/arrow.svg"
        selection="/selection@2x.png"
        arrow2="/arrow.svg"
        arrow3="/arrow.svg"
        selection1="/selection@2x.png"
        arrow4="/arrow.svg"
        arrow5="/arrow.svg"
        selection2="/selection@2x.png"
        arrow6="/arrow.svg"
        arrow7="/arrow.svg"
        selection3="/selection@2x.png"
        arrow8="/arrow.svg"
        arrow9="/arrow.svg"
        plus="/plus.svg"
        plus1="/plus.svg"
        overviewPosition="absolute"
        overviewTop="245px"
        overviewLeft="333px"
      />
      <b className="stocks-worth">Stocks Worth</b>
    </div>
  );
};

export default AdminPage;
