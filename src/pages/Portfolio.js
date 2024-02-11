import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypePortofolio from "../components/TypePortofolio";
import FrameComponent from "../components/FrameComponent";
import Portfolio1 from "../components/Portfolio1";
import "./Portfolio.css";

const Portfolio = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/transaction-history");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/buy");
  }, [navigate]);

  const onFrameContainer22Click = useCallback(() => {
    navigate("/sell");
  }, [navigate]);

  return (
    <div className="portfolio">
      <TypePortofolio
        tradex="SAL."
        typePortofolioPosition="absolute"
        typePortofolioTop="0px"
        typePortofolioLeft="0px"
        logo6Width="108.1px"
        onFrameContainer2Click={onFrameContainer2Click}
        onFrameContainer3Click={onFrameContainer3Click}
        onFrameContainer6Click={onFrameContainer6Click}
      />
      <FrameComponent
        frameDivPosition="absolute"
        frameDivTop="30px"
        frameDivLeft="302px"
      />
      <Portfolio1
        totalInvestment="Total Value"
        portfolioPosition="absolute"
        portfolioTop="142px"
        portfolioLeft="302px"
      />
      <div className="buy-wrapper" onClick={onFrameContainer1Click}>
        <div className="buy">Buy</div>
      </div>
      <div className="sell-wrapper" onClick={onFrameContainer22Click}>
        <div className="sell">Sell</div>
      </div>
    </div>
  );
};

export default Portfolio;
