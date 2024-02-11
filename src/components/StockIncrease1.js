import { useMemo } from "react";
import "./StockIncrease1.css";

const StockIncrease1 = ({
  arrow,
  arrow1,
  arrow2,
  showArrowIcon,
  arrowIcon,
  stockIncreaseHeight,
  backFontSize,
  backFontWeight,
  backColor,
}) => {
  const stockIncrease1Style = useMemo(() => {
    return {
      height: stockIncreaseHeight,
    };
  }, [stockIncreaseHeight]);

  const back10Style = useMemo(() => {
    return {
      fontSize: backFontSize,
      fontWeight: backFontWeight,
      color: backColor,
    };
  }, [backFontSize, backFontWeight, backColor]);

  return (
    <div className="stock-increase1" style={stockIncrease1Style}>
      {showArrowIcon && <img className="arrow-icon7" alt="" src={arrow} />}
      {!arrowIcon && <img className="arrow-icon8" alt="" src={arrow1} />}
      <img className="arrow-icon8" alt="" src={arrow2} />
      <div className="back13" style={back10Style}>
        4.70 (0.81 %)
      </div>
    </div>
  );
};

export default StockIncrease1;
