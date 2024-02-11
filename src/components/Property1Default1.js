import { useMemo } from "react";
import "./Property1Default1.css";

const Property1Default1 = ({
  stocksWorth,
  property1DefaultPosition,
  property1DefaultBackgroundColor,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      backgroundColor: property1DefaultBackgroundColor,
    };
  }, [property1DefaultPosition, property1DefaultBackgroundColor]);

  return (
    <div className="property-1default1" style={property1Default1Style}>
      <div className="stocks-worth1">{stocksWorth}</div>
      <div className="as-of-01-december">as of 01-December 2022</div>
      <div className="div37">₹430.00</div>
    </div>
  );
};

export default Property1Default1;
