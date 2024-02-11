import { useMemo } from "react";
import StockIncrease from "./StockIncrease";
import "./Property1list.css";

const Property1list = ({
  arrow,
  arrow1,
  arrow2,
  showBack,
  property1list2Width,
  backWidth,
  frameDivWidth,
  backFontWeight,
  backColor,
  stockIncreaseHeight,
  backFontWeight1,
}) => {
  const property1list2Style = useMemo(() => {
    return {
      width: property1list2Width,
    };
  }, [property1list2Width]);

  const back4Style = useMemo(() => {
    return {
      width: backWidth,
    };
  }, [backWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const back5Style = useMemo(() => {
    return {
      fontWeight: backFontWeight,
      color: backColor,
    };
  }, [backFontWeight, backColor]);

  const stockIncreaseStyle = useMemo(() => {
    return {
      height: stockIncreaseHeight,
    };
  }, [stockIncreaseHeight]);

  const back8Style = useMemo(() => {
    return {
      fontWeight: backFontWeight1,
    };
  }, [backFontWeight1]);

  return (
    <div className="property-1list-2" style={property1list2Style}>
      {showBack && (
        <div className="back5" style={back4Style}>
          GOOG
        </div>
      )}
      <div className="back-parent" style={frameDiv1Style}>
        <div className="back6" style={back5Style}>
          55695.72
        </div>
        <StockIncrease
          arrow="/arrow.svg"
          arrow1="/arrow.svg"
          arrow2="/arrow.svg"
          stockIncreaseHeight="42px"
          backFontSize="18px"
          backFontFamily="Poppins"
          backFontWeight="unset"
        />
      </div>
    </div>
  );
};

export default Property1list;
