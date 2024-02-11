import { useMemo } from "react";
import StockIncrease1 from "./StockIncrease1";
import "./Property1VerticalRightTop.css";

const Property1VerticalRightTop = ({
  arrow,
  arrow1,
  arrow2,
  property1VerticalRightTopWidth,
  property1VerticalRightTopHeight,
  backFontWeight,
  backColor,
  backFontSize,
  backFontWeight1,
  backWidth,
}) => {
  const property1VerticalRightTopStyle = useMemo(() => {
    return {
      width: property1VerticalRightTopWidth,
      height: property1VerticalRightTopHeight,
    };
  }, [property1VerticalRightTopWidth, property1VerticalRightTopHeight]);

  const back10Style = useMemo(() => {
    return {
      fontWeight: backFontWeight,
      color: backColor,
      fontSize: backFontSize,
    };
  }, [backFontWeight, backColor, backFontSize]);

  const back9Style = useMemo(() => {
    return {
      fontWeight: backFontWeight1,
      width: backWidth,
    };
  }, [backFontWeight1, backWidth]);

  return (
    <div
      className="property-1vertical-right-top"
      style={property1VerticalRightTopStyle}
    >
      <StockIncrease1
        arrow="/arrow.svg"
        arrow1="/arrow.svg"
        arrow2="/arrow.svg"
        showArrowIcon={false}
        arrowIcon
        stockIncreaseHeight="26px"
        backFontSize="16px"
        backFontWeight="900"
        backColor="#19814e"
      />
      <div className="back12" style={back9Style}>
        13,669.69
      </div>
    </div>
  );
};

export default Property1VerticalRightTop;
