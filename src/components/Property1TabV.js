import { useMemo } from "react";
import "./Property1TabV.css";

const Property1TabV = ({
  back,
  showRectangleDiv,
  property1TabV2Width,
  backColor,
  backFontWeight,
  backFontFamily,
  rectangleDivBackgroundColor,
}) => {
  const property1TabV2Style = useMemo(() => {
    return {
      width: property1TabV2Width,
    };
  }, [property1TabV2Width]);

  const backStyle = useMemo(() => {
    return {
      color: backColor,
      fontWeight: backFontWeight,
      fontFamily: backFontFamily,
    };
  }, [backColor, backFontWeight, backFontFamily]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  return (
    <div className="property-1tab-v2" style={property1TabV2Style}>
      <b className="back4" style={backStyle}>
        {back}
      </b>
      {showRectangleDiv && (
        <div className="property-1tab-v2-child" style={rectangleDivStyle} />
      )}
    </div>
  );
};

export default Property1TabV;
